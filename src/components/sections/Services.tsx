import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'SaaS sob medida',
    description:
      'Plataformas digitais com login, planos, pagamentos, dashboards e área do usuário, pensadas para validar e escalar negócios online.',
    tags: ['SaaS', 'Validação', 'Escala'],
  },
  {
    id: '02',
    title: 'Aplicativos web e mobile',
    description:
      'Experiências responsivas e modernas para usuários acessarem serviços, conteúdos e ferramentas em qualquer dispositivo.',
    tags: ['Web', 'Mobile', 'UX/UI'],
  },
  {
    id: '03',
    title: 'Dashboards e sistemas internos',
    description:
      'Painéis para organizar dados, acompanhar resultados, automatizar processos e transformar informação em decisão.',
    tags: ['Sistemas Internos', 'Dados', 'Gestão'],
  },
  {
    id: '04',
    title: 'Automação e inteligência artificial',
    description:
      'Recursos inteligentes para leitura, análise, geração de conteúdo, relatórios, atendimento e produtividade.',
    tags: ['Inteligência Artificial', 'Automação', 'Produtividade'],
  },
  {
    id: '05',
    title: 'Pagamentos e assinaturas',
    description:
      'Integração com checkout, planos recorrentes, controle de acesso, webhooks e relatórios financeiros.',
    tags: ['Assinaturas', 'Checkout', 'Financeiro'],
  },
  {
    id: '06',
    title: 'Operação e evolução contínua',
    description:
      'Manutenção, melhorias, monitoramento e ajustes para que o produto continue estável depois do lançamento.',
    tags: ['Manutenção', 'Estabilidade', 'Evolução'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              O que construímos
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
              Soluções digitais <br />
              feitas para sair do papel.
            </h2>
            <p className="text-xl text-muted-foreground">
              SaaS, apps e plataformas com visão de produto, preparados para operar e crescer.
            </p>
          </div>
        </div>

        <div className="w-full border-t border-border">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-16 border-b border-border hover:bg-muted/30 transition-colors"
            >
              <div className="lg:col-span-1 text-sm text-muted-foreground font-mono">
                {service.id}
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-2xl md:text-4xl font-medium">{service.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-muted-foreground text-lg leading-relaxed text-balance">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end">
                <div className="flex flex-wrap gap-2 mb-6 lg:mb-0 lg:justify-end">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-border px-3 py-1 rounded-full uppercase tracking-wider text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden lg:block" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
