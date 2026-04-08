import { Reveal } from '@/components/ui/reveal'
import { ScrollFadeCard } from '@/components/ui/scroll-fade-card'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { cn } from '@/lib/utils'
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal'
import { TypingHeading } from '@/components/ui/typing-heading'

const plans = [
  {
    name: 'Essencial',
    desc: 'Presença digital básica.',
    command: 'dlsbox setup --plan essencial',
    features: ['Até 5 seções', 'Design Responsivo', 'Botão WhatsApp Flutuante'],
    successMsg: 'Sucesso! Plano Essencial configurado.',
    highlight: false,
  },
  {
    name: 'Conversão',
    desc: 'Alta performance para tráfego.',
    command: 'dlsbox setup --plan conversao',
    features: ['Copywriting Inclusa', 'Carregamento < 1s', 'Integração de Pixel/Tag'],
    successMsg: 'Success! High performance plan ready.',
    highlight: true,
    badge: 'Mais pedido',
  },
  {
    name: 'Sistemas',
    desc: 'Plataforma sob medida.',
    command: 'dlsbox setup --plan sistemas',
    features: ['Arquitetura Escalável', 'Painel Administrativo', 'Banco de Dados Próprio'],
    successMsg: 'Success! Custom system platform ready.',
    highlight: false,
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-12 text-center md:text-left">
          <TypingHeading
            as="h2"
            className="text-3xl md:text-5xl font-display font-bold mb-4"
            text="Escopos e Planos"
            delay={200}
          />
          <p className="text-muted-foreground text-lg">
            Formatos estruturados ideais para cada momento do negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <ScrollFadeCard
                className="h-full flex flex-col"
                defaultBgClass={p.highlight ? 'bg-primary/5' : 'bg-card'}
                defaultBorderClass={p.highlight ? 'border-primary/50' : 'border-border'}
                hasShadow={p.highlight}
              >
                {p.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-8">{p.desc}</p>

                <div className="flex-1 mb-10 relative overflow-hidden min-h-[200px]">
                  <Terminal className="absolute inset-0 h-full w-full">
                    <TypingAnimation delay={0}>&gt; {p.command}</TypingAnimation>
                    {p.features.map((f, j) => (
                      <AnimatedSpan key={j} delay={1500 + j * 300} className="text-green-500">
                        ✔ {f}
                      </AnimatedSpan>
                    ))}
                    <TypingAnimation
                      delay={1500 + p.features.length * 300 + 100}
                      className="text-muted-foreground mt-2"
                    >
                      {p.successMsg}
                    </TypingAnimation>
                  </Terminal>
                </div>

                <MovingBorderButton
                  containerClassName="w-full mt-auto h-11 hover:scale-[1.02] transition-transform shadow-sm"
                  className="w-full text-white font-medium bg-blue-600 flex items-center justify-center"
                  borderRadius="1.75rem"
                  onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                >
                  Solicitar Proposta
                </MovingBorderButton>
              </ScrollFadeCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
