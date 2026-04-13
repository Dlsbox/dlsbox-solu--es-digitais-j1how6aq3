import { useState, useEffect, useRef } from 'react'
import { Target, Settings, Shield, ShoppingCart, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const hotspots = [
  {
    id: 'conversao',
    title: 'Conversão',
    shortDesc: 'Landing Pages',
    fullDesc:
      'Páginas de alta performance desenhadas para conversão máxima em campanhas de tráfego pago.',
    icon: Target,
    position: 'top-[12%] left-[8%] md:top-[20%] md:left-[15%]',
    align: 'left',
    delay: 100,
  },
  {
    id: 'sistemas',
    title: 'Sistemas',
    shortDesc: 'SaaS & Dashboards',
    fullDesc:
      'Infraestrutura robusta e escalável para automatizar, gerenciar e otimizar as operações da sua empresa.',
    icon: Settings,
    position: 'top-[18%] right-[8%] md:top-[25%] md:right-[15%]',
    align: 'right',
    delay: 300,
  },
  {
    id: 'autoridade',
    title: 'Autoridade',
    shortDesc: 'Sites Institucionais',
    fullDesc:
      'Presença digital atemporal e sofisticada que transmite confiança, valor e excelência aos seus clientes.',
    icon: Shield,
    position: 'bottom-[25%] left-[10%] md:bottom-[30%] md:left-[20%]',
    align: 'left',
    delay: 500,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    shortDesc: 'Lojas Virtuais',
    fullDesc:
      'Plataformas de vendas inteligentes com foco em experiência do usuário e jornadas de compra sem fricção.',
    icon: ShoppingCart,
    position: 'bottom-[15%] right-[8%] md:bottom-[20%] md:right-[18%]',
    align: 'right',
    delay: 700,
  },
]

export function Hero() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      setScrolled(scrollY > 100)

      // Subtle parallax effect on the hero content
      if (scrollY < window.innerHeight) {
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
        heroRef.current.style.opacity = `${1 - scrollY / (window.innerHeight * 0.7)}`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Immersive Space for Hotspots */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="relative w-full h-full max-w-7xl mx-auto">
          {hotspots.map((spot, index) => {
            const isActive = activeHotspot === spot.id
            const Icon = spot.icon

            return (
              <div
                key={spot.id}
                className={cn(
                  'absolute transition-all duration-1000 ease-out pointer-events-auto',
                  spot.position,
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
                )}
                style={{ transitionDelay: `${mounted ? spot.delay : 0}ms` }}
              >
                <div
                  className="relative animate-float-slow"
                  style={{ animationDelay: `${index * 0.7}s` }}
                >
                  {/* Hotspot Trigger */}
                  <button
                    onClick={() => setActiveHotspot(isActive ? null : spot.id)}
                    className={cn(
                      'relative group flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-500 z-30',
                      isActive
                        ? 'bg-brown-500 shadow-[0_0_30px_rgba(184,92,24,0.6)] scale-110'
                        : 'bg-[#0c2d4a]/60 backdrop-blur-md border border-brown-500/40 hover:bg-[#1d75cb]/40 hover:border-brown-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(184,92,24,0.4)]',
                    )}
                  >
                    {/* Pulsing ring */}
                    <div
                      className={cn(
                        'absolute inset-0 rounded-full transition-all duration-700',
                        isActive
                          ? 'animate-ping bg-brown-400/40'
                          : 'group-hover:animate-ping bg-white/20',
                      )}
                    />

                    <Icon
                      className={cn(
                        'w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 relative z-10',
                        isActive ? 'text-white' : 'text-brown-200 group-hover:text-white',
                      )}
                    />
                  </button>

                  {/* Glassmorphism Card */}
                  <div
                    className={cn(
                      'absolute top-full mt-4 w-[280px] sm:w-[320px] rounded-2xl transition-all duration-500 glass-card z-40 overflow-hidden',
                      spot.align === 'left'
                        ? 'left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 origin-top md:origin-top-left'
                        : 'left-1/2 -translate-x-1/2 md:right-0 md:left-auto md:translate-x-0 origin-top md:origin-top-right',
                      isActive
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 -translate-y-4 pointer-events-none',
                    )}
                  >
                    {/* Glowing top border accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brown-400 to-transparent opacity-80" />

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brown-500/15 border border-brown-500/30 text-brown-300 shadow-[inset_0_0_15px_rgba(184,92,24,0.15)]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-display font-semibold text-white tracking-wide">
                            {spot.title}
                          </h3>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveHotspot(null)
                          }}
                          className="p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-xs font-semibold text-brown-400 mb-3 uppercase tracking-[0.2em]">
                        {spot.shortDesc}
                      </p>
                      <p className="text-sm text-blue-50/80 leading-relaxed font-light mb-6">
                        {spot.fullDesc}
                      </p>

                      <button className="group/btn flex items-center gap-3 text-xs font-medium text-white uppercase tracking-widest transition-colors hover:text-brown-300">
                        <span>Descobrir solução</span>
                        <span className="w-8 h-[1px] bg-brown-500/60 transition-all duration-300 group-hover/btn:w-12 group-hover/btn:bg-brown-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Hero Copy */}
      <div
        ref={heroRef}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        <div
          className={cn(
            'transition-all duration-1000 ease-out transform',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
          )}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brown-500/30 bg-[#0c2d4a]/40 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(184,92,24,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brown-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-brown-200">
              Arquitetura Digital Premium
            </span>
          </div>

          <h1 className="font-display max-w-3xl leading-[1.1] mb-6 text-white text-[clamp(42px,8vw,96px)] tracking-tight text-balance">
            Estratégias Digitais <br />
            <span className="italic font-light text-brown-400">de Alta Performance.</span>
          </h1>

          <p className="text-base md:text-lg text-blue-100/70 max-w-xl mx-auto font-light leading-relaxed text-balance">
            Navegue por nossa arquitetura digital. Clique nos pontos de destaque ao redor para
            explorar nossas soluções focadas no crescimento do seu negócio.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-opacity duration-1000 pointer-events-none',
          mounted && !scrolled ? 'opacity-100' : 'opacity-0',
        )}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium">
          Descubra
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brown-400 to-transparent" />
      </div>
    </section>
  )
}
