export function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-end overflow-hidden animate-in fade-in duration-1000">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
          <h1 className="text-[10vw] md:text-[7.5vw] leading-[0.9] tracking-tighter font-medium uppercase text-balance max-w-5xl">
            Desenvolvimento
            <br />
            digital com visão
            <br />
            <span className="text-muted-foreground">de negócio.</span>
          </h1>
          <div className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed md:pb-4">
            A DLSBox Ltd transforma ideias, conteúdos e processos em produtos digitais operáveis —
            com tecnologia, design, pagamentos, dados e evolução contínua.
          </div>
        </div>
      </div>
    </section>
  )
}
