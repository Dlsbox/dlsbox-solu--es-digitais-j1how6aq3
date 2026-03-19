import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const Terminal = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'z-0 flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card/50 shadow-sm transition-all',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-y-1.5 overflow-hidden p-4 font-mono text-xs leading-relaxed sm:text-sm">
        {children}
      </div>
    </div>
  )
}

export const TypingAnimation = ({
  children,
  className,
  delay = 0,
}: {
  children: string
  className?: string
  delay?: number
}) => {
  const [text, setText] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < children.length) {
        setText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 40)

    return () => clearInterval(typingInterval)
  }, [children, started])

  if (!started && text === '') return null

  return (
    <div className={cn('tracking-tight text-foreground', className)}>
      {text}
      {started && text.length < children.length && (
        <span className="ml-1 inline-block h-3.5 w-1.5 animate-pulse bg-foreground align-middle" />
      )}
    </div>
  )
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (!visible) return null

  return (
    <div className={cn('animate-in fade-in tracking-tight duration-300', className)}>
      {children}
    </div>
  )
}
