import { Reveal } from '@/components/ui/reveal'

export function Evolution() {
  const steps = [
    {
      num: '01',
      title: 'Fundação',
      desc: 'Sua primeira página digital, projetada para validar ofertas com autoridade indiscutível. O pilar inicial da sua narrativa.',
    },
    {
      num: '02',
      title: 'Expansão',
      desc: 'Otimização elegante focada em tráfego, elevando a percepção de valor a cada clique e estruturando novos canais.',
    },
    {
      num: '03',
      title: 'Infraestrutura',
      desc: 'Ferramentas e painéis sob medida para sustentar o crescimento operacional, logístico e analítico do seu negócio.',
    },
    {
      num: '04',
      title: 'Ecossistema',
      desc: 'Evolução da solução para plataformas completas e novas linhas verticais de receita, consolidando seu império digital.',
    },
  ]

  return (
    <section
      id="evolucao"
      className="py-32 md:py-48 scroll-mt-20 relative z-10 bg-muted/30 border-y border-border"
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <Reveal className="mb-32 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
            A Jornada
          </span>
          <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
            A Escada da Evolução
          </h2>
          <p className="text-muted-foreground font-light text-xl max-w-2xl mx-auto text-balance">
            Construímos o seu negócio do primeiro pilar à criação de um ecossistema digital complexo
            e integrado.
          </p>
        </Reveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting central line for desktop */}
          <div className="hidden md:block absolute left-[3.5rem] top-[4rem] bottom-[4rem] w-[1px] bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <Reveal
                key={i}
                delay={i * 200}
                className="relative group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                <div className="md:w-32 flex shrink-0 justify-start md:justify-center relative z-10 bg-muted/30 md:bg-transparent py-4 md:py-0">
                  <span className="text-6xl md:text-8xl font-display text-foreground/10 italic transition-colors duration-1000 group-hover:text-brown-600/20 dark:group-hover:text-brown-400/20 leading-none">
                    {step.num}
                  </span>
                </div>
                <div className="pt-2 md:pt-6 flex-1">
                  <h4 className="text-3xl md:text-4xl font-display mb-6 text-foreground tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-xl text-lg md:text-xl">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
