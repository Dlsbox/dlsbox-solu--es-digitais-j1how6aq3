import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Landing Page',
    price: 'A partir de R$ 3k',
    desc: 'Ideal para validar ideias e capturar leads com alta conversão.',
    features: [
      'Design exclusivo',
      'Copywriting otimizado',
      'Integração com CRM/Mail',
      'SEO Técnico',
      'Entrega em 7 dias',
    ],
    popular: false,
  },
  {
    name: 'App MVP',
    price: 'A partir de R$ 15k',
    desc: 'O essencial para colocar sua plataforma no mercado.',
    features: [
      'Design System',
      'Frontend React/Mobile',
      'Backend escalável',
      'Banco de dados',
      'Autenticação de usuários',
      'Deploy automatizado',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob Consulta',
    desc: 'Sistemas complexos e escopo aberto para grandes operações.',
    features: [
      'Arquitetura robusta',
      'Sistemas legados',
      'Microsserviços',
      'SLA de Suporte',
      'Time dedicado',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4">
              Planos & <span className="font-light text-muted-foreground">Investimento</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Transparência desde o primeiro contato. Escolha o formato ideal para o seu momento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 200} direction="up">
              <div
                className={cn(
                  'rounded-[2.5rem] p-8 md:p-10 border transition-all duration-500 relative flex flex-col h-full',
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-900/40 to-background border-blue-500/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] md:-translate-y-4'
                    : 'bg-white/5 border-white/10 backdrop-blur-xl',
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                    Recomendado
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{plan.desc}</p>

                <div className="text-3xl font-bold mb-8 pb-8 border-b border-white/10">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <div className="p-1 bg-white/10 rounded-full shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  className={cn(
                    'w-full rounded-full h-12 text-base',
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border-white/20 bg-transparent hover:bg-white/10',
                  )}
                  asChild
                >
                  <a href="#contato">Solicitar Proposta</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
