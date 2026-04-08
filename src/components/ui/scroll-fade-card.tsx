import React, { forwardRef, useRef } from 'react'
import { useScrollFadeOpacity } from '@/hooks/use-scroll-fade'
import { BentoCard } from '@/components/ui/bento-card'
import { cn } from '@/lib/utils'

interface ScrollFadeCardProps extends React.ComponentProps<typeof BentoCard> {
  fadeStart?: number
  fadeEnd?: number
  defaultBgClass?: string
  defaultBorderClass?: string
  hasShadow?: boolean
}

export const ScrollFadeCard = forwardRef<HTMLDivElement, ScrollFadeCardProps>(
  (
    {
      children,
      className,
      fadeStart = 0.75,
      fadeEnd = 0.25,
      defaultBgClass = 'bg-card',
      defaultBorderClass = 'border-border',
      hasShadow = true,
      ...props
    },
    forwardedRef,
  ) => {
    const bgRef = useRef<HTMLDivElement>(null)

    useScrollFadeOpacity(bgRef, fadeStart, fadeEnd)

    return (
      <BentoCard
        ref={forwardedRef}
        className={cn('!bg-transparent !border-transparent !shadow-none relative z-10', className)}
        {...props}
      >
        <div
          ref={bgRef}
          className={cn(
            'absolute inset-0 pointer-events-none transition-none -z-10',
            'border rounded-xl',
            defaultBgClass,
            defaultBorderClass,
            hasShadow && 'shadow-sm',
          )}
          style={{ borderRadius: 'inherit' }}
        />
        {children}
      </BentoCard>
    )
  },
)
ScrollFadeCard.displayName = 'ScrollFadeCard'
