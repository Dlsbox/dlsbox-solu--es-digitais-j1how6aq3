import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export const Meteors = ({ number, className }: { number?: number; className?: string }) => {
  const [styles, setStyles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const newStyles = [...new Array(number || 20)].map(() => ({
      top: Math.floor(Math.random() * 100) - 50 + 'px',
      left: Math.floor(Math.random() * 300) + 'px',
      animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
    }))
    setStyles(newStyles)
  }, [number])

  return (
    <>
      {styles.map((style, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'pointer-events-none absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] animate-meteor-effect',
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className,
          )}
          style={style}
        />
      ))}
    </>
  )
}
