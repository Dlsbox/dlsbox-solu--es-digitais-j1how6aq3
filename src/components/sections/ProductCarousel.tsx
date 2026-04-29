import { ScrollReveal } from '@/components/ui/scroll-reveal'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const screens = [
  {
    img: 'https://img.usecurling.com/p/800/600?q=dashboard%20clean&color=blue',
    title: 'Dashboard Inteligente',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=data%20charts&color=white',
    title: 'Relatórios Visuais',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=user%20profile&color=gray',
    title: 'Área de Clientes',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=payment%20checkout&color=orange',
    title: 'Pagamentos e Assinaturas',
  },
  {
    img: 'https://img.usecurling.com/p/800/600?q=analytics%20app&color=blue',
    title: 'Analytics e Performance',
  },
]

export function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 4000 }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.internalEngine().index.get())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="py-24 bg-white overflow-hidden border-y border-gray-100">
      <div className="container max-w-[1400px] mx-auto px-6 mb-12">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-4">
              Explore a experiência antes mesmo de construir.
            </h2>
            <p className="text-brand-gray text-lg">
              Use o carrossel para apresentar telas, funcionalidades, módulos ou cases de sucesso.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={200} direction="up" className="w-full">
        <div className="overflow-hidden px-4 md:px-12" ref={emblaRef}>
          <div className="flex touch-pan-y items-center py-8">
            {screens.map((screen, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 px-4 transition-all duration-500 ease-out"
                style={{
                  transform: selectedIndex === i ? 'scale(1)' : 'scale(0.95)',
                  opacity: selectedIndex === i ? 1 : 0.5,
                }}
              >
                <div
                  className={cn(
                    'glass-card rounded-[2rem] overflow-hidden p-2 bg-white transition-shadow duration-500',
                    selectedIndex === i ? 'shadow-xl shadow-brand-blue/5 border-brand-blue/20' : '',
                  )}
                >
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/3] md:aspect-[16/10]">
                    <img
                      src={screen.img}
                      alt={screen.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-text/90 via-brand-text/20 to-transparent flex items-end p-6 md:p-10">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {screen.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-brand-text transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  selectedIndex === i ? 'w-8 bg-brand-blue' : 'w-2.5 bg-gray-200',
                )}
                aria-label={`Ir para o slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-brand-text transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </ScrollReveal>
    </section>
  )
}
