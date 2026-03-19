import { Reveal } from '@/components/ui/reveal'
import { GlowCard } from '@/components/ui/glow-card'
import { MonitorSmartphone, LayoutTemplate, Braces } from 'lucide-react'

export function Services() {
  return (
    <section id="solucoes" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Soluções feitas para <span className="text-primary">converter</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Desde uma simples página até sistemas complexos, temos a estrutura certa para o
              momento do seu negócio.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7 h-full" delay={100}>
            <GlowCard className="h-full flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <LayoutTemplate className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Landing Pages</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Páginas de alta conversão focadas em vendas ou captação de leads. Otimizadas para
                  tráfego pago com carregamento ultrarrápido.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap mt-8">
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                  Ideal para infoprodutos
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                  Lançamentos
                </span>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium border border-border">
                  Captação
                </span>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal className="md:col-span-5 h-full" delay={200}>
            <GlowCard className="h-full flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                  <MonitorSmartphone className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">Sites para negócios</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Sua vitrine digital profissional. Design exclusivo que transmite autoridade e
                  atrai clientes qualificados no orgânico.
                </p>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal className="md:col-span-12 h-full" delay={300}>
            <GlowCard className="h-full flex flex-col md:flex-row items-center gap-8 group">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                  <Braces className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  Sistemas Personalizados & SaaS
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mb-6 leading-relaxed">
                  Estruturas complexas, dashboards, áreas de membros e plataformas completas.
                  Desenvolvemos o sistema que o seu negócio precisa para escalar sem limites.
                </p>
                <button className="text-primary font-medium inline-flex items-center hover:underline">
                  Conhecer tecnologias usadas
                </button>
              </div>
              <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-gradient-to-br from-card to-secondary rounded-xl border border-border/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full" />
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
