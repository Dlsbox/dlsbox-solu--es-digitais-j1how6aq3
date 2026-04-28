import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
    title: 'Dashboards e sistemas',
    description:
      'Painéis para organizar dados, acompanhar resultados, automatizar processos e transformar informação em decisão.',
    tags: ['Sistemas', 'Dados', 'Gestão'],
  },
  {
    id: '04',
    title: 'IA & Automação',
    description:
      'Recursos inteligentes para leitura, análise, geração de conteúdo, relatórios, atendimento e produtividade.',
    tags: ['IA', 'Automação', 'Produtividade'],
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
    title: 'Operação e evolução',
    description:
      'Manutenção, melhorias, monitoramento e ajustes para que o produto continue estável depois do lançamento.',
    tags: ['Manutenção', 'Estabilidade', 'Evolução'],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-[1600px] mx-auto w-full">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-24">
            <div className="lg:col-span-4">
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground/60 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                O que construímos
              </span>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
                Soluções digitais <br />
                feitas para sair do papel.
              </h2>
              <p className="text-2xl text-muted-foreground font-light max-w-2xl">
                SaaS, apps e plataformas com visão de produto, preparados para operar e crescer.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="w-full relative">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {services.map((service, index) => (
                  <CarouselItem key={service.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                    <div className="group h-full flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                      <div className="text-sm text-foreground/40 font-mono mb-8 border border-white/10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5">
                        {service.id}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-lg leading-relaxed flex-1 mb-8">
                        {service.description}
                      </p>

                      <div className="flex flex-col gap-6 mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium border border-white/10 bg-white/5 px-3 py-1.5 rounded-full uppercase tracking-widest text-foreground/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-end w-full">
                          <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-4 mt-12 pr-4">
                <CarouselPrevious className="relative inset-auto translate-y-0 h-14 w-14 bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md" />
                <CarouselNext className="relative inset-auto translate-y-0 h-14 w-14 bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-md" />
              </div>
            </Carousel>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
