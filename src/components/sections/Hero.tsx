import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function Hero() {
  const handleScrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-16 pb-40 md:pt-28 md:pb-56 flex flex-col items-center justify-center text-center z-10 w-full max-w-5xl mx-auto px-4">
      <Reveal delay={100} className="w-full flex justify-center mb-12">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-none border-b border-foreground/10">
          <span className="w-1.5 h-1.5 rounded-full bg-brown-600 dark:bg-brown-400" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-foreground/70">
            Arquitetura Digital
          </span>
        </div>
      </Reveal>

      <Reveal delay={300} className="w-full flex justify-center">
        <h1 className="font-display max-w-4xl leading-[1.1] mb-12 text-foreground text-[clamp(48px,8vw,120px)] tracking-tight text-balance">
          Sistemas esculpidos para{' '}
          <span className="italic font-light text-brown-700 dark:text-brown-400">converter.</span>
        </h1>
      </Reveal>

      <Reveal delay={500} className="w-full flex justify-center">
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-light leading-relaxed text-balance">
          Criamos estruturas modulares exclusivas. Um design refinado focado em resultados,
          combinando estética editorial com tecnologia de ponta para elevar o seu negócio.
        </p>
      </Reveal>

      <Reveal delay={700} className="w-full flex justify-center">
        <button
          onClick={handleScrollToCta}
          className="group relative h-[64px] w-full sm:w-auto px-14 rounded-none bg-foreground text-background text-xs tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-700 hover:bg-brown-800 dark:hover:bg-brown-200 hover:scale-[1.01] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]"
        >
          <span className="relative z-10 flex items-center justify-center gap-4">
            Solicitar projeto
            <ArrowRight className="w-4 h-4 transition-transform duration-700 ease-out group-hover:translate-x-2" />
          </span>
        </button>
      </Reveal>
    </section>
  )
}
