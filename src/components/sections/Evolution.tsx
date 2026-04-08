import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { TypingHeading } from '@/components/ui/typing-heading'

export function Evolution() {
  const steps = [
    { num: '01', title: 'Presença', desc: 'Sua primeira página digital para validar a oferta.' },
    { num: '02', title: 'Escala', desc: 'Otimização focada em tráfego pago e testes A/B.' },
    { num: '03', title: 'Sistemas', desc: 'Ferramentas internas para gerenciar o crescimento.' },
    { num: '04', title: 'SaaS', desc: 'Evolução da sua solução para uma nova linha de receita.' },
  ]

  return (
    <section id="evolucao" className="py-24 bg-card/50 border-y border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-12">
          <TypingHeading
            as="h2"
            className="text-3xl md:text-5xl font-display font-bold mb-4"
            text="A escada da Evolução"
            delay={200}
          />
          <p className="text-muted-foreground text-lg max-w-2xl">
            Acompanhamos seu negócio desde o primeiro cliente até a criação de um ecossistema
            digital complexo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <BentoCard className="h-full bg-background border-border/80">
                <div className="text-primary font-display font-bold text-4xl mb-4 opacity-30">
                  {step.num}
                </div>
                <h4 className="text-xl font-display font-bold mb-2 text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
