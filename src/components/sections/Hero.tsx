import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-16 px-6 md:px-12 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start gap-8">
          <ScrollReveal>
            <h1 className="text-[12vw] md:text-[6vw] leading-[0.9] tracking-tighter font-bold uppercase text-balance text-foreground drop-shadow-sm">
              Desenvolvimento
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Premium
              </span>
              <br />
              para seu app.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <p className="max-w-xl text-lg md:text-2xl text-foreground/80 leading-relaxed font-light">
              Transformamos ideias e processos em produtos digitais escaláveis com tecnologia de
              ponta, design imersivo e alta conversão.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={400}
            direction="up"
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="rounded-full text-base h-14 px-8 gap-2" asChild>
              <a href="#contato">
                Começar Projeto <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base h-14 px-8 bg-background/50 backdrop-blur-md"
              asChild
            >
              <a href="#solucao">Ver Solução</a>
            </Button>
          </ScrollReveal>
        </div>

        <div className="flex-1 w-full relative">
          <ScrollReveal delay={600} direction="left" className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl -z-10" />
            <div className="w-full aspect-square md:aspect-[4/3] rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-2xl shadow-2xl p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
              {/* Mockup visual with Glassmorphism */}
              <div className="w-full h-full rounded-xl bg-background/80 border border-white/10 shadow-inner overflow-hidden relative flex flex-col">
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-6 rounded bg-white/10 animate-pulse" />
                  <div className="w-full h-32 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                  <div className="flex gap-4">
                    <div className="w-1/2 h-24 rounded-lg bg-white/5" />
                    <div className="w-1/2 h-24 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
