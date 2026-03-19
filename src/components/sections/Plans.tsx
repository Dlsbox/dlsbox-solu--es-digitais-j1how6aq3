import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Essencial',
    desc: 'Presença digital básica.',
    features: ['Até 5 seções', 'Design Responsivo', 'Botão WhatsApp Flutuante'],
    highlight: false,
  },
  {
    name: 'Conversão',
    desc: 'Alta performance para tráfego.',
    features: ['Copywriting Inclusa', 'Carregamento < 1s', 'Integração de Pixel/Tag'],
    highlight: true,
    badge: 'Mais pedido',
  },
  {
    name: 'Sistemas',
    desc: 'Plataforma sob medida.',
    features: ['Arquitetura Escalável', 'Painel Administrativo', 'Banco de Dados Próprio'],
    highlight: false,
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Escopos e Planos</h2>
          <p className="text-muted-foreground text-lg">
            Formatos estruturados ideais para cada momento do negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <BentoCard
                className={cn(
                  'h-full flex flex-col',
                  p.highlight && 'border-primary/50 bg-primary/5 shadow-sm',
                )}
              >
                {p.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {p.badge}
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-8">{p.desc}</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <div
                        className={cn(
                          'rounded-full p-1',
                          p.highlight
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground',
                        )}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-foreground/90 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={p.highlight ? 'default' : 'outline'} className="w-full">
                  Solicitar Proposta
                </Button>
              </BentoCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
