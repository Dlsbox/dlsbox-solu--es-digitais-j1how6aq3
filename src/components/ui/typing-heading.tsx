import { useState, useEffect, useRef, useMemo } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

export interface TypingSegment {
  text?: string
  className?: string
  element?: React.ReactNode
}

interface TypingHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  segments?: TypingSegment[]
  text?: string
  speed?: number
  delay?: number
  cursor?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p'
}

export function TypingHeading({
  segments,
  text,
  speed = 40,
  delay = 0,
  cursor = true,
  as: Tag = 'h2',
  className,
  ...props
}: TypingHeadingProps) {
  const [charCount, setCharCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true })

  const parsedSegments = useMemo(() => {
    if (segments) return segments
    if (text) return [{ text }]
    return []
  }, [segments, text])

  const totalChars = useMemo(() => {
    return parsedSegments.reduce((acc, seg) => acc + (seg.text?.length || 0), 0)
  }, [parsedSegments])

  useEffect(() => {
    if (isIntersecting && !started) {
      const timeout = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [isIntersecting, started, delay])

  useEffect(() => {
    if (!started) return

    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= totalChars) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, speed)

    return () => clearInterval(interval)
  }, [totalChars, speed, started])

  let currentCountVisible = 0

  return (
    <Tag ref={ref} className={cn('relative inline-block', className)} {...props}>
      {/* Invisible layer for layout sizing - perfectly reserves space to prevent layout shift */}
      <span className="invisible pointer-events-none">
        {parsedSegments.map((seg, i) => {
          if (seg.element) return <span key={`inv-${i}`}>{seg.element}</span>
          return (
            <span key={`inv-${i}`} className={seg.className}>
              {seg.text}
            </span>
          )
        })}
        {cursor && <span className="inline-block w-[0.15em] h-[0.9em] ml-1" />}
      </span>

      {/* Visible typing layer */}
      <span className="absolute inset-0" aria-hidden="true">
        {parsedSegments.map((seg, i) => {
          if (seg.element) {
            return charCount >= currentCountVisible ? (
              <span key={`vis-${i}`}>{seg.element}</span>
            ) : null
          }

          if (!seg.text) return null

          const segStart = currentCountVisible
          const segEnd = currentCountVisible + seg.text.length
          currentCountVisible = segEnd

          if (charCount <= segStart) return null

          const displayLength = Math.min(charCount - segStart, seg.text.length)
          const displayText = seg.text.slice(0, displayLength)

          return (
            <span key={`vis-${i}`} className={seg.className}>
              {displayText}
            </span>
          )
        })}
        {cursor && (
          <span
            className={cn(
              'inline-block w-[0.15em] h-[0.9em] bg-primary align-baseline ml-1 transition-opacity',
              charCount >= totalChars ? 'animate-pulse opacity-50' : 'opacity-100',
            )}
          />
        )}
      </span>
    </Tag>
  )
}
