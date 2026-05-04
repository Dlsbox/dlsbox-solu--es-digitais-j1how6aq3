const steps = [
  {
    number: '01',
    title: 'Descoberta',
    description:
      'Mapeamos negócio, objetivos e contexto. Definimos escopo e stack antes de qualquer linha de código.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description:
      'Prototipamos fluxos, validamos decisões de UX e alinhamos expectativas técnicas com clareza.',
  },
  {
    number: '03',
    title: 'Construção',
    description:
      'Ciclos semanais com entregas contínuas, revisões frequentes e foco em resultado tangível.',
  },
  {
    number: '04',
    title: 'Lançamento',
    description:
      'Deploy profissional, testes de qualidade, monitoramento ativo e documentação de entrega.',
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-14 reveal-title">
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-4 block">
            Como trabalhamos
          </span>
          <h2 className="text-highlight-soft font-display text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4 leading-tight">
            Do conceito ao lançamento.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Processo estruturado para entregar resultado real, sem surpresas no meio do caminho.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-slate-200" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 relative">
            {steps.map((step) => (
              <div key={step.number} className="reveal-card flex flex-col gap-3">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="font-display text-6xl lg:text-7xl font-medium text-slate-100 leading-none select-none">
                    {step.number}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-blue-600 shrink-0 hidden lg:block" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
