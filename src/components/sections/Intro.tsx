export function Intro() {
  return (
    <section id="sobre" className="py-24 md:py-48 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Nossa História
            </span>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-balance">
              Tecnologia com operação, não apenas código.
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 max-w-3xl">
              <p>
                Na <strong className="text-foreground font-medium">DLSBox Ltd</strong>, a tecnologia
                não começa no código. Começa no problema que precisa ser resolvido.
              </p>
              <p>
                Criamos SaaS, aplicativos, dashboards e plataformas digitais com foco em validação,
                receita, operação e crescimento. Unimos estratégia de produto, design,
                desenvolvimento, automação e infraestrutura para transformar ideias em{' '}
                <em className="text-brown-600 dark:text-brown-400 not-italic font-medium">
                  soluções digitais reais.
                </em>
              </p>
              <p>
                Desenvolvemos experiências modernas, seguras e escaláveis — desde MVPs rápidos até
                plataformas mais completas com autenticação, pagamentos, banco de dados, relatórios,
                inteligência artificial e manutenção contínua.
              </p>
              <p>
                Ajudamos a tirar soluções digitais do papel com um processo completo: definição do
                produto, prototipagem, desenvolvimento, lançamento, análise de dados e evolução
                contínua.{' '}
                <strong className="text-foreground font-medium">Da ideia à operação.</strong>
              </p>
            </div>

            <div className="p-8 md:p-10 bg-muted/30 border border-border rounded-2xl relative mt-8">
              <p className="text-xl md:text-2xl font-medium italic text-balance relative z-10">
                "O objetivo não é apenas lançar uma tela bonita, mas construir uma solução útil,
                sustentável e preparada para crescer."
              </p>
              <span className="block mt-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
                — Visão de Produto, DLSBox
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
