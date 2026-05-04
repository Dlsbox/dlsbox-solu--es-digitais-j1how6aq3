import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Clock, TrendingDown, ServerCrash } from 'lucide-react'

export function Problem() {
  const stats = [
    {
      num: '22%',
      text: 'das empresas perdem usuários por lentidão.',
      icon: <Clock className="w-6 h-6 text-amber-600" />,
    },
    {
      num: '12%',
      text: 'de queda média na conversão por 1s de atraso no carregamento.',
      icon: <TrendingDown className="w-6 h-6 text-amber-600" />,
    },
    {
      num: '18%',
      text: 'dos projetos falham por arquitetura frágil ou baixa escalabilidade.',
      icon: <ServerCrash className="w-6 h-6 text-amber-600" />,
    },
  ]

  return (
    <section id="problema" className="py-24 bg-white relative border-y border-gray-100">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl mb-4">
              O digital não perdoa sistemas lentos.
            </h2>
            <p className="text-sm leading-7 text-blue-600 sm:text-base">
              Se o seu sistema não acompanha o ritmo do seu negócio, você perde performance,
              clientes e oportunidades todos os dias.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 150} direction="up">
              <div className="p-8 rounded-2xl flex flex-col items-center text-center gap-4 h-full hover:-translate-y-1 transition-transform duration-300 bg-slate-50 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <h3 className="font-display text-5xl md:text-6xl font-extrabold text-blue-600 tracking-tighter">
                  {stat.num}
                </h3>
                <p className="text-sm font-medium text-slate-900 leading-relaxed mt-2">{stat.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
