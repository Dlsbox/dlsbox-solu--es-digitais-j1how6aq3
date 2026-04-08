import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { ArrowUpRight, LineChart, Type } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { Badge } from '@/components/ui/badge'
import { TypingHeading } from '@/components/ui/typing-heading'

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-card/50 border-y border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal className="mb-12">
          <TypingHeading
            as="h2"
            className="text-3xl md:text-5xl font-display font-bold mb-4"
            text="Nossos Produtos"
            delay={200}
          />
          <p className="text-muted-foreground text-lg">
            Ferramentas internas desenvolvidas para maximizar seus resultados.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Reveal delay={100} className="h-full">
            <BentoCard className="bg-background group h-full flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <LineChart className="w-6 h-6" />
                </div>
                <Badge
                  variant="outline"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-3 py-1 text-xs font-semibold"
                >
                  Em breve
                </Badge>
              </div>
              <TypingHeading
                as="h3"
                className="text-2xl font-display font-bold mb-3"
                text="Tracker"
                delay={300}
              />
              <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-1">
                Dashboard financeiro e métricas avançadas criadas especificamente para
                infoprodutores e negócios digitais que precisam de precisão.
              </p>
              <MovingBorderButton
                containerClassName="w-full sm:w-fit h-11 hover:scale-[1.02] transition-transform shadow-sm mt-auto"
                className="px-6 text-white font-medium bg-[#25D366] flex items-center justify-center gap-2"
                borderRadius="1.75rem"
                onClick={() => window.open('https://tracker.dlsbox.com', '_blank')}
              >
                Acessar Tracker <ArrowUpRight className="w-4 h-4" />
              </MovingBorderButton>
            </BentoCard>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <BentoCard className="bg-background group h-full flex flex-col">
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                  <Type className="w-6 h-6" />
                </div>
                <Badge
                  variant="outline"
                  className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 px-3 py-1 text-xs font-semibold"
                >
                  Beta
                </Badge>
              </div>
              <TypingHeading
                as="h3"
                className="text-2xl font-display font-bold mb-3"
                text="Logos"
                delay={400}
              />
              <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-1">
                Ferramenta inteligente focada em estruturação de conteúdo e copy para suas páginas,
                gerando narrativas que convertem.
              </p>
              <MovingBorderButton
                containerClassName="w-full sm:w-fit h-11 hover:scale-[1.02] transition-transform shadow-sm mt-auto"
                className="px-6 text-white font-medium bg-[#25D366] flex items-center justify-center gap-2"
                borderRadius="1.75rem"
                onClick={() => window.open('https://logos.dlsbox.com', '_blank')}
              >
                Acessar Logos <ArrowUpRight className="w-4 h-4" />
              </MovingBorderButton>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
