export function Intro() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Sobre Nós
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-balance">
              Não somos apenas uma agência. Somos seus parceiros em arquitetura digital. Construímos
              landing pages, sistemas SaaS e e-commerces que unem design excepcional a engenharia de
              precisão.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
