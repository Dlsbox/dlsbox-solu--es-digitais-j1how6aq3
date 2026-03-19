import { cn } from '@/lib/utils'
import React from 'react'

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function BentoCard({ children, className, ...props }: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[var(--r2)] border border-border bg-card p-6 md:p-8 transition-all hover:border-border/80 hover:shadow-sm dark:hover:shadow-none',
        className,
      )}
      {...props}
    >
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  )
}
