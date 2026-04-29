import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { ArrowRight, BarChart, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Products() {
  return (
    <section id="produtos" className="py-24 bg-brand-bg relative">
      <div className="container max-w-[1200px] mx-auto px-6 space-y-32">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-gray uppercase block mb-4">
              Nossos Produtos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
              Soluções que geram resultado.
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 w-full order-2 lg:order-1 relative">
            <ScrollReveal direction="right">
              <div className="absolute inset-0 bg-brand-blue/10 rounded-[2rem] transform -translate-x-4 translate-y-4" />
              <div className="glass-card rounded-[2rem] p-4 relative z-10 bg-white">
                <img
                  src="https://img.usecurling.com/p/800/600?q=dashboard%20analytics&color=blue"
                  alt="DLS Logos Dashboard"
                  className="rounded-xl w-full object-cover shadow-sm border border-gray-100 aspect-[4/3] md:aspect-auto"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 space-y-6 order-1 lg:order-2">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-text">DLS Logos</h3>
              </div>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                Plataforma de monitoramento de deals e ativos com inteligência e dados em tempo real
                para decisões mais seguras e lucrativas.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Monitoramento inteligente',
                  'Alertas e oportunidades',
                  'Análises e relatórios avançados',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-text font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Button
                className="rounded-full px-8 h-12 bg-brand-text hover:bg-brand-blue text-white"
                asChild
              >
                <a href="https://logos.dlsbox.com" target="_blank" rel="noreferrer">
                  Acessar o Logos <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </ScrollReveal>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="flex-1 space-y-6">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-copper/10 rounded-xl text-brand-copper">
                  <BarChart className="w-6 h-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-text">DLS Tracker</h3>
              </div>
              <p className="text-lg text-brand-gray leading-relaxed mb-6">
                Gestão financeira que descomplica. Tenha total controle do seu financeiro pessoal ou
                empresarial com um painel claro e direto.
              </p>
              <ul className="space-y-4 mb-8">
                {['Receitas e despesas', 'Metas e orçamentos', 'Relatórios e indicadores'].map(
                  (item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" /> {item}
                    </li>
                  ),
                )}
              </ul>
              <Button
                className="rounded-full px-8 h-12 bg-brand-text hover:bg-brand-copper text-white"
                asChild
              >
                <a href="https://tracker.dlsbox.com" target="_blank" rel="noreferrer">
                  Acessar o Tracker <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </ScrollReveal>
          </div>

          <div className="flex-1 w-full relative">
            <ScrollReveal direction="left">
              <div className="absolute inset-0 bg-brand-copper/10 rounded-[2rem] transform translate-x-4 translate-y-4" />
              <div className="glass-card rounded-[2rem] p-4 relative z-10 bg-white">
                <img
                  src="https://img.usecurling.com/p/800/600?q=financial%20app&color=orange"
                  alt="DLS Tracker Dashboard"
                  className="rounded-xl w-full object-cover shadow-sm border border-gray-100 aspect-[4/3] md:aspect-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
