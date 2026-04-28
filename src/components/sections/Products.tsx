import { LogosProduct } from './LogosProduct'
import { TrackerProduct } from './TrackerProduct'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Products() {
  return (
    <section id="projetos" className="py-24 md:py-40 px-6 md:px-12 relative z-10">
      <div className="max-w-[1600px] mx-auto w-full space-y-24 md:space-y-32">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
            <div className="lg:col-span-4">
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground/80 backdrop-blur-md bg-black/5 px-4 py-2 rounded-full border border-black/10 inline-block">
                Portfólio Exclusivo
              </span>
            </div>
            <div className="lg:col-span-8 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
              <div>
                <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
                  Produtos em Operação
                </h2>
                <p className="text-2xl text-muted-foreground font-light max-w-2xl">
                  Soluções SaaS criadas, validadas e operadas inteiramente pela equipe DLSBox.
                </p>
              </div>
              <a
                href="#contato"
                className="group flex items-center justify-center gap-3 text-sm font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors whitespace-nowrap bg-foreground text-background px-8 py-5 rounded-full hover:scale-105 duration-300"
              >
                Iniciar Projeto
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-32">
          <ScrollReveal delay={100}>
            <LogosProduct />
          </ScrollReveal>
          <ScrollReveal delay={200}>{TrackerProduct ? <TrackerProduct /> : null}</ScrollReveal>
        </div>
      </div>
    </section>
  )
}
