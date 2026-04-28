import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-end overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex flex-col xl:flex-row justify-between xl:items-end gap-12 mb-12">
          <ScrollReveal>
            <h1 className="text-[14vw] md:text-[9.5vw] leading-[0.85] tracking-tighter font-semibold uppercase text-balance max-w-6xl text-foreground mix-blend-difference drop-shadow-sm">
              Desenvolvimento
              <br />
              digital com visão
              <br />
              <span className="text-muted-foreground/80 italic font-light">de negócio.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="left">
            <div className="max-w-md text-base md:text-xl text-foreground/80 leading-relaxed md:pb-6 backdrop-blur-xl bg-white/5 border border-white/10 p-6 md:p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              <span className="relative z-10">
                A DLSBox Ltd transforma ideias, conteúdos e processos em produtos digitais operáveis
                — com tecnologia, design, pagamentos, dados e evolução contínua.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
