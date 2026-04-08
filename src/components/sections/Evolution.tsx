import { Reveal } from '@/components/ui/reveal'

export function Evolution() {
  const steps = [
    {
      num: 'I',
      title: 'Fundação',
      desc: 'Sua primeira página digital, projetada para validar ofertas com autoridade indiscutível.',
    },
    {
      num: 'II',
      title: 'Expansão',
      desc: 'Otimização elegante focada em tráfego, elevando a percepção de valor a cada clique.',
    },
    {
      num: 'III',
      title: 'Infraestrutura',
      desc: 'Ferramentas e painéis sob medida para sustentar o crescimento operacional e analítico.',
    },
    {
      num: 'IV',
      title: 'Ecossistema',
      desc: 'Evolução da solução para plataformas completas e novas linhas verticais de receita.',
    },
  ]

  return (
    <section
      id="evolucao"
      className="py-32 md:py-48 scroll-mt-20 relative z-10 border-y border-foreground/[0.04] bg-background/40 backdrop-blur-3xl"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
        <Reveal className="mb-24 text-center md:text-left">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 mb-6 block">
            A Jornada
          </span>
          <h2 className="text-5xl md:text-6xl font-display mb-8">A Escada da Evolução</h2>
          <p className="text-muted-foreground font-light text-xl max-w-2xl">
            Construímos o seu negócio do primeiro pilar à criação de um ecossistema digital complexo
            e integrado.
          </p>
        </Reveal>

        <div className="relative">
          <div className="hidden md:block absolute left-[31px] top-[40px] bottom-[40px] w-[1px] bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 150} className="relative md:pl-28 group">
                <div className="hidden md:flex absolute left-0 top-1 w-16 h-16 rounded-full bg-background border border-foreground/10 items-center justify-center font-display text-2xl z-10 shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <span className="opacity-80 font-light">{step.num}</span>
                </div>
                <div className="md:hidden text-foreground/40 font-display text-3xl mb-4 italic">
                  {step.num}
                </div>
                <h4 className="text-3xl font-display mb-4 text-foreground">{step.title}</h4>
                <p className="text-muted-foreground font-light leading-relaxed max-w-xl text-lg">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
