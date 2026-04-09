import { Reveal } from '@/components/ui/reveal'
import { TrackerProduct } from './TrackerProduct'
import { LogosProduct } from './LogosProduct'

export function Products() {
  return (
    <section
      id="produtos"
      className="py-32 md:py-48 scroll-mt-20 relative z-10 bg-muted/20 border-y border-border"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-32 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
            Laboratório
          </span>
          <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
            Produtos Internos
          </h2>
          <p className="text-muted-foreground font-light text-xl max-w-2xl mx-auto text-balance">
            Ferramentas exclusivas desenvolvidas internamente para maximizar a precisão e a escala
            dos seus resultados.
          </p>
        </Reveal>

        <div className="space-y-32">
          <Reveal delay={200}>
            <TrackerProduct />
          </Reveal>

          <Reveal delay={400}>
            <LogosProduct />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
