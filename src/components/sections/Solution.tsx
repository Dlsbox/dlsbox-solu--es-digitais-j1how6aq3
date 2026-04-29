import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Zap, Code2, Smartphone, Layers } from 'lucide-react'

const solutions = [
  {
    icon: <Zap className="w-6 h-6 text-brand-blue" />,
    title: 'Performance Extrema',
    desc: 'Aplicações rápidas e estáveis com foco em velocidade, escalabilidade e excelente experiência do usuário.',
  },
  {
    icon: <Code2 className="w-6 h-6 text-brand-copper" />,
    title: 'Código Limpo e Escalável',
    desc: 'Arquitetura moderna, código organizado e preparado para crescer com o seu produto e seu negócio.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-blue" />,
    title: 'Mobile-First Native',
    desc: 'Interfaces pensadas para mobile, com experiência fluida, responsiva e natural em qualquer dispositivo.',
  },
  {
    icon: <Layers className="w-6 h-6 text-brand-copper" />,
    title: 'Design System Próprio',
    desc: 'Interfaces consistentes, bonitas e funcionais com identidade visual forte e componentes reutilizáveis.',
  },
]

export function Solution() {
  return (
    <section id="solucoes" className="py-24 bg-brand-bg relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-gray uppercase block mb-4">
              A Solução
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text mb-6">
              Por que empresas escolhem a DLSBox
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl">
              Unimos estratégia, design e tecnologia para transformar ideias em produtos digitais
              sólidos, bonitos e prontos para crescer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="up" className="h-full">
              <div className="group glass-card p-8 rounded-[1.5rem] hover:-translate-y-2 transition-all duration-500 h-full flex flex-col bg-white border border-gray-100 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">{item.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm flex-1">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
