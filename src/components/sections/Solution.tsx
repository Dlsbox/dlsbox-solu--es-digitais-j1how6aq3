import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Code2, Zap, Smartphone, Layers } from 'lucide-react'

const solutions = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: 'Performance Extrema',
    desc: 'Arquitetura moderna otimizada para carregar em milissegundos, com SEO técnico impecável.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    title: 'Código Limpo e Escalável',
    desc: 'Desenvolvimento modular utilizando as melhores práticas para que seu produto cresça sem refações.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    title: 'Mobile-First Nativo',
    desc: 'Experiência fluida e responsiva garantida em qualquer tela ou dispositivo.',
  },
  {
    icon: <Layers className="w-8 h-8 text-green-500" />,
    title: 'Design System Próprio',
    desc: 'Consistência visual do início ao fim com componentes reutilizáveis e elegantes.',
  },
]

export function Solution() {
  return (
    <section id="solucao" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
              A Solução <span className="text-blue-500">DLSBox</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Nossa abordagem une engenharia de software avançada com design premium para criar
              produtos que dominam o mercado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150} direction="up">
              <div className="group p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition-colors duration-500 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-background/50 border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed flex-1">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
