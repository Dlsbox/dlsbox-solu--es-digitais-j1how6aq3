import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Landing Page',
    price: 'A partir de R$ 3k',
    desc: 'Ideal para validar sua ideia com uma presença online de alto impacto.',
    features: [
      'Design moderno e responsivo',
      'Seção de benefícios',
      'Formulário integrado',
      'SEO Técnico inicial',
      'Entrega rápida',
    ],
    button: 'Solicitar proposta',
    popular: false,
  },
  {
    name: 'App MVP',
    price: 'A partir de R$ 15k',
    desc: 'Perfeito para lançar seu MVP e validar no mercado com segurança.',
    features: [
      'Funcionalidades principais',
      'Design de alta conversão',
      'Integrações essenciais',
      'Painel administrativo',
      'Suporte dedicado',
    ],
    button: 'Quero meu MVP',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    desc: 'Soluções robustas e personalizadas para escalar seu negócio.',
    features: [
      'Arquitetura personalizada',
      'Módulos sob demanda',
      'Infraestrutura escalável',
      'Segurança avançada',
      'Suporte e SLA',
    ],
    button: 'Falar com especialista',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-24 bg-white relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-6">
              Planos & Investimento
            </h2>
            <p className="text-lg text-brand-gray">
              Transparência desde o primeiro contato. Escolha o plano ideal para o momento do seu
              projeto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <ScrollReveal
              key={i}
              delay={i * 150}
              direction="up"
              className={cn('h-full', plan.popular ? 'md:-mt-8 md:mb-8' : '')}
            >
              <div
                className={cn(
                  'glass-card rounded-[2.5rem] p-8 md:p-10 relative flex flex-col h-full transition-transform hover:-translate-y-2 duration-300',
                  plan.popular
                    ? 'border-brand-blue bg-white shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] ring-1 ring-brand-blue'
                    : 'bg-white border-gray-100',
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[11px] font-bold uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-md">
                    Mais Escolhido
                  </div>
                )}

                <h3 className="text-2xl font-bold text-brand-text mb-2">{plan.name}</h3>
                <p className="text-sm text-brand-gray mb-6 min-h-[40px]">{plan.desc}</p>

                <div className="text-3xl md:text-4xl font-extrabold text-brand-text mb-8 pb-8 border-b border-gray-100">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <div
                        className={cn(
                          'p-1 rounded-full shrink-0',
                          plan.popular
                            ? 'bg-brand-blue/10 text-brand-blue'
                            : 'bg-gray-100 text-brand-gray',
                        )}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-brand-text font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  className={cn(
                    'w-full rounded-full h-14 text-base font-semibold',
                    plan.popular
                      ? 'bg-brand-blue hover:bg-brand-deepBlue text-white shadow-lg shadow-brand-blue/20'
                      : 'border-brand-copper/30 text-brand-text hover:bg-brand-copper/5',
                  )}
                  asChild
                >
                  <a href="#contato">{plan.button}</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
