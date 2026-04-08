import { Reveal } from '@/components/ui/reveal'

export function Contact() {
  return (
    <section
      id="contato"
      className="py-32 md:py-48 scroll-mt-20 relative z-10 border-t border-foreground/[0.04] bg-background/50 backdrop-blur-2xl"
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8">
        <Reveal className="text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/50 mb-6 block">
            Contato
          </span>
          <h2 className="text-5xl md:text-6xl font-display mb-8">Inicie seu Projeto</h2>
          <p className="text-muted-foreground font-light text-xl mb-10 max-w-2xl mx-auto">
            Detalhe a sua necessidade e desenharemos a melhor estrutura.
          </p>
          <a
            href="mailto:suporte@dlsbox.com"
            className="inline-block text-sm uppercase tracking-[0.2em] font-medium text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/20 pb-2 hover:border-foreground/70"
          >
            suporte@dlsbox.com
          </a>
        </Reveal>

        <Reveal delay={150}>
          <form
            className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.06)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-12">
              <div className="space-y-4">
                <label className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/60">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors text-foreground font-light text-lg placeholder:text-muted-foreground/40"
                  placeholder="Como devemos chamá-lo?"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/60">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors text-foreground font-light text-lg placeholder:text-muted-foreground/40"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-4 md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.2em] font-medium text-foreground/60">
                  Sua Necessidade
                </label>
                <textarea
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors text-foreground font-light text-lg placeholder:text-muted-foreground/40 min-h-[120px] resize-none"
                  placeholder="Descreva brevemente o escopo do projeto..."
                />
              </div>
            </div>
            <div className="flex justify-end pt-8">
              <button className="h-[60px] w-full sm:w-auto px-12 rounded-full bg-foreground text-background text-xs tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:bg-foreground/90 hover:scale-[1.02] shadow-xl hover:-translate-y-1">
                Enviar Solicitação
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
