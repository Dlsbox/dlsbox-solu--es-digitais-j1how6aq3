import { Reveal } from '@/components/ui/reveal'
import { ArrowUpRight, TrendingDown, TrendingUp, Wallet } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

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

              <div className="flex-1 w-full relative order-1 lg:order-2">
                {/* DLSBox "Digital Relief" Aesthetic Background Layers */}
                <div className="absolute inset-0 bg-muted/40 border border-border rounded-xl transform translate-x-3 translate-y-3 -z-20 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5" />
                <div className="absolute inset-0 bg-background/50 border border-border rounded-xl transform translate-x-1.5 translate-y-1.5 -z-10 transition-transform duration-700 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />

                <Card className="w-full h-full min-h-[440px] sm:min-h-[500px] bg-card rounded-xl border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group-hover:border-brown-600/30 transition-all duration-1000 flex flex-col">
                  {/* Window Controls */}
                  <div className="h-12 border-b border-border flex items-center gap-2 px-6 bg-muted/30 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center bg-gradient-to-br from-card to-muted/10 relative">
                    <div className="flex items-center gap-4 mb-8 sm:mb-10">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary ring-1 ring-primary/20">
                        <Wallet className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-2xl text-foreground tracking-tight">
                          Financial Status
                        </h4>
                        <p className="text-sm text-muted-foreground font-sans mt-1">
                          Real-time budget overview
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8 sm:space-y-10">
                      {/* Balance Area */}
                      <div>
                        <span className="text-xs uppercase tracking-[0.2em] font-medium text-brown-600/80 dark:text-brown-400/80 block mb-3">
                          Total Balance
                        </span>
                        <div className="text-4xl sm:text-6xl font-sans font-light tracking-tighter text-foreground">
                          R$ 18.000,00
                        </div>
                      </div>

                      {/* Summarized Stats */}
                      <div className="flex items-center gap-4 sm:gap-8 py-5 sm:py-6 border-y border-border/60">
                        <div className="flex-1 flex items-center gap-3 sm:gap-4">
                          <div className="p-2 sm:p-2.5 bg-emerald-500/10 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                              Incomes
                            </span>
                            <span className="block text-xs sm:text-sm font-medium text-foreground">
                              + R$ 24.500,00
                            </span>
                          </div>
                        </div>
                        <div className="w-px h-10 bg-border/60" />
                        <div className="flex-1 flex items-center gap-3 sm:gap-4">
                          <div className="p-2 sm:p-2.5 bg-brown-600/10 rounded-full text-brown-600 dark:text-brown-400 shrink-0">
                            <TrendingDown className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                              Expenses
                            </span>
                            <span className="block text-xs sm:text-sm font-medium text-foreground">
                              - R$ 6.500,00
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Trackers */}
                      <div className="space-y-5 sm:space-y-6">
                        <div className="space-y-3">
                          <div className="flex justify-between text-xs sm:text-sm font-sans">
                            <span className="font-medium text-foreground">Essential</span>
                            <span className="text-muted-foreground font-medium">65%</span>
                          </div>
                          <Progress
                            value={65}
                            className="h-1.5 sm:h-2 bg-secondary [&>div]:bg-primary"
                          />
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between text-xs sm:text-sm font-sans">
                            <span className="font-medium text-foreground">Non-Essential</span>
                            <span className="text-muted-foreground font-medium">30%</span>
                          </div>
                          <Progress
                            value={30}
                            className="h-1.5 sm:h-2 bg-secondary [&>div]:bg-brown-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
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
