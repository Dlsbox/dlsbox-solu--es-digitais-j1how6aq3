import { Link } from 'react-router-dom'
import { useViewTransitionNav } from '@/hooks/useViewTransitionNav'

export function Footer() {
  const { handleSectionClick, handleLinkClick } = useViewTransitionNav()

  return (
    <footer className="border-t border-slate-200/60 pt-14 pb-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <img src="/logo.png" alt="DLSBox" className="w-[160px] h-[160px] object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-lg tracking-tight text-slate-900">DLSBox</span>
                <span className="text-xs text-slate-500 tracking-wide">Soluções Digitais</span>
              </span>
            </a>
            <p className="text-sm text-blue-600 leading-relaxed max-w-sm">
              Desenvolvimento de SaaS, apps e plataformas digitais com visão de produto.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
              Navegação
            </h5>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: '#servicos', label: 'Soluções' },
                { href: '#processo', label: 'Processo' },
                { href: '#projetos', label: 'Projetos' },
                { href: '#contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSectionClick(e, link.href)}
                    className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
              Produtos
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://logos.dlsbox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  DLSLogos
                </a>
              </li>
              <li>
                <a
                  href="https://tracker.dlsbox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  DLSTracker
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200/60 pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} DLSBox LTD. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacidade"
              onClick={handleLinkClick}
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              to="/termos-de-uso"
              onClick={handleLinkClick}
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
            >
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
