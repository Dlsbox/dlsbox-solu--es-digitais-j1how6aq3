import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Code2 } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { useMousePosition } from '@/hooks/use-mouse-position'
import { useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { useCountUp } from '@/hooks/use-count-up'

function StatItem({
  label,
  value,
  suffix = '',
  prefix = '',
}: {
  label: string
  value: number
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5, triggerOnce: true })
  const count = useCountUp(value, 2000, isVisible)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-card/70 dark:bg-card/30 rounded-2xl border border-border/50 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors duration-300"
    >
      <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </div>
  )
}

export function Hero() {
  const position = useMousePosition()

  const handleScrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToSolucoes = () => {
    document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden transition-colors duration-300">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 dark:bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-50 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          transform: `translate(${(position.x - (typeof window !== 'undefined' ? window.innerWidth : 1000) / 2) * 0.05}px, ${(position.y - (typeof window !== 'undefined' ? window.innerHeight : 800) / 2) * 0.05}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brown-500/40 dark:bg-brown-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60 dark:opacity-50 transition-transform duration-100 ease-out pointer-events-none"
        style={{
          transform: `translate(${(position.x - (typeof window !== 'undefined' ? window.innerWidth : 1000) / 2) * -0.05}px, ${(position.y - (typeof window !== 'undefined' ? window.innerHeight : 800) / 2) * -0.05}px)`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-10 flex flex-col items-center text-center">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 rounded-full border-primary/30 bg-primary/10 dark:bg-primary/5 text-primary transition-colors duration-300"
          >
            <Code2 className="w-4 h-4 mr-2" />
            Soluções digitais com estrutura real
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold max-w-5xl leading-[1.1] mb-8 transition-colors duration-300">
            Criamos sites, sistemas e{' '}
            <span className="text-stroke-transparent relative inline-block transition-colors duration-300">
              estrutura
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-brown-500 bg-clip-text text-transparent opacity-60 dark:opacity-50 blur-sm transition-opacity duration-300">
                estrutura
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-300">
            Criação de sites, sistemas e estruturas digitais personalizadas para o crescimento de
            negócios.
          </p>
        </Reveal>

        <Reveal
          delay={300}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            onClick={handleScrollToCta}
            className="w-full sm:w-auto rounded-full px-8 text-base h-14 group shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToSolucoes}
            className="w-full sm:w-auto rounded-full px-8 text-base h-14 bg-background/50 backdrop-blur-sm hover:bg-black/5 dark:hover:bg-white/5 border-border/50 transition-all duration-300"
          >
            Ver soluções
          </Button>
        </Reveal>

        <Reveal delay={400} className="w-full max-w-5xl mt-20 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatItem prefix="+" value={340} suffix="%" label="Aumento em visibilidade" />
            <StatItem value={48} suffix="h" label="Tempo médio de entrega inicial" />
            <StatItem prefix="+" value={50} label="Projetos entregues" />
            <StatItem value={100} suffix="%" label="Foco em conversão" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
