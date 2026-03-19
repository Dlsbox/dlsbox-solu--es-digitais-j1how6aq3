import React from 'react'
import { cn } from '@/lib/utils'

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'relative flex min-h-[60vh] md:min-h-[80vh] flex-col items-center justify-center overflow-hidden w-full z-0',
        className,
      )}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center isolate z-0 pointer-events-none">
        {/* The Light Beam */}
        <div className="absolute top-1/2 w-[30rem] md:w-[60rem] max-w-[90%] h-[15rem] translate-y-[-100%] overflow-hidden flex justify-center opacity-80">
          <div className="absolute bottom-0 w-[150%] h-[200%] rounded-[50%] bg-[radial-gradient(circle_at_bottom_center,hsl(var(--primary)/0.4)_0%,transparent_60%)] blur-2xl" />
        </div>

        {/* Glowing Edge Line */}
        <div
          className="absolute top-1/2 z-40 h-[1px] w-[30rem] md:w-[60rem] max-w-[90%] bg-primary/80"
          style={{ boxShadow: '0 -2px 15px 2px hsl(var(--primary) / 0.5)' }}
        />

        {/* Core intense glow on the line */}
        <div className="absolute top-1/2 z-50 h-[80px] w-[15rem] md:w-[30rem] translate-y-[-50%] rounded-full bg-primary/40 blur-3xl" />
      </div>

      <div className="relative z-50 flex flex-col items-center w-full px-4 mt-16 md:mt-24">
        {children}
      </div>
    </div>
  )
}
