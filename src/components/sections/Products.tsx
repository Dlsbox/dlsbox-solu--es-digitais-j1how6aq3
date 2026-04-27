import { LogosProduct } from './LogosProduct'
import { TrackerProduct } from './TrackerProduct'

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
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
                O que já construímos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Dois produtos desenvolvidos e operados pela DLSBox — disponíveis hoje, com usuários
                reais.
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
        </div>
      </div>
    </section>
  )
}
