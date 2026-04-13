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
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#040A12] transition-colors duration-500">
      {/* Deep Blue Premium Gradient Base */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#0c3258_0%,#040a12_80%)] opacity-90"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      />

      {/* Subtle architectural grid - gold tinted */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(183,127,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(183,127,77,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
      />

      {/* Gold / Brown Ambient Glows */}
      <div
        className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-[#b77f4d] opacity-[0.06] blur-[100px] animate-ambient-glow"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-[20%] left-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-[#1d75cb] opacity-[0.06] blur-[120px]"
        style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
