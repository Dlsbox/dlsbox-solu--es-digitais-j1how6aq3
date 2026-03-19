import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 dark:bg-card/30 pt-16 pb-8 px-4 md:px-10 mt-20 relative z-10 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        <div className="md:col-span-2">
          <div
            className="flex items-center gap-2 mb-6 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg transition-colors duration-300">
              D
            </div>
            <span className="font-display font-semibold text-xl tracking-tight transition-colors duration-300">
              DLSBox
            </span>
          </div>
          <p className="text-muted-foreground max-w-sm transition-colors duration-300">
            Criação de sites, sistemas e estruturas digitais personalizadas para o crescimento de
            negócios.
          </p>
        </div>

        <div>
          <h4 className="font-display font-medium mb-4 transition-colors duration-300">Soluções</h4>
          <ul className="space-y-3">
            {['Sites', 'Landing Pages', 'Sistemas', 'SaaS'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {item} <ArrowUpRight className="w-3 h-3 opacity-50" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-medium mb-4 transition-colors duration-300">Empresa</h4>
          <ul className="space-y-3">
            {['Produtos', 'Planos', 'Contato'].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 transition-colors duration-300">
        <p className="text-sm text-muted-foreground transition-colors duration-300">
          © {new Date().getFullYear()} DLSBox Soluções Digitais. Todos os direitos reservados.
        </p>
        <p className="text-sm font-medium text-foreground/80 transition-colors duration-300">
          Soluções digitais com estrutura real.
        </p>
      </div>
    </footer>
  )
}
