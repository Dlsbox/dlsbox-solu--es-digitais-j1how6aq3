import { LogosProduct } from './LogosProduct'
import { TrackerProduct } from './TrackerProduct'

function ProductPlaceholder({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center opacity-40 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 w-full rounded-2xl border border-dashed border-border overflow-hidden bg-slate-50 aspect-video flex items-center justify-center">
        <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
          Em breve
        </span>
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">
          Em breve
        </h3>
        <p className="text-muted-foreground font-light text-lg">
          Novo produto SaaS em desenvolvimento.
        </p>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Portfólio
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-highlight-soft font-display text-4xl md:text-6xl font-medium tracking-tight mb-6">
                Produtos em Destaque
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Soluções SaaS criadas, validadas e operadas inteiramente pela equipe DLSBox.
              </p>
            </div>
            <a
              href="#contato"
              className="text-sm font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1 whitespace-nowrap"
            >
              Iniciar Projeto
            </a>
          </div>
        </div>

        <div className="space-y-32">
          <LogosProduct />
          <TrackerProduct />
          <ProductPlaceholder reverse={true} />
        </div>
      </div>
    </section>
  )
}
