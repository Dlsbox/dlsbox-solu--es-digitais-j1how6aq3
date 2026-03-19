import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-8 px-4 md:px-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div
            className="flex items-center gap-3 mb-6 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
              D
            </div>
            <span className="font-display font-bold text-xl tracking-tight">DLSBox</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Estruturas digitais inteligentes e modulares, projetadas especificamente para escalar
            negócios.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-foreground">
            Soluções
          </h4>
          <ul className="space-y-3">
            {['Sites Institucionais', 'Landing Pages', 'Sistemas', 'Plataformas SaaS'].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {item} <ArrowUpRight className="w-3 h-3 opacity-50" />
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-5 text-sm uppercase tracking-wider text-foreground">
            Empresa
          </h4>
          <ul className="space-y-3">
            {['Produtos', 'Planos', 'Contato'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-muted-foreground">
          © {new Date().getFullYear()} DLSBox Soluções Digitais.
        </p>
        <p className="text-sm font-semibold text-foreground/80">Construído com estrutura real.</p>
      </div>
    </footer>
  )
}
