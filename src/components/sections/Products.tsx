import { LogosProduct } from './LogosProduct'
import { TrackerProduct } from './TrackerProduct'

export function Products() {
  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full space-y-32">
        <div className="flex justify-between items-end">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Ecossistema DLSBox
          </span>
          <a
            href="#contato"
            className="text-sm font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
          >
            Iniciar Projeto
          </a>
        </div>

        <div className="space-y-32">
          <LogosProduct />
          <TrackerProduct />
        </div>
      </div>
    </section>
  )
}
