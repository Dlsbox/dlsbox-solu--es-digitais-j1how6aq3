import { Button } from '@/components/ui/button'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Tilt } from '@/components/ui/tilt'

export function Hero() {
  const handleScrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col items-center justify-center text-center px-4 md:px-10 z-10 w-full max-w-6xl mx-auto">
      <Reveal className="w-full flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-black/20 backdrop-blur-[12px] border border-black/5 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] mb-8 transition-all hover:bg-white/60 dark:hover:bg-black/40">
          <LayoutGrid className="w-4 h-4 text-[#2f5cff]" />
          <span className="text-sm font-semibold text-foreground/80 tracking-wide">
            Estrutura Digital Inteligente
          </span>
        </div>
      </Reveal>

      <Reveal delay={100} className="w-full flex justify-center">
        <h1 className="font-bold max-w-4xl leading-[1.05] mb-8 tracking-tight text-foreground text-[clamp(42px,10vw,72px)] sm:text-[clamp(48px,8vw,100px)]">
          Sites e Sistemas <br className="hidden sm:block" />
          feitos para <span className="text-[#2f5cff]">converter.</span>
        </h1>
      </Reveal>

      <Reveal delay={200} className="w-full flex justify-center">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Criamos soluções modulares, rápidas e exclusivas. Design focado em resultados, com
          tecnologia de ponta para escalar o seu negócio de verdade.
        </p>
      </Reveal>

      <Reveal delay={300} className="w-full flex justify-center px-4 md:px-0">
        <Tilt
          maxRotation={15}
          scale={1.02}
          glareEnable
          glareMaxOpacity={0.2}
          className="cta-primary w-full sm:w-auto rounded-full"
        >
          <Button
            onClick={handleScrollToCta}
            className="btn-primary-3d group relative h-[64px] w-full sm:w-auto px-10 rounded-[inherit] bg-[#2f5cff] hover:bg-[#254acc] text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-[3px] border border-[#2f5cff] hover:border-[#4f75ff]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              Solicitar orçamento
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </Tilt>
      </Reveal>
    </section>
  )
}
