import { useEffect, useState } from 'react'

export function FixedBackgroundRelief() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background transition-colors duration-500">
      {/* Texture overlay (mineral paper feel) */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"
        style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
      />

      {/* Sculpted architectural shapes */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[45vw] h-[60vh] rounded-3xl bg-background border border-foreground/5 shadow-[20px_20px_60px_rgba(0,0,0,0.03),-20px_-20px_60px_rgba(255,255,255,0.8)] dark:shadow-[20px_20px_60px_rgba(0,0,0,0.4),-20px_-20px_60px_rgba(255,255,255,0.02)]"
        style={{ transform: `translateY(${-scrollY * 0.05}px) rotate(3deg)` }}
      />

      <div
        className="absolute top-[35%] right-[-10%] w-[35vw] h-[50vh] rounded-full bg-background border border-foreground/5 shadow-[inset_20px_20px_60px_rgba(0,0,0,0.02),inset_-20px_-20px_60px_rgba(255,255,255,0.8)] dark:shadow-[inset_20px_20px_60px_rgba(0,0,0,0.4),inset_-20px_-20px_60px_rgba(255,255,255,0.02)]"
        style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
      />

      <div
        className="absolute bottom-[-15%] left-[25%] w-[50vw] h-[40vh] bg-background border border-foreground/5 shadow-[20px_20px_60px_rgba(0,0,0,0.03),-20px_-20px_60px_rgba(255,255,255,0.8)] dark:shadow-[20px_20px_60px_rgba(0,0,0,0.4),-20px_-20px_60px_rgba(255,255,255,0.02)] skew-x-12"
        style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
      />
    </div>
  )
}
