import { Reveal } from '@/components/ui/reveal'
import { Zap, ShieldCheck, Target, Users, Code2, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Performance Absoluta',
    desc: 'Código minimalista. Carregamento quase instantâneo para um SEO impecável.',
  },
  {
    icon: Target,
    title: 'Design Orientado',
    desc: 'Estética editorial aliada rigorosamente à conversão direta.',
  },
  {
    icon: Users,
    title: 'Parceria Premium',
    desc: 'Suporte próximo, ágil e totalmente sem burocracias.',
  },
  {
    icon: Code2,
    title: 'Stack Moderna',
    desc: 'Tecnologias de vanguarda exigidas pelo mercado de ponta.',
  },
  {
    icon: ShieldCheck,
    title: 'Estabilidade',
    desc: 'Infraestrutura blindada para suportar altos picos de acesso sem oscilações.',
  },
  {
    icon: BarChart3,
    title: 'Visão Analítica',
    desc: 'Rastreamento inteligente para decisões guiadas por dados concretos.',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-32 md:py-48 scroll-mt-20 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-24 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 mb-6 block">
            Compromisso
          </span>
          <h2 className="text-5xl md:text-6xl font-display mb-8">Padrão DLSBox</h2>
          <p className="text-muted-foreground font-light text-xl">
            Os pilares irrenunciáveis da nossa arquitetura digital.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 100} className="flex flex-col items-start text-left group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8 bg-foreground/5 text-foreground border border-foreground/10 transition-transform duration-500 group-hover:-translate-y-2">
                <f.icon className="w-6 h-6" strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-display mb-4 text-foreground">{f.title}</h4>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
