import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-2xl font-medium mb-6">DLSBox Soluções Digitais</h3>
            <p className="text-muted-foreground max-w-sm">
              Criando estruturas digitais e experiências premium para marcas ambiciosas.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:text-right">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Social
              </span>
              <a
                href="#"
                className="inline-flex items-center md:justify-end gap-1 hover:text-muted-foreground transition-colors"
              >
                Instagram <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center md:justify-end gap-1 hover:text-muted-foreground transition-colors"
              >
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Contato
              </span>
              <a
                href="mailto:suporte@dlsbox.com"
                className="hover:text-muted-foreground transition-colors"
              >
                suporte@dlsbox.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center border-t border-border/50 pt-12">
          <h1 className="text-[13vw] leading-none font-bold tracking-tighter text-foreground/5 select-none">
            DLSBOX
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} DLSBox.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
