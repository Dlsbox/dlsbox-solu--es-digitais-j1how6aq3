import { Reveal } from '@/components/ui/reveal'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

function Step({
  number,
  title,
  desc,
  active,
  last = false,
}: {
  number: number
  title: string
  desc: string
  active: boolean
  last?: boolean
}) {
  return (
    <div className="relative flex gap-6 pb-12 last:pb-0">
      {!last && (
        <div
          className={cn(
            'absolute left-6 top-12 bottom-0 w-px -translate-x-1/2',
            active ? 'bg-primary' : 'bg-border border-dashed border-l-2',
          )}
        />
      )}
      <div
        className={cn(
          'relative z-10 flex w-12 h-12 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
          active
            ? 'bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(59,130,246,0.3)]'
            : 'bg-card border-border text-muted-foreground',
        )}
      >
        {active ? (
          <Check className="w-6 h-6" />
        ) : (
          <span className="font-display font-semibold">{number}</span>
        )}
      </div>
      <div className="pt-2">
        <h4
          className={cn(
            'text-xl font-display font-bold mb-2 transition-colors',
            active ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {title}
        </h4>
        <p className="text-muted-foreground max-w-md leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

export function Evolution() {
  return (
    <section
      id="evolucao"
      className="py-24 bg-card/20 border-y border-border/50 scroll-mt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              A escada da <span className="text-primary">Evolução</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Acompanhamos o seu negócio desde o primeiro passo no digital até a criação de
              ecossistemas complexos. Você não precisa trocar de agência quando crescer.
            </p>
            <div className="aspect-square w-full max-w-md rounded-full bg-gradient-to-tr from-primary/20 via-brown-500/10 to-transparent blur-[100px] absolute -z-10 opacity-60 pointer-events-none" />
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-background/80 backdrop-blur-md rounded-[var(--r2)] p-8 md:p-10 border border-border/80 shadow-2xl relative">
              <Step
                number={1}
                active={true}
                title="Presença Digital"
                desc="Criação da primeira Landing Page ou Site Institucional para validar a oferta e começar a vender."
              />
              <Step
                number={2}
                active={true}
                title="Otimização e Escala"
                desc="Páginas focadas em alta conversão para tráfego pago, testes A/B e melhoria de performance."
              />
              <Step
                number={3}
                active={false}
                title="Sistemas Internos"
                desc="Desenvolvimento de painéis, CRMs ou ferramentas customizadas para gerenciar a operação em crescimento."
              />
              <Step
                number={4}
                active={false}
                last={true}
                title="Plataforma SaaS"
                desc="Transformação da sua solução em um software como serviço, criando uma nova linha de receita."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
