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
      {/* Texture overlay (premium mineral paper / plaster feel) */}
      <div
        className="absolute inset-0 opacity-[0.4] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle fine architectural grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.02] dark:opacity-[0.03]"
        style={{ transform: `translateY(${-scrollY * 0.01}px)` }}
      />

      {/* Wireframe geometric relief elements (Isometric Cubes) */}
      <svg
        className="absolute top-[10%] left-[5%] w-[40vw] max-w-[500px] opacity-[0.03] dark:opacity-[0.05]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        style={{ transform: `translateY(${-scrollY * 0.04}px) rotate(5deg)` }}
      >
        <path d="M50 0 L100 25 L50 50 L0 25 Z" />
        <path d="M0 25 L0 75 L50 100 L50 50 Z" />
        <path d="M100 25 L100 75 L50 100 L50 50 Z" />
        <line x1="50" y1="50" x2="50" y2="100" />
      </svg>

      <svg
        className="absolute bottom-[20%] right-[5%] w-[35vw] max-w-[400px] opacity-[0.02] dark:opacity-[0.04]"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        style={{ transform: `translateY(${-scrollY * 0.06}px) rotate(-10deg)` }}
      >
        <circle cx="50" cy="50" r="40" strokeDasharray="2 4" />
        <circle cx="50" cy="50" r="20" />
        <line x1="10" y1="50" x2="90" y2="50" />
        <line x1="50" y1="10" x2="50" y2="90" />
      </svg>

      {/* Monochromatic soft ambient glows to create depth */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-foreground/[0.02] blur-[120px]"
        style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
      />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-foreground/[0.02] blur-[120px]"
        style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
      />
    </div>
  )
}
