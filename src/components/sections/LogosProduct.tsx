import { ArrowUpRight } from 'lucide-react'

export function LogosProduct() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group">
      <div className="flex-1 w-full aspect-[4/3] bg-card rounded-none border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group-hover:border-foreground/20 transition-all duration-1000">
        <div className="absolute top-0 left-0 right-0 h-12 border-b border-border flex items-center gap-2 px-6 bg-muted/30">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
        </div>
        <div className="absolute top-24 left-12 right-12 bottom-12 border border-border/50 bg-muted/10 p-8 flex flex-col gap-6">
          <div className="h-4 bg-foreground/10 w-3/4 transition-all duration-1000 group-hover:w-full" />
          <div className="h-4 bg-foreground/5 w-full" />
          <div className="h-4 bg-foreground/5 w-5/6" />
          <div className="h-4 bg-foreground/5 w-4/6" />
          <div className="mt-auto flex justify-end">
            <div className="h-10 w-32 bg-foreground/5 transition-colors duration-1000 group-hover:bg-brown-600/10" />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-10">
        <div className="flex items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-display text-foreground tracking-tight">
            Logos
          </h3>
          <span className="px-3 py-1 bg-brown-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-brown-700 dark:text-brown-400 border border-brown-600/20">
            Beta
          </span>
        </div>
        <p className="text-muted-foreground font-light text-xl leading-relaxed">
          Inteligência estrutural para concepção de copy e narrativas, esculpindo textos que
          convertem através de frameworks comprovados e modelagem de linguagem de alta persuasão.
        </p>
        <button
          onClick={() => window.open('https://logos.dlsbox.com', '_blank')}
          className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-brown-600 dark:group-hover:text-brown-400 transition-colors duration-700"
        >
          <span className="border-b border-foreground/20 group-hover:border-brown-600/50 pb-1">
            Acessar Plataforma
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  )
}
