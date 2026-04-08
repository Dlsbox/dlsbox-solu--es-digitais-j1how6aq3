import { Reveal } from '@/components/ui/reveal'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative w-full py-48 md:py-64 overflow-hidden bg-foreground text-background z-20"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
        <Reveal>
          <h2 className="font-display italic text-6xl md:text-8xl lg:text-9xl mb-16 opacity-95 tracking-tight font-light">
            Pronto para edificar?
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <button
            onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
            className="group relative h-[70px] px-14 rounded-full bg-background text-foreground text-sm tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-700 hover:scale-[1.03] shadow-[0_20px_60px_rgba(0,0,0,0.5)] dark:shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-4">
              Iniciar o diálogo
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  )
}
