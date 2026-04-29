export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-brand-deepBlue flex items-center justify-center font-bold text-xs text-white">
                DLS
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-text">DLSBox</span>
            </a>
            <p className="text-sm text-brand-gray leading-relaxed max-w-xs">
              Soluções digitais para apps, SaaS e produtos escaláveis. Desenvolvido com estratégia,
              design e tecnologia premium.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-[0.1em] uppercase text-brand-text mb-6">
              Empresa
            </h5>
            <ul className="flex flex-col gap-4">
              {['Soluções', 'Processo', 'Planos', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-sm text-brand-gray hover:text-brand-blue transition-colors font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-[0.1em] uppercase text-brand-text mb-6">
              Produtos
            </h5>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://logos.dlsbox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brand-gray hover:text-brand-blue transition-colors font-medium"
                >
                  DLS Logos
                </a>
              </li>
              <li>
                <a
                  href="https://tracker.dlsbox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brand-gray hover:text-brand-blue transition-colors font-medium"
                >
                  DLS Tracker
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray font-medium">
            © {new Date().getFullYear()} DLSBox. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-brand-gray hover:text-brand-text transition-colors font-medium"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-brand-gray hover:text-brand-text transition-colors font-medium"
            >
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
