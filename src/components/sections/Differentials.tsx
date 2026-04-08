import { Reveal } from '@/components/ui/reveal'

const features = [
  {
    title: 'Performance Absoluta',
    desc: 'Código minimalista. Carregamento quase instantâneo para um SEO impecável e retenção máxima.',
  },
  {
    title: 'Design Orientado',
    desc: 'Estética editorial aliada rigorosamente à conversão direta. A forma segue a função de vender.',
  },
  {
    title: 'Parceria Premium',
    desc: 'Suporte próximo, ágil e totalmente sem burocracias. Uma extensão do seu próprio time.',
  },
  {
    title: 'Stack Moderna',
    desc: 'Tecnologias de vanguarda exigidas pelo mercado de ponta, garantindo longevidade.',
  },
  {
    title: 'Estabilidade',
    desc: 'Infraestrutura blindada para suportar altos picos de acesso sem oscilações em lançamentos.',
  },
  {
    title: 'Visão Analítica',
    desc: 'Rastreamento inteligente para decisões guiadas por dados concretos e precisos.',
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-32 md:py-48 scroll-mt-20 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Reveal className="mb-32 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border pb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
              Compromisso
            </span>
            <h2 className="text-5xl md:text-7xl font-display tracking-tight">Padrão DLSBox</h2>
          </div>
          <p className="text-muted-foreground font-light text-xl max-w-md md:text-right text-balance">
            Os pilares irrenunciáveis da nossa arquitetura digital, garantindo excelência em cada
            detalhe.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 150} className="flex flex-col items-start text-left group">
              <div className="w-full h-[1px] bg-foreground/5 mb-8 group-hover:bg-brown-600/30 transition-colors duration-700" />
              <h4 className="text-2xl font-display mb-6 text-foreground tracking-tight group-hover:text-brown-600 dark:group-hover:text-brown-400 transition-colors duration-700">
                {f.title}
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed text-lg">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
