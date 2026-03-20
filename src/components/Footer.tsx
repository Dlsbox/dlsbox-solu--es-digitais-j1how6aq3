import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-8 px-4 md:px-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <Link
            to="/"
            className="inline-flex items-center mb-6 cursor-pointer transition-transform hover:scale-105 duration-300"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Logo className="h-10 sm:h-12 w-auto" />
          </Link>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mb-6">
            Estruturas digitais inteligentes e modulares, projetadas especificamente para escalar
            negócios.
          </p>
          <a
            href="mailto:suporte@dlsbox.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            suporte@dlsbox.com
          </a>
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
