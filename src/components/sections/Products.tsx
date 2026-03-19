import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { ArrowUpRight, LineChart, Type } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-card/50 border-y border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Nossos Produtos</h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas internas desenvolvidas para maximizar seus resultados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={100}>
            <BentoCard className="bg-background group h-full flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <LineChart className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  Em breve
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Tracker</h3>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-1">
                Dashboard financeiro e métricas avançadas criadas especificamente para
                infoprodutores e negócios digitais que precisam de precisão.
              </p>
              <Button
                variant="outline"
                className="w-fit gap-2 group-hover:border-primary group-hover:text-primary transition-colors"
              >
                Acessar Tracker <ArrowUpRight className="w-4 h-4" />
              </Button>
            </BentoCard>
          </Reveal>

          <Reveal delay={200}>
            <BentoCard className="bg-background group h-full flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <Type className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full border border-secondary/20">
                  Beta
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Logos</h3>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-1">
                Ferramenta inteligente focada em estruturação de conteúdo e copy para suas páginas,
                gerando narrativas que convertem.
              </p>
              <Button
                variant="outline"
                className="w-fit gap-2 group-hover:border-secondary group-hover:text-secondary transition-colors"
              >
                Acessar Logos <ArrowUpRight className="w-4 h-4" />
              </Button>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
