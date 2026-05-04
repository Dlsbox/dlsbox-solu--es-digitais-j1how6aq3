import { MessageCircle } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="reveal-card bg-[#07111F] rounded-[32px] px-8 py-20 md:px-20 md:py-28 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.18) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-6">
              Pronto para começar?
            </p>
            <h2 className="text-highlight font-display text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-6 text-balance">
              Vamos construir<br />
              <span className="italic text-blue-400">algo real.</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-sm mx-auto leading-relaxed">
              Uma conversa sem compromisso para entender seu projeto e o melhor caminho técnico.
            </p>
            <a
              href="mailto:contact@dlsbox.com"
              className="inline-flex items-center gap-2.5 bg-white text-[#07111F] font-semibold rounded-full px-8 py-4 text-base hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,255,255,0.14)]"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
