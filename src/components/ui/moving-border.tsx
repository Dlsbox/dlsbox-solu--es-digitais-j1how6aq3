import React from 'react'
import { cn } from '@/lib/utils'

export interface MovingBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string
  containerClassName?: string
  borderClassName?: string
  duration?: number
  as?: React.ElementType
}

export function Button({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}: MovingBorderButtonProps) {
  return (
    <Component
      className={cn(
        'bg-transparent relative p-[2px] overflow-hidden flex items-center justify-center',
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className={cn('absolute inset-0 z-0 overflow-hidden', borderClassName)}
        style={{
          borderRadius: borderRadius,
        }}
      >
        <div className="absolute left-1/2 top-1/2 aspect-square w-[300%] -translate-x-1/2 -translate-y-1/2">
          <div
            className="h-full w-full animate-spin rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_75%,blue_100%)]"
            style={{ animationDuration: `${duration}ms` }}
          />
        </div>
      </div>
      <div
        className={cn('relative z-10 flex h-full w-full items-center justify-center', className)}
        style={{
          borderRadius: `calc(${borderRadius} - 2px)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
