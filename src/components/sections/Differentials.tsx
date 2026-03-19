import { Reveal } from '@/components/ui/reveal'
import { Zap, ShieldCheck, Rocket, Users, Settings2, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Alta Performance',
    desc: 'Código limpo e otimizado para carregamento em milissegundos. Fundamental para SEO e conversão.',
  },
  {
    icon: Rocket,
    title: 'Foco em Conversão',
    desc: 'Design estratégico pensado para guiar o usuário até a ação final, sem distrações.',
  },
  {
    icon: Users,
    title: 'Suporte Próximo',
    desc: 'Atendimento humanizado e rápido. Não somos apenas fornecedores, somos parceiros de negócio.',
  },
  {
    icon: Settings2,
    title: 'Estrutura Moderna',
    desc: 'Utilizamos as tecnologias mais atuais do mercado (React, Node, etc), as mesmas usadas por gigantes.',
  },
  {
    icon: ShieldCheck,
    title: 'Estabilidade',
    desc: 'Servidores robustos e código testado para garantir que seu site não caia durante um lançamento.',
  },
  {
    icon: BarChart3,
    title: 'Orientado a Dados',
    desc: 'Integração total com ferramentas de tracking para você entender exatamente de onde vêm os resultados.',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Por que escolher a DLSBox?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-8 rounded-[var(--r)] bg-secondary/30 border border-border hover:border-primary/50 transition-colors group h-full cursor-default">
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 text-muted-foreground group-hover:text-primary group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(198,241,53,0.3)] transition-all border border-border">
                  <f.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-display font-semibold mb-3 text-foreground">
                  {f.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
