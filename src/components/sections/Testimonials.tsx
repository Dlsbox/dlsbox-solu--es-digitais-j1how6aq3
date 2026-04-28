import { ScrollReveal } from '@/components/ui/scroll-reveal'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    name: 'Roberto Silva',
    role: 'CEO, TechNova',
    content:
      'A entrega foi excepcionalmente rápida e o design superou todas as nossas expectativas. O app roda liso.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1',
  },
  {
    name: 'Ana Carolina',
    role: 'Diretora de Marketing, Varejo+',
    content:
      'A taxa de conversão do nosso e-commerce aumentou 45% no primeiro mês após o novo lançamento. O código é impecável.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2',
  },
  {
    name: 'Marcos Mendes',
    role: 'Founder, StartupFlow',
    content:
      'Eles não apenas entregam código, eles entendem o modelo de negócio e constroem soluções para escalar.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=3',
  },
]

const logos = ['acme', 'globex', 'soylent', 'initech', 'umbrella']

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })])

  return (
    <section
      id="prova-social"
      className="py-24 md:py-32 px-6 md:px-12 bg-white/5 border-y border-white/10"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase mb-4">
              Quem confia no nosso{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                código
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up" className="mb-24">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, i) => (
              <img
                key={i}
                src={`https://img.usecurling.com/i?q=${logo}&color=white&shape=fill`}
                alt="Client Logo"
                className="h-8 md:h-12 object-contain"
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} direction="up">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-6">
              {testimonials.map((test, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
                >
                  <div className="bg-background border border-white/10 p-8 rounded-[2rem] h-full flex flex-col gap-6">
                    <div className="flex gap-1 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-foreground/80 flex-1 leading-relaxed italic">
                      "{test.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full" />
                      <div>
                        <h4 className="font-bold">{test.name}</h4>
                        <p className="text-sm text-muted-foreground">{test.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
