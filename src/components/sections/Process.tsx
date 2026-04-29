import { ScrollReveal } from '@/components/ui/scroll-reveal'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos sua ideia, público, objetivo e modelo de negócio.',
  },
  {
    num: '02',
    title: 'Estratégia UX/UI',
    desc: 'Organizamos a experiência, arquitetura da informação e fluxo.',
  },
  {
    num: '03',
    title: 'Design Premium',
    desc: 'Criamos interfaces modernas, responsivas e orientadas à conversão.',
  },
  {
    num: '04',
    title: 'Desenvolvimento',
    desc: 'Construímos com código limpo, integrações, banco de dados e performance.',
  },
  {
    num: '05',
    title: 'Lançamento',
    desc: 'Preparamos publicação, domínio, deploy, analytics e ajustes finais.',
  },
  {
    num: '06',
    title: 'Evolução',
    desc: 'Acompanhamos melhorias, novas funcionalidades e crescimento.',
  },
]

export function Process() {
  return (
    <section id="processo" className="py-24 bg-white relative border-y border-gray-100">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-gray uppercase block mb-4">
              Metodologia
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-6">
              Do conceito ao produto pronto para crescer.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative pt-6 pb-6">
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-0.5 bg-gray-100" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <ScrollReveal
                key={i}
                delay={i * 100}
                direction="up"
                className="flex flex-col relative group"
              >
                <div className="lg:hidden absolute left-6 top-16 bottom-[-2rem] w-px bg-gray-100" />

                <div className="flex items-center lg:justify-center mb-6 relative">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 group-hover:border-brand-blue text-brand-text group-hover:text-brand-blue flex items-center justify-center font-bold text-sm shadow-sm z-10 transition-colors">
                    {step.num}
                  </div>
                </div>

                <div className="p-4 rounded-2xl lg:text-center ml-16 lg:ml-0 bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:shadow-lg group-hover:border-brand-blue/20 transition-all duration-300">
                  <h3 className="font-bold text-brand-text mb-2 text-sm">{step.title}</h3>
                  <p className="text-[13px] text-brand-gray leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
