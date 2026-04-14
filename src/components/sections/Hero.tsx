export function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-16 px-6 md:px-12 flex flex-col justify-end overflow-hidden animate-in fade-in duration-1000">
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-12">
          <h1 className="text-[12vw] md:text-[8.5vw] leading-[0.9] tracking-tighter font-medium uppercase text-balance max-w-5xl">
            Estratégias Digitais
            <br />
            <span className="text-muted-foreground">de Alta</span>
            <br />
            Performance.
          </h1>
          <div className="max-w-xs text-sm md:text-base text-muted-foreground leading-relaxed md:pb-4">
            A DLSBox constrói ecossistemas digitais robustos, do conceito ao código, focados em
            conversão, autoridade e escalabilidade.
          </div>
        </div>
      </div>
    </section>
  )
}
