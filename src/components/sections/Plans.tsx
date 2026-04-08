import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Essencial',
    desc: 'Presença digital básica, mas com a sofisticação e o peso que a sua marca exige.',
    features: [
      'Até 5 seções estruturadas',
      'Design Totalmente Responsivo',
      'Botão WhatsApp Elegante',
    ],
    highlight: false,
  },
  {
    name: 'Conversão',
    desc: 'Alta performance e estrutura arquitetada rigorosamente para captação e vendas.',
    features: ['Copywriting Inclusa', 'Carregamento < 1 segundo', 'Tracking de Alta Precisão'],
    highlight: true,
    badge: 'Recomendado',
  },
  {
    name: 'Sistemas',
    desc: 'Infraestrutura sob medida para operações complexas e em escala.',
    features: ['Arquitetura Escalável', 'Painel Administrativo', 'Banco de Dados Próprio'],
    highlight: false,
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-32 md:py-48 scroll-mt-20 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-32 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
            Investimento
          </span>
          <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
            Escopos Arquitetônicos
          </h2>
          <p className="text-muted-foreground font-light text-xl">
            Formatos estruturados para cada momento de maturidade do seu negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-border divide-y lg:divide-y-0 lg:divide-x divide-border">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 200} className="h-full">
              <div
                className={cn(
                  'h-full flex flex-col p-12 md:p-16 transition-colors duration-1000 ease-out relative group hover:bg-muted/10',
                  p.highlight ? 'bg-muted/30 dark:bg-muted/10' : 'bg-transparent',
                )}
              >
                {p.highlight && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-brown-600 dark:bg-brown-400" />
                )}

                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-4xl font-display text-foreground">{p.name}</h3>
                  {p.badge && (
                    <span className="px-3 py-1 bg-brown-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-brown-700 dark:text-brown-400 border border-brown-600/20">
                      {p.badge}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground font-light mb-12 text-lg h-20">{p.desc}</p>

                <ul className="space-y-6 mb-16 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-4">
                      <div className="w-8 h-[1px] bg-foreground/20 shrink-0 group-hover:w-12 transition-all duration-700" />
                      <span className="text-foreground/80 font-light text-lg">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                  className={cn(
                    'w-full py-5 rounded-none text-[10px] uppercase tracking-[0.25em] font-medium transition-all duration-700',
                    p.highlight
                      ? 'bg-foreground text-background hover:bg-brown-800 dark:hover:bg-brown-200'
                      : 'bg-transparent border border-foreground/20 text-foreground hover:border-foreground/50 hover:bg-foreground/5',
                  )}
                >
                  Solicitar Proposta
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
