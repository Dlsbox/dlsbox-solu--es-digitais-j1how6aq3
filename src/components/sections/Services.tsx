import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Conversão',
    description:
      'Landing pages de alta performance, projetadas meticulosamente para tráfego pago. Estrutura persuasiva e velocidade extrema para transformar atenção em resultados palpáveis.',
    tags: ['Landing Pages', 'Copywriting', 'Otimização'],
  },
  {
    id: '02',
    title: 'Sistemas',
    description:
      'Infraestrutura robusta e plataformas SaaS sob medida. Desenvolvemos soluções escaláveis para automatizar, gerenciar e otimizar as operações do seu negócio.',
    tags: ['SaaS', 'Dashboards', 'Web Apps'],
  },
  {
    id: '03',
    title: 'Autoridade',
    description:
      'Sites institucionais que transmitem confiança e excelência. Uma vitrine digital atemporal, com design premium e arquitetura da informação voltada para clientes qualificados.',
    tags: ['Institucional', 'Branding', 'SEO'],
  },
  {
    id: '04',
    title: 'E-commerce',
    description:
      'Lojas virtuais elegantes com foco absoluto em conversão. Jornadas de compra sem fricção, checkout otimizado e integração perfeita com seus sistemas de gestão.',
    tags: ['Lojas Virtuais', 'Shopify', 'Custom'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Nossa Expertise
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Módulos Estruturais</h2>
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
