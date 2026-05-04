import { ArrowRight } from 'lucide-react'
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
        <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">
          Em breve
        </span>
      </div>
      <div className="flex-1 space-y-4">
        <h3 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
          Em breve
        </h3>
        <p className="text-sm text-slate-500 leading-7">
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
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
              Portfólio
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-sm leading-7 text-blue-600 sm:text-base max-w-2xl">
                Soluções SaaS criadas, validadas e operadas inteiramente pela equipe DLSBox.
              </p>
            </div>
            <a
              href="https://wa.me/447858632888?text=Olá,%20vim%20pelo%20site%20da%20DLSBox.%20Quero%20falar%20sobre%20um%20projeto%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 transition-all duration-300 hover:gap-3 hover:text-blue-600 whitespace-nowrap"
            >
              Iniciar Projeto
              <ArrowRight className="h-3.5 w-3.5" />
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
