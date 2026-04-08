import { Reveal } from '@/components/ui/reveal'
import { LayoutTemplate, MonitorSmartphone, Braces, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

function ServiceCard({ className, icon: Icon, title, desc, tags, highlight }: any) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[2rem] p-10 md:p-12 transition-all duration-700 ease-out group hover:-translate-y-2',
        'bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10',
        'shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]',
        highlight &&
          'bg-white/80 dark:bg-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]',
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 pointer-events-none" />
      <div
        className={cn(
          'w-14 h-14 rounded-full flex items-center justify-center mb-10 border border-foreground/10 bg-background/50 text-foreground transition-transform duration-500 group-hover:scale-110',
          highlight && 'border-foreground/20 bg-foreground/5',
        )}
      >
        <Icon className="w-6 h-6" strokeWidth={1} />
      </div>
      <h3 className="text-3xl font-display mb-5 text-foreground leading-tight">{title}</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-10 text-lg">{desc}</p>

      {tags && (
        <div className="mt-auto flex gap-3 flex-wrap">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full bg-background/50 backdrop-blur-md text-[10px] uppercase tracking-[0.15em] font-medium border border-foreground/10 text-foreground/70"
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
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 mb-6 block">
              Módulos Estruturais
            </span>
            <h2 className="text-5xl md:text-6xl font-display mb-8">Nossas Soluções</h2>
            <p className="text-muted-foreground font-light text-xl max-w-2xl">
              Arquitetura sob medida para cada estágio da sua operação digital.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">
          <Reveal delay={100} className="lg:col-span-2 lg:row-span-2 h-full">
            <ServiceCard
              highlight
              className="h-full flex flex-col"
              icon={LayoutTemplate}
              title="Landing Pages de Alta Conversão"
              desc="Páginas ultrarrápidas otimizadas para tráfego. Uma estrutura persuasiva e editorial projetada para transformar atenção em clientes, com fluidez e sofisticação."
              tags={['Lançamentos', 'Captação', 'Vendas']}
            />
          </Reveal>

          <Reveal delay={200} className="lg:col-span-1 lg:row-span-1 h-full">
            <ServiceCard
              className="h-full"
              icon={MonitorSmartphone}
              title="Institucionais"
              desc="Vitrine digital que transmite autoridade e atrai clientes qualificados com um design impecável."
            />
          </Reveal>

          <Reveal delay={300} className="lg:col-span-1 lg:row-span-1 h-full">
            <ServiceCard
              className="h-full"
              icon={Rocket}
              title="E-commerce"
              desc="Lojas virtuais elegantes com checkout otimizado, para vender sem fricção."
            />
          </Reveal>

          <Reveal delay={400} className="lg:col-span-3 lg:row-span-1">
            <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 transition-all duration-700 ease-out group hover:-translate-y-2 bg-foreground text-background shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10">
                <div className="w-16 h-16 rounded-full bg-background/10 flex items-center justify-center shrink-0 border border-background/20 transition-transform duration-500 group-hover:scale-110">
                  <Braces className="w-7 h-7 text-background" strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-display mb-4">Sistemas & SaaS</h3>
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
