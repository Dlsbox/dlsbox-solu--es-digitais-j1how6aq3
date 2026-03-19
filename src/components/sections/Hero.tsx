import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function Hero() {
  const handleScrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-10 flex flex-col items-center text-center">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-8 px-4 py-1.5 rounded-full border-border bg-background text-muted-foreground shadow-sm"
          >
            <LayoutGrid className="w-4 h-4 mr-2 text-primary" />
            Estrutura Digital Inteligente
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold max-w-4xl leading-tight mb-6 tracking-tight text-foreground">
            Sites e Sistemas <br className="hidden md:block" />
            feitos para <span className="text-primary">converter.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Criamos soluções modulares, rápidas e exclusivas. Design focado em resultados, com
            tecnologia de ponta para escalar o seu negócio de verdade.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Button
            size="lg"
            onClick={handleScrollToCta}
            className="rounded-full px-8 text-base h-14 shadow-sm hover:scale-[1.02] transition-all duration-300"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
