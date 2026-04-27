import { ArrowUpRight } from 'lucide-react'

export function LogosProduct() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group">
      <div className="flex-1 w-full rounded-2xl border border-border shadow-lg relative overflow-hidden group-hover:border-foreground/20 transition-all duration-1000 bg-white">
        <img
          src="https://files.goskip.app/api/v1/files/download/23971481-9f93-41c1-9f61-ba1b29a2ee6f/c38d7807-6101-4be6-a626-444c20573e8e.webp"
          alt="DLSLogos Antes e Depois"
          className="w-full h-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-1000"
        />
      </div>

      <div className="flex-1 space-y-10">
        <div className="flex items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-display text-foreground tracking-tight">
            DLSLogos
          </h3>
          <span className="px-3 py-1 bg-blue-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-blue-700 dark:text-blue-400 border border-blue-600/20 rounded-full">
            Produto Live
          </span>
        </div>
        <p className="text-muted-foreground font-light text-xl leading-relaxed">
          Uma solução inteligente que transforma documentos em audiobooks profissionais, realizando
          a detecção e inserção automática de referências bíblicas para um estudo mais rico.
        </p>
        <button
          onClick={() => window.open('https://logos.dlsbox.com', '_blank')}
          className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-700"
        >
          <span className="border-b border-foreground/20 group-hover:border-blue-600/50 pb-1">
            Acessar DLSLogos
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  )
}
