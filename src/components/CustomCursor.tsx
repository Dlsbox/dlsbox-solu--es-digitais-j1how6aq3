import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-mobile'

export function CustomCursor() {
  const isMobile = useIsMobile()
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef(false)

  useEffect(() => {
    if (isMobile) return

    let req: number

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const clickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')

      if (clickable !== isHoveringRef.current) {
        isHoveringRef.current = !!clickable
        setIsHovering(!!clickable)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.2
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.2

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px) translate(-50%, -50%) ${isHoveringRef.current ? 'scale(1.5)' : 'scale(1)'}`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) ${isHoveringRef.current ? 'scale(1.5)' : 'scale(1)'}`
      }

      req = requestAnimationFrame(render)
    }

    req = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(req)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 rounded-full bg-primary transition-[opacity,background-color] duration-300 ease-out',
          isVisible ? 'opacity-100' : 'opacity-0',
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-[99] h-8 w-8 rounded-full border border-primary/50 transition-[opacity,background-color,border-color] duration-300 ease-out',
          isHovering ? 'border-primary bg-primary/10' : '',
          isVisible ? 'opacity-100' : 'opacity-0',
        )}
      />
    </>
  )
}
