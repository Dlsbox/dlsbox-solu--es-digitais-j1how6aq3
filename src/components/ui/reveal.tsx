import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 translate-y-6 blur-[4px] transition-all duration-1000',
        isIntersecting && 'opacity-100 translate-y-0 blur-none',
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
      }}
      {...props}
    >
      {children}
    </div>
  )
}
