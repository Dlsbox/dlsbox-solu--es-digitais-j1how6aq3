import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Sparkles, Move, MonitorPlay, Code } from 'lucide-react'

export function TechStack() {
  const techs = [
    {
      icon: <Move className="w-5 h-5" />,
      title: 'Lenis & GSAP',
      desc: 'Rolagem suave e animações profissionais que guiam o olhar e contam uma história.',
    },
    {
      icon: <MonitorPlay className="w-5 h-5" />,
      title: 'SwiperJS',
      desc: 'Carrosséis fluidos para exploração de telas e componentes interativos premium.',
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: 'Microanimações',
      desc: 'Interações ricas e leves que fornecem feedback visual e aumentam o engajamento.',
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'CSS Avançado',
      desc: 'Glassmorphism sutil, gradientes elegantes e profundidade visual bem estruturada.',
    },
  ]

  return (
    <section className="py-24 bg-brand-bg relative border-y border-gray-100">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text mb-6">
                Tecnologia visual que aumenta percepção de valor
              </h2>
              <p className="text-lg text-brand-gray leading-relaxed mb-8">
                Animações boas não são enfeite. Elas guiam o olhar, aumentam a clareza, reforçam a
                confiança na sua marca e ajudam o usuário a entender melhor o valor do seu produto.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TailwindCSS', 'Lenis', 'GSAP', 'SwiperJS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white rounded-full text-xs font-bold tracking-wide text-brand-text border border-gray-200 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techs.map((tech, i) => (
                <ScrollReveal key={i} delay={i * 100} direction="up" className="h-full">
                  <div className="glass-card bg-white p-6 md:p-8 rounded-[1.5rem] h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 text-brand-blue flex items-center justify-center mb-6">
                      {tech.icon}
                    </div>
                    <h4 className="font-bold text-brand-text text-lg mb-3">{tech.title}</h4>
                    <p className="text-sm text-brand-gray leading-relaxed">{tech.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
