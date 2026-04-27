export function Footer() {
  return (
    <footer className="bg-muted/10 border-t border-border pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 text-foreground no-underline mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-brown-600 flex items-center justify-center font-bold text-xs text-white">
                DLS
              </div>
              <span className="font-bold text-lg tracking-tight">DLSBox</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Desenvolvimento de SaaS, apps e plataformas com visão de produto. Porto Alegre,
              Brasil.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Empresa
            </h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#sobre"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Áreas
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Produtos
            </h5>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://logos.dlsbox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  DLSLogos
                </a>
              </li>
              <li>
                <a
                  href="https://tracker.dlsbox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  DLSTracker
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DLSBox LTD. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
