import { Code2, Database, CreditCard, Rocket, Brain, Smartphone, Shield, Zap } from 'lucide-react'

const solutions = [
  {
    icon: Code2,
    title: 'Frontend Premium',
    description: 'Interfaces modernas, rápidas e responsivas com React, TypeScript e Tailwind CSS.',
    color: 'text-blue-600',
  },
  {
    icon: Database,
    title: 'Backend Escalável',
    description: 'APIs robustas, bancos de dados otimizados e arquitetura serverless com Node.js.',
    color: 'text-amber-600',
  },
  {
    icon: CreditCard,
    title: 'Pagamentos Integrados',
    description: 'Integração completa com Stripe, assinaturas recorrentes e gestão financeira.',
    color: 'text-green-600',
  },
  {
    icon: Brain,
    title: 'IA e Automação',
    description: 'Integração com OpenAI, chatbots inteligentes e automação de processos.',
    color: 'text-purple-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Experiências nativas para web e mobile com Progressive Web Apps.',
    color: 'text-pink-600',
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Autenticação robusta, criptografia e compliance com LGPD e GDPR.',
    color: 'text-red-600',
  },
  {
    icon: Rocket,
    title: 'Deploy Profissional',
    description: 'CI/CD automatizado, monitoramento e escalabilidade na nuvem.',
    color: 'text-indigo-600',
  },
  {
    icon: Zap,
    title: 'Performance Máxima',
    description: 'Otimização de Core Web Vitals, CDN global e carregamento instantâneo.',
    color: 'text-orange-600',
  },
]

export function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600 gsap-title">
            Soluções Completas
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl gsap-title">
            Do conceito à produção
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 gsap-title">
            Desenvolvemos produtos digitais completos, desde a ideia até o lançamento e operação.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <div
                key={solution.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl gsap-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent className={`h-8 w-8 ${solution.color} mb-4`} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}