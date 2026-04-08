import React, { useRef, useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

interface TiltProps extends React.HTMLAttributes<HTMLDivElement> {
  maxRotation?: number
  scale?: number
  glareEnable?: boolean
  glareMaxOpacity?: number
  glareColor?: string
}

export function Tilt({
  children,
  className,
  maxRotation = 15,
  scale = 1,
  glareEnable = true,
  glareMaxOpacity = 0.2,
  glareColor = '#ffffff',
  ...rest
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const [hasCoarsePointer, setHasCoarsePointer] = useState(false)

  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)
  const [glareOpacity, setGlareOpacity] = useState(0)

  const currentRotateX = useRef(0)
  const currentRotateY = useRef(0)
  const currentGlareX = useRef(50)
  const currentGlareY = useRef(50)
  const currentGlareOpacity = useRef(0)
  const currentScale = useRef(1)
  const animationFrameId = useRef<number>()

  const targetRotateX = useRef(0)
  const targetRotateY = useRef(0)
  const targetGlareX = useRef(50)
  const targetGlareY = useRef(50)
  const targetGlareOpacity = useRef(0)
  const targetScale = useRef(1)

  useEffect(() => {
    setHasCoarsePointer(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const isDisabled = isMobile || hasCoarsePointer

  const updateTransforms = useCallback(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
    const factor = 0.15 // Smooth spring-like factor

    currentRotateX.current = lerp(currentRotateX.current, targetRotateX.current, factor)
    currentRotateY.current = lerp(currentRotateY.current, targetRotateY.current, factor)
    currentGlareX.current = lerp(currentGlareX.current, targetGlareX.current, factor)
    currentGlareY.current = lerp(currentGlareY.current, targetGlareY.current, factor)
    currentGlareOpacity.current = lerp(
      currentGlareOpacity.current,
      targetGlareOpacity.current,
      factor,
    )
    currentScale.current = lerp(currentScale.current, targetScale.current, factor)

    setRotateX(currentRotateX.current)
    setRotateY(currentRotateY.current)
    setGlareX(currentGlareX.current)
    setGlareY(currentGlareY.current)
    setGlareOpacity(currentGlareOpacity.current)

    const isSettled =
      Math.abs(currentRotateX.current - targetRotateX.current) < 0.01 &&
      Math.abs(currentRotateY.current - targetRotateY.current) < 0.01 &&
      Math.abs(currentScale.current - targetScale.current) < 0.001 &&
      Math.abs(currentGlareOpacity.current - targetGlareOpacity.current) < 0.01

    if (!isSettled) {
      animationFrameId.current = requestAnimationFrame(updateTransforms)
    } else {
      animationFrameId.current = undefined
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled || !ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = (e.clientX - rect.left) / width
    const mouseY = (e.clientY - rect.top) / height

    targetRotateY.current = (mouseX - 0.5) * 2 * maxRotation
    targetRotateX.current = (0.5 - mouseY) * 2 * maxRotation

    targetGlareX.current = mouseX * 100
    targetGlareY.current = mouseY * 100

    const distFromCenter = Math.sqrt(Math.pow(mouseX - 0.5, 2) + Math.pow(mouseY - 0.5, 2))
    targetGlareOpacity.current = (distFromCenter / 0.707) * glareMaxOpacity

    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updateTransforms)
    }
  }

  const handleMouseEnter = () => {
    if (isDisabled) return
    targetScale.current = scale
  }

  const handleMouseLeave = () => {
    if (isDisabled) return
    targetRotateX.current = 0
    targetRotateY.current = 0
    targetGlareOpacity.current = 0
    targetScale.current = 1

    if (!animationFrameId.current) {
      animationFrameId.current = requestAnimationFrame(updateTransforms)
    }
  }

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn('relative [perspective:1000px]', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div
        className="w-full h-full relative rounded-[inherit]"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${currentScale.current})`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {children}

        {glareEnable && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden"
            style={{
              transform: 'translateZ(1px)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 50%)`,
                opacity: glareOpacity,
                mixBlendMode: 'overlay',
                willChange: 'opacity, background',
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
