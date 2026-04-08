import { Reveal } from '@/components/ui/reveal'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative w-full py-48 md:py-64 overflow-hidden bg-foreground text-background z-20"
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        <Reveal>
          <h2 className="font-display italic text-6xl md:text-8xl lg:text-9xl mb-20 opacity-95 tracking-tight font-light text-balance text-brown-100">
            Pronto para edificar?
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <button
            onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
            className="group relative h-[72px] px-16 rounded-none bg-background text-foreground text-xs tracking-[0.25em] uppercase font-medium overflow-hidden transition-all duration-1000 hover:bg-brown-50"
          >
            <span className="relative z-10 flex items-center gap-6">
              Iniciar o diálogo
              <ArrowRight className="w-5 h-5 transition-transform duration-1000 ease-out group-hover:translate-x-3" />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
