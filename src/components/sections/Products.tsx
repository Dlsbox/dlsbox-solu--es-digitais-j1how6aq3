import { Reveal } from '@/components/ui/reveal'
import { ArrowUpRight } from 'lucide-react'

export function Products() {
  return (
    <section
      id="produtos"
      className="py-32 md:py-48 scroll-mt-20 relative z-10 bg-muted/20 border-y border-border"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-32 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
            Laboratório
          </span>
          <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
            Produtos Internos
          </h2>
          <p className="text-muted-foreground font-light text-xl max-w-2xl mx-auto text-balance">
            Ferramentas exclusivas desenvolvidas internamente para maximizar a precisão e a escala
            dos seus resultados.
          </p>
        </Reveal>

        <div className="space-y-32">
          {/* Tracker Product */}
          <Reveal delay={200}>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group">
              <div className="flex-1 space-y-10 order-2 lg:order-1">
                <div className="flex items-center gap-6">
                  <h3 className="text-4xl md:text-5xl font-display text-foreground tracking-tight">
                    Tracker
                  </h3>
                  <span className="px-3 py-1 bg-brown-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-brown-700 dark:text-brown-400 border border-brown-600/20">
                    Em breve
                  </span>
                </div>
                <p className="text-muted-foreground font-light text-xl leading-relaxed">
                  Dashboard financeiro e métricas avançadas desenhadas com rigor analítico. Uma
                  interface minimalista para negócios que exigem alta precisão, controle absoluto e
                  decisões guiadas por dados puros.
                </p>
                <button
                  onClick={() => window.open('https://tracker.dlsbox.com', '_blank')}
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-brown-600 dark:group-hover:text-brown-400 transition-colors duration-700"
                >
                  <span className="border-b border-foreground/20 group-hover:border-brown-600/50 pb-1">
                    Acessar Plataforma
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              <div className="flex-1 w-full aspect-[4/3] bg-card rounded-none border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group-hover:border-foreground/20 transition-all duration-1000 order-1 lg:order-2">
                {/* Abstract UI representation */}
                <div className="absolute top-0 left-0 right-0 h-12 border-b border-border flex items-center gap-2 px-6 bg-muted/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                </div>
                <div className="absolute top-20 left-6 right-6 bottom-6 flex gap-6">
                  <div className="w-1/3 h-full bg-muted/20 border border-border/50 hidden sm:block" />
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="h-32 bg-muted/20 border border-border/50 w-full" />
                    <div className="flex-1 bg-muted/20 border border-border/50 w-full flex items-end p-6 gap-4">
                      <div className="w-8 bg-foreground/5 h-1/3 transition-all duration-1000 group-hover:h-2/3 group-hover:bg-brown-600/20" />
                      <div className="w-8 bg-foreground/5 h-1/2 transition-all duration-1000 group-hover:h-3/4 group-hover:bg-brown-600/30" />
                      <div className="w-8 bg-foreground/5 h-2/3 transition-all duration-1000 group-hover:h-full group-hover:bg-brown-600/40" />
                      <div className="w-8 bg-foreground/5 h-1/4 transition-all duration-1000 group-hover:h-1/2 group-hover:bg-brown-600/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Logos Product */}
          <Reveal delay={400}>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group">
              <div className="flex-1 w-full aspect-[4/3] bg-card rounded-none border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group-hover:border-foreground/20 transition-all duration-1000">
                {/* Abstract UI representation */}
                <div className="absolute top-0 left-0 right-0 h-12 border-b border-border flex items-center gap-2 px-6 bg-muted/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                </div>
                <div className="absolute top-24 left-12 right-12 bottom-12 border border-border/50 bg-muted/10 p-8 flex flex-col gap-6">
                  <div className="h-4 bg-foreground/10 w-3/4 transition-all duration-1000 group-hover:w-full" />
                  <div className="h-4 bg-foreground/5 w-full" />
                  <div className="h-4 bg-foreground/5 w-5/6" />
                  <div className="h-4 bg-foreground/5 w-4/6" />
                  <div className="mt-auto flex justify-end">
                    <div className="h-10 w-32 bg-foreground/5 transition-colors duration-1000 group-hover:bg-brown-600/10" />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-10">
                <div className="flex items-center gap-6">
                  <h3 className="text-4xl md:text-5xl font-display text-foreground tracking-tight">
                    Logos
                  </h3>
                  <span className="px-3 py-1 bg-brown-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-brown-700 dark:text-brown-400 border border-brown-600/20">
                    Beta
                  </span>
                </div>
                <p className="text-muted-foreground font-light text-xl leading-relaxed">
                  Inteligência estrutural para concepção de copy e narrativas, esculpindo textos que
                  convertem através de frameworks comprovados e modelagem de linguagem de alta
                  persuasão.
                </p>
                <button
                  onClick={() => window.open('https://logos.dlsbox.com', '_blank')}
                  className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-brown-600 dark:group-hover:text-brown-400 transition-colors duration-700"
                >
                  <span className="border-b border-foreground/20 group-hover:border-brown-600/50 pb-1">
                    Acessar Plataforma
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
