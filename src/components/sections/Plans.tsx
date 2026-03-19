import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Essencial',
    desc: 'Site institucional ou portfólio para presença digital.',
    features: [
      'Até 5 seções',
      'Design Responsivo',
      'Otimização SEO Básica',
      'Botão WhatsApp',
      'Entrega em 7 dias',
    ],
    highlight: false,
  },
  {
    name: 'Conversão',
    desc: 'Landing Page de alta performance para tráfego pago.',
    features: [
      'Copywriter incluso',
      'Design Exclusivo',
      'Carregamento < 1s',
      'Integração Pixel/Tag',
      'Suporte 30 dias',
    ],
    highlight: true,
    badge: 'Mais pedido',
  },
  {
    name: 'E-commerce',
    desc: 'Loja virtual completa para vender seus produtos 24/7.',
    features: [
      'Até 50 produtos iniciais',
      'Gateway de Pagamento',
      'Cálculo de Frete',
      'Painel Administrativo',
      'Treinamento de uso',
    ],
    highlight: false,
  },
  {
    name: 'Sistema',
    desc: 'Plataforma sob medida para sua operação.',
    features: [
      'Arquitetura Escalável',
      'Banco de Dados',
      'Autenticação de Usuários',
      'Dashboards',
      'API Restful',
    ],
    highlight: false,
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Planos e Escopos</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Opções estruturadas para diferentes momentos do seu negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <div
                className={cn(
                  'relative flex flex-col h-full rounded-[var(--r2)] p-8 transition-transform duration-300 hover:-translate-y-2',
                  p.highlight
                    ? 'bg-card border-primary/50 shadow-[0_0_30px_rgba(198,241,53,0.1)]'
                    : 'bg-card/30 border-border hover:border-border/80',
                )}
              >
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {p.badge}
                  </div>
                )}

                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-8 min-h-[40px] leading-relaxed">
                  {p.desc}
                </p>

                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <Check
                        className={cn(
                          'w-5 h-5 shrink-0',
                          p.highlight ? 'text-primary' : 'text-muted-foreground',
                        )}
                      />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={p.highlight ? 'default' : 'outline'}
                  className={cn(
                    'w-full h-12 text-base font-medium',
                    p.highlight
                      ? 'shadow-[0_0_15px_rgba(198,241,53,0.2)] hover:shadow-[0_0_20px_rgba(198,241,53,0.4)] hover:scale-[1.02] transition-all'
                      : 'bg-transparent hover:bg-white/5',
                  )}
                >
                  Solicitar proposta
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
