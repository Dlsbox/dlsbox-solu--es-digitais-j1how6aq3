import { ScrollReveal } from '@/components/ui/scroll-reveal'
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
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl mb-6">
              Planos & Investimento
            </h2>
            <p className="text-sm leading-7 text-blue-600 sm:text-base">
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
                    ? 'border-blue-600 bg-white shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] ring-1 ring-blue-600'
                    : 'bg-white border-gray-100',
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-[0.2em] py-2 px-6 rounded-full shadow-md">
                    Mais Escolhido
                  </div>
                )}

                <h3 className="font-display text-2xl font-bold text-slate-950 mb-2">{plan.name}</h3>
                <p className="text-sm text-blue-600 mb-6 min-h-[40px]">{plan.desc}</p>

                <div className="font-display text-3xl md:text-4xl font-extrabold text-slate-950 mb-8 pb-8 border-b border-gray-100">
                  {plan.price}
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <div
                        className={cn(
                          'p-1 rounded-full shrink-0',
                          plan.popular
                            ? 'bg-blue-600/10 text-blue-600'
                            : 'bg-gray-100 text-slate-500',
                        )}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contato"
                  className={cn(
                    'w-full inline-flex justify-center items-center h-11 px-6 text-sm font-semibold rounded-full transition-colors',
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                      : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50',
                  )}
                >
                  {plan.button}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
