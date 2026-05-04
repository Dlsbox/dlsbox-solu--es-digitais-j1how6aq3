import { ScrollReveal } from '@/components/ui/scroll-reveal'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    content:
      'A DLSBox entregou nosso app com performance impressionante e uma experiência que encantou nossos usuários. A comunicação foi impecável do início ao fim.',
    name: 'Eduardo Silva',
    role: 'CEO, NextGen Capital',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=4',
  },
  {
    content:
      'Profissionais altamente técnicos, com visão de produto e prazos que realmente são cumpridos. Eles entenderam perfeitamente as regras de negócio.',
    name: 'Ana Carolina',
    role: 'COO, Innova Digital',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=5',
  },
  {
    content:
      'Nosso sistema nunca esteve tão estável. Suporte próximo e equipe que entende do nosso negócio, ajudando a traçar estratégias para escalar.',
    name: 'Marcos Medeiros',
    role: 'CTO, TechVerse',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=6',
  },
]

const logos = [
  'TechVerse',
  'NextGen Capital',
  'Alfa Investimentos',
  'Innova Digital',
  'Bluebird Ventures',
]

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', breakpoints: { '(min-width: 1024px)': { active: false } } },
    [Autoplay({ delay: 5000 })],
  )

  return (
    <section id="prova-social" className="py-24 bg-slate-50 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl mb-16">
              Quem confia no nosso código
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="text-xl md:text-2xl font-bold font-display tracking-tight text-slate-900 select-none"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <div className="overflow-hidden lg:overflow-visible" ref={emblaRef}>
            <div className="flex touch-pan-y lg:grid lg:grid-cols-3 lg:gap-8 -ml-4 lg:ml-0">
              {testimonials.map((test, i) => (
                <div key={i} className="flex-[0_0_90%] md:flex-[0_0_60%] min-w-0 pl-4 lg:pl-0">
                  <div className="glass-card bg-white p-8 md:p-10 rounded-[2rem] h-full flex flex-col gap-6">
                    <div className="flex gap-1 text-amber-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-slate-900 font-medium flex-1 leading-relaxed italic">
                      "{test.content}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <img
                        src={test.avatar}
                        alt={test.name}
                        className="w-12 h-12 rounded-full border border-gray-200"
                      />
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{test.name}</h4>
                        <p className="text-xs text-slate-500">{test.role}</p>
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
