import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { LayoutTemplate, MonitorSmartphone, Braces, Rocket } from 'lucide-react'

export function Services() {
  return (
    <section id="solucoes" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Nossas <span className="text-primary">Soluções</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Estruturas sob medida em formato modular para cada estágio da sua empresa.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">
          <Reveal delay={100} className="md:col-span-2 md:row-span-2 h-full">
            <BentoCard className="bg-primary/5 border-primary/10 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Landing Pages de Alta Conversão
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Páginas ultra-rápidas otimizadas para tráfego pago. Estrutura persuasiva projetada
                para transformar cliques em clientes.
              </p>
              <div className="mt-auto flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-background text-xs font-semibold border border-border">
                  Lançamentos
                </span>
                <span className="px-3 py-1 rounded-full bg-background text-xs font-semibold border border-border">
                  Captação
                </span>
                <span className="px-3 py-1 rounded-full bg-background text-xs font-semibold border border-border">
                  Vendas
                </span>
              </div>
            </BentoCard>
          </Reveal>

          <Reveal delay={200} className="md:col-span-1 md:row-span-1 h-full">
            <BentoCard className="h-full">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Sites Institucionais</h3>
              <p className="text-muted-foreground text-sm">
                Vitrine digital profissional que transmite autoridade e atrai clientes qualificados
                de forma orgânica.
              </p>
            </BentoCard>
          </Reveal>

          <Reveal delay={300} className="md:col-span-1 md:row-span-1 h-full">
            <BentoCard className="h-full">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 text-foreground">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">E-commerce</h3>
              <p className="text-muted-foreground text-sm">
                Lojas virtuais escaláveis com checkout otimizado, preparadas para vender 24 horas
                por dia sem fricção.
              </p>
            </BentoCard>
          </Reveal>

          <Reveal delay={400} className="md:col-span-3 md:row-span-1">
            <BentoCard className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                <Braces className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">
                  Sistemas & Plataformas SaaS
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvimento sob medida de dashboards, áreas de membros e CRMs internos para
                  você focar apenas em crescer a operação.
                </p>
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
