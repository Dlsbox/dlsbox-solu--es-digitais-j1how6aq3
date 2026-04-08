import { Reveal } from '@/components/ui/reveal'
import { ScrollFadeCard } from '@/components/ui/scroll-fade-card'
import { Zap, ShieldCheck, Target, Users, Code2, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Código limpo. Carregamento ultrarrápido para melhor SEO.',
    span: 'md:col-span-2',
  },
  {
    icon: Target,
    title: 'Conversão',
    desc: 'Design focado 100% na ação final do usuário.',
    span: 'md:col-span-1',
    isHighlight: true,
  },
  {
    icon: Users,
    title: 'Suporte',
    desc: 'Parceria próxima, rápida e sem burocracias.',
    span: 'md:col-span-1',
  },
  {
    icon: Code2,
    title: 'Stack Moderna',
    desc: 'Mesmas tecnologias utilizadas por grandes corporações.',
    span: 'md:col-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Estabilidade',
    desc: 'Servidores robustos que não caem em picos de acesso.',
    span: 'md:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Dados',
    desc: 'Integração de tracking para visão completa.',
    span: 'md:col-span-1',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Por que a DLSBox?</h2>
          <p className="text-muted-foreground text-lg">Nossos compromissos com a sua estrutura.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 100} className={f.span}>
              <ScrollFadeCard
                className="h-full flex flex-col"
                defaultBgClass={f.isHighlight ? 'bg-primary/5' : 'bg-card'}
                defaultBorderClass={f.isHighlight ? 'border-primary/20' : 'border-border'}
              >
                <f.icon
                  className={cn(
                    'w-8 h-8 mb-6',
                    f.isHighlight ? 'text-primary' : 'text-muted-foreground',
                  )}
                />
                <h4
                  className={cn(
                    'text-xl font-display font-bold mb-2',
                    f.isHighlight && 'text-foreground',
                  )}
                >
                  {f.title}
                </h4>
                <p
                  className={cn(
                    'text-sm leading-relaxed',
                    f.isHighlight ? 'text-primary/80' : 'text-muted-foreground',
                  )}
                >
                  {f.desc}
                </p>
              </ScrollFadeCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
