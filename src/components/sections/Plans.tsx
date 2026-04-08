import { Reveal } from '@/components/ui/reveal'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Essencial',
    desc: 'Presença digital básica, mas com a sofisticação que a sua marca exige.',
    features: [
      'Até 5 seções estruturadas',
      'Design Totalmente Responsivo',
      'Botão WhatsApp Elegante',
    ],
    highlight: false,
  },
  {
    name: 'Conversão',
    desc: 'Alta performance e estrutura arquitetada rigorosamente para tráfego.',
    features: ['Copywriting Inclusa', 'Carregamento < 1 segundo', 'Tracking de Alta Precisão'],
    highlight: true,
    badge: 'Recomendado',
  },
  {
    name: 'Sistemas',
    desc: 'Infraestrutura sob medida para operações complexas.',
    features: ['Arquitetura Escalável', 'Painel Administrativo', 'Banco de Dados Próprio'],
    highlight: false,
  },
]

export function Plans() {
  return (
    <section id="planos" className="py-32 md:py-48 scroll-mt-20 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-24 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 mb-6 block">
            Investimento
          </span>
          <h2 className="text-5xl md:text-6xl font-display mb-8">Escopos Arquitetônicos</h2>
          <p className="text-muted-foreground font-light text-xl">
            Formatos estruturados para cada momento do seu negócio.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <Reveal key={i} delay={i * 150} className="h-full">
              <div
                className={cn(
                  'h-full flex flex-col p-12 md:p-14 rounded-[2.5rem] transition-all duration-700 ease-out',
                  'bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10',
                  p.highlight
                    ? 'shadow-[0_30px_80px_-20px_rgba(0,0,0,0.1)] scale-[1.02] border-foreground/20 bg-foreground/[0.02]'
                    : 'shadow-[0_8px_30px_rgb(0,0,0,0.03)]',
                )}
              >
                {p.badge && (
                  <span className="self-start mb-8 px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] uppercase tracking-[0.2em] font-medium">
                    {p.badge}
                  </span>
                )}

                <h3 className="text-4xl font-display mb-6 text-foreground">{p.name}</h3>
                <p className="text-muted-foreground font-light mb-12 pb-12 border-b border-foreground/10 text-lg">
                  {p.desc}
                </p>

                <ul className="space-y-6 mb-16 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                      <span className="text-foreground/80 font-light text-lg">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                  className={cn(
                    'w-full py-5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500',
                    p.highlight
                      ? 'bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:-translate-y-1'
                      : 'bg-transparent border border-foreground/20 text-foreground hover:bg-foreground/5 hover:-translate-y-1',
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
