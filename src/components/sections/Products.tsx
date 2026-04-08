import { Reveal } from '@/components/ui/reveal'
import { ArrowUpRight } from 'lucide-react'

export function Products() {
  return (
    <section
      id="produtos"
      className="py-32 md:py-48 scroll-mt-20 relative z-10 bg-white/30 dark:bg-black/20 backdrop-blur-2xl border-y border-foreground/[0.04]"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-24 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 mb-6 block">
            Laboratório
          </span>
          <h2 className="text-5xl md:text-6xl font-display mb-8">Produtos Internos</h2>
          <p className="text-muted-foreground font-light text-xl max-w-2xl mx-auto">
            Ferramentas exclusivas desenvolvidas para maximizar a precisão dos seus resultados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal delay={100} className="h-full">
            <div className="group h-full flex flex-col bg-background/60 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-foreground/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3">
              <div className="flex justify-between items-start mb-20">
                <h3 className="text-4xl font-display text-foreground">Tracker</h3>
                <span className="px-4 py-1.5 rounded-full bg-foreground/5 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/60 border border-foreground/10">
                  Em breve
                </span>
              </div>
              <p className="text-muted-foreground font-light mb-16 text-xl leading-relaxed flex-1">
                Dashboard financeiro e métricas avançadas desenhadas com rigor analítico para
                negócios que exigem alta precisão e controle.
              </p>
              <button
                onClick={() => window.open('https://tracker.dlsbox.com', '_blank')}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-primary transition-colors"
              >
                Acessar Plataforma{' '}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <div className="group h-full flex flex-col bg-background/60 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-foreground/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3">
              <div className="flex justify-between items-start mb-20">
                <h3 className="text-4xl font-display text-foreground">Logos</h3>
                <span className="px-4 py-1.5 rounded-full bg-foreground/5 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/60 border border-foreground/10">
                  Beta
                </span>
              </div>
              <p className="text-muted-foreground font-light mb-16 text-xl leading-relaxed flex-1">
                Inteligência estrutural para concepção de copy e narrativas, esculpindo textos que
                convertem através de frameworks comprovados.
              </p>
              <button
                onClick={() => window.open('https://logos.dlsbox.com', '_blank')}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-primary transition-colors"
              >
                Acessar Plataforma{' '}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
