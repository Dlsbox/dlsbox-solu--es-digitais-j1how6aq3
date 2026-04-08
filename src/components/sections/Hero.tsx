import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function Hero() {
  const handleScrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 flex flex-col items-center justify-center text-center z-10 w-full max-w-5xl mx-auto">
      <Reveal className="w-full flex justify-center mb-10">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/80">
            Arquitetura Digital
          </span>
        </div>
      </Reveal>

      <Reveal delay={150} className="w-full flex justify-center">
        <h1 className="font-display max-w-4xl leading-[1.05] mb-10 text-foreground text-[clamp(44px,8vw,110px)] tracking-tight">
          Sistemas esculpidos para <span className="italic font-light">converter.</span>
        </h1>
      </Reveal>

      <Reveal delay={300} className="w-full flex justify-center">
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-light leading-relaxed">
          Criamos estruturas modulares exclusivas. Um design refinado focado em resultados,
          combinando estética editorial com tecnologia de ponta para elevar o seu negócio.
        </p>
      </Reveal>

      <Reveal delay={450} className="w-full flex justify-center px-4 md:px-0">
        <button
          onClick={handleScrollToCta}
          className="group relative h-[60px] w-full sm:w-auto px-12 rounded-full bg-foreground text-background text-xs tracking-[0.15em] uppercase font-medium overflow-hidden transition-all duration-500 hover:bg-foreground/90 hover:scale-[1.02] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.1)]"
        >
          <span className="relative z-10 flex items-center justify-center gap-4">
            Solicitar projeto
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </span>
        </button>
      </Reveal>
    </section>
  )
}
