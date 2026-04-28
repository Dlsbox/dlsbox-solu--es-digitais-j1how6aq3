import { ScrollReveal } from '@/components/ui/scroll-reveal'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useCallback, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const screens = [
  {
    img: 'https://img.usecurling.com/p/800/600?q=dashboard&color=blue',
    title: 'Dashboard Analytics',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=mobile%20app&color=purple',
    title: 'App Mobile Integrado',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=ecommerce%20interface&color=black',
    title: 'E-commerce Premium',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=kanban%20board&color=blue',
    title: 'Gestão de Projetos',
  },
]

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 4000 }),
  ])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="produto" className="py-24 md:py-32 relative overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
            Visão <span className="text-muted-foreground font-light">de Produto</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="left" className="flex gap-4 hidden md:flex">
          <button
            onClick={scrollPrev}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={300} direction="up" className="w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {screens.map((screen, i) => (
              <div key={i} className="flex-[0_0_85%] md:flex-[0_0_60%] min-w-0 pl-6 md:pl-12">
                <div className="relative group rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] md:aspect-[16/9]">
                  <img
                    src={screen.img}
                    alt={screen.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-8 md:p-12">
                    <h3 className="text-2xl md:text-4xl font-bold">{screen.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
