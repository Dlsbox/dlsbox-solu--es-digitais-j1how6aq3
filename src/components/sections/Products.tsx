import { Reveal } from '@/components/ui/reveal'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlowCard } from '@/components/ui/glow-card'

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-card/20 border-y border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nossos Produtos</h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas internas desenvolvidas para maximizar resultados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <GlowCard className="group p-0 border-primary/20 bg-gradient-to-b from-primary/10 to-background aspect-square md:aspect-auto md:h-[400px]">
              <div className="relative flex flex-col justify-between h-full p-8 md:p-10 overflow-hidden rounded-[var(--r2)]">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none group-hover:scale-105 transition-transform duration-500 z-0">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full text-primary max-w-[80%]"
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path d="M20 150 Q 60 100, 100 120 T 180 50" strokeWidth="2" />
                    <circle cx="180" cy="50" r="4" fill="currentColor" />
                    <circle cx="100" cy="120" r="3" fill="currentColor" />
                    <path d="M20 180 L 180 180" strokeDasharray="4 4" />
                  </svg>
                </div>

                <div className="relative z-10 mt-auto flex flex-col items-start">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 mb-4">
                    Em breve
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-2">Tracker</h3>
                  <p className="text-primary/80 max-w-sm text-lg mb-8">
                    Visualização financeira e métricas avançadas para negócios digitais.
                  </p>
                  <Button asChild className="gap-2 z-20 group/btn">
                    <a href="https://tracker.dlsbox.com" target="_blank" rel="noopener noreferrer">
                      Acessar Tracker
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={200}>
            <GlowCard className="group p-0 border-brown-500/20 bg-gradient-to-b from-brown-900/40 to-background aspect-square md:aspect-auto md:h-[400px]">
              <div className="relative flex flex-col justify-between h-full p-8 md:p-10 overflow-hidden rounded-[var(--r2)]">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-brown-500/20 flex items-center justify-center text-brown-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none group-hover:scale-105 transition-transform duration-500 z-0">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full text-brown-500 max-w-[80%]"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="50" y="50" width="100" height="100" rx="16" />
                    <line x1="80" y1="50" x2="80" y2="150" strokeDasharray="4 4" />
                    <line x1="50" y1="100" x2="150" y2="100" strokeDasharray="4 4" />
                    <rect
                      x="100"
                      y="100"
                      width="30"
                      height="30"
                      rx="8"
                      fill="currentColor"
                      className="opacity-20"
                    />
                  </svg>
                </div>

                <div className="relative z-10 mt-auto flex flex-col items-start">
                  <div className="inline-block px-3 py-1 bg-brown-500/10 text-brown-500 text-xs font-semibold rounded-full border border-brown-500/20 mb-4">
                    Beta
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-2">Logos</h3>
                  <p className="text-brown-500/80 max-w-sm text-lg mb-8">
                    Estruturação de conteúdo e copy inteligente para suas páginas.
                  </p>
                  <Button
                    asChild
                    className="gap-2 z-20 group/btn bg-brown-500 hover:bg-brown-600 text-white"
                  >
                    <a href="https://logos.dlsbox.com" target="_blank" rel="noopener noreferrer">
                      Acessar Logos
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
