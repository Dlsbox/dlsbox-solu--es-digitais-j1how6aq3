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
    <section className="py-24 bg-white relative border-y border-gray-100">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="flex-1 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 block mb-4">
                Stack
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl mb-5">
                Tecnologia visual que aumenta percepção de valor
              </h2>
              <p className="text-sm leading-7 text-blue-600 sm:text-base mb-8 max-w-lg">
                Animações boas não são enfeite. Elas guiam o olhar, aumentam a clareza, reforçam a
                confiança na sua marca e ajudam o usuário a entender melhor o valor do seu produto.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TailwindCSS', 'Lenis', 'GSAP', 'SwiperJS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-white rounded-full text-xs font-semibold tracking-wide text-slate-900 border border-slate-200 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techs.map((tech, i) => (
                <ScrollReveal key={i} delay={i * 100} direction="up" className="h-full">
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5">
                      {tech.icon}
                    </div>
                    <h4 className="font-display font-semibold text-slate-900 text-base mb-2">{tech.title}</h4>
                    <p className="text-sm text-blue-600 leading-6">{tech.desc}</p>
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
