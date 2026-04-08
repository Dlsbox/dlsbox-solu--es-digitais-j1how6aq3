import { Reveal } from '@/components/ui/reveal'
import { LayoutTemplate, MonitorSmartphone, Braces, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

function ServiceCard({ className, icon: Icon, title, desc, tags, highlight }: any) {
  return (
    <div
      className={cn(
        'relative overflow-hidden p-10 md:p-14 transition-all duration-1000 ease-out group hover:-translate-y-1',
        'bg-card border border-border',
        'shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)]',
        highlight &&
          'shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-foreground/10',
        className,
      )}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div
        className={cn(
          'w-12 h-12 mb-12 flex items-center justify-start text-foreground transition-transform duration-700 group-hover:translate-x-1',
          highlight && 'text-brown-600 dark:text-brown-400',
        )}
      >
        <Icon className="w-8 h-8" strokeWidth={1} />
      </div>
      <h3 className="text-3xl font-display mb-6 text-foreground leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-12 text-lg">{desc}</p>

      {tags && (
        <div className="mt-auto flex gap-4 flex-wrap">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-0 py-1 border-b border-foreground/10 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function Services() {
  return (
    <section id="solucoes" className="py-32 md:py-48 scroll-mt-20 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-32">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
              Módulos Estruturais
            </span>
            <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
              Nossas Soluções
            </h2>
            <p className="text-muted-foreground font-light text-xl max-w-2xl text-balance">
              Arquitetura sob medida para cada estágio da sua operação digital, esculpida com rigor
              editorial.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[minmax(380px,auto)]">
          <Reveal delay={100} className="lg:col-span-2 lg:row-span-2 h-full">
            <ServiceCard
              highlight
              className="h-full flex flex-col"
              icon={LayoutTemplate}
              title="Landing Pages de Alta Conversão"
              desc="Páginas ultrarrápidas otimizadas para tráfego. Uma estrutura persuasiva e editorial projetada para transformar atenção em clientes, com fluidez e sofisticação inigualáveis."
              tags={['Lançamentos', 'Captação', 'Vendas']}
            />
          </Reveal>

          <Reveal delay={300} className="lg:col-span-1 lg:row-span-1 h-full">
            <ServiceCard
              className="h-full"
              icon={MonitorSmartphone}
              title="Institucionais"
              desc="Vitrine digital que transmite autoridade e atrai clientes qualificados com um design impecável e atemporal."
            />
          </Reveal>

          <Reveal delay={500} className="lg:col-span-1 lg:row-span-1 h-full">
            <ServiceCard
              className="h-full"
              icon={Rocket}
              title="E-commerce"
              desc="Lojas virtuais elegantes com checkout otimizado, projetadas para vender sem fricção e maximizar o LTV."
            />
          </Reveal>

          <Reveal delay={700} className="lg:col-span-3 lg:row-span-1 mt-4">
            <div className="relative overflow-hidden p-12 md:p-16 transition-all duration-1000 ease-out group bg-foreground text-background shadow-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-12">
                <div className="w-16 h-16 flex items-center justify-start shrink-0 transition-transform duration-1000 group-hover:translate-x-2">
                  <Braces className="w-10 h-10 text-brown-400" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display mb-6 tracking-tight">
                    Sistemas & SaaS
                  </h3>
                  <p className="text-background/70 font-light leading-relaxed max-w-3xl text-lg">
                    Desenvolvimento de infraestruturas robustas, dashboards e plataformas sob medida
                    para escalar a sua operação com a elegância de uma arquitetura refinada.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
