import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import {
  Atom,
  Code2,
  Paintbrush,
  Database,
  CreditCard,
  Cloud,
  BrainCircuit,
  Server,
  Table2,
  type LucideIcon,
} from 'lucide-react'

import 'swiper/css'
import 'swiper/css/free-mode'

type Technology = {
  name: string
  description: string
  icon: LucideIcon
}

const technologies: Technology[] = [
  {
    name: 'React',
    description: 'Interfaces modernas e componentizadas',
    icon: Atom,
  },
  {
    name: 'TypeScript',
    description: 'Código seguro, escalável e profissional',
    icon: Code2,
  },
  {
    name: 'Tailwind CSS',
    description: 'Design responsivo com alta produtividade',
    icon: Paintbrush,
  },
  {
    name: 'Supabase',
    description: 'Backend ágil para dados e autenticação',
    icon: Database,
  },
  {
    name: 'PostgreSQL',
    description: 'Dados relacionais robustos e confiáveis',
    icon: Table2,
  },
  {
    name: 'Stripe',
    description: 'Pagamentos integrados com segurança',
    icon: CreditCard,
  },
  {
    name: 'Vercel',
    description: 'Deploy rápido com performance global',
    icon: Cloud,
  },
  {
    name: 'OpenAI',
    description: 'IA aplicada a produtos e automações',
    icon: BrainCircuit,
  },
  {
    name: 'Node.js',
    description: 'APIs e serviços escaláveis',
    icon: Server,
  },
]

export function TechCarousel() {
  return (
    <section id="tecnologias" className="py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 text-center mb-10 reveal-title">
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-3 block">
          Stack
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
          Stack moderna para produtos reais.
        </h2>
      </div>

      {/* Carousel with fade edges */}
      <div
        className="relative"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={12}
          loop={true}
          speed={5000}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false }}
        >
          {technologies.map((tech) => {
            const Icon = tech.icon

            return (
              <SwiperSlide key={tech.name} className="!w-auto">
                <div className="group flex h-24 w-56 items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/85 backdrop-blur-sm px-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-inner shadow-white group-hover:bg-amber-50 group-hover:text-amber-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h3 className="text-sm font-semibold text-slate-900">{tech.name}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-500">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
