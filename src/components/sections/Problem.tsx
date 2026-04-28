import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { useState, useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 2000
          const stepTime = Math.abs(Math.floor(duration / value))

          const timer = setInterval(() => {
            start += Math.ceil(value / 50)
            if (start >= value) {
              setCurrent(value)
              clearInterval(timer)
            } else {
              setCurrent(start)
            }
          }, stepTime)

          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {current}
      {suffix}
    </span>
  )
}

export function Problem() {
  return (
    <section id="problema" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-[1200px] mx-auto w-full">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6 uppercase">
              O digital não perdoa <br className="hidden md:block" />
              <span className="text-muted-foreground font-light">sistemas lentos.</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Se o seu aplicativo ou plataforma trava, é difícil de usar ou demora para lançar
              funcionalidades, você está perdendo dinheiro a cada segundo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: 88, suffix: '%', text: 'dos usuários não retornam após uma má experiência.' },
            { num: 53, suffix: '%', text: 'abandonam sites que demoram mais de 3 segundos.' },
            {
              num: 70,
              suffix: '%',
              text: 'dos negócios falham por problemas de escala tecnológica.',
            },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 200} direction="up">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center flex flex-col items-center justify-center gap-4 h-full">
                <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50">
                  <AnimatedNumber value={stat.num} suffix={stat.suffix} />
                </h3>
                <p className="text-foreground/70">{stat.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
