import { ArrowRight, Layers, Sparkles, Workflow } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

const solutions = [
  {
    icon: Layers,
    title: 'SaaS & Apps',
    description: 'Plataformas digitais com login, dashboard, pagamentos e integrações.',
  },
  {
    icon: Sparkles,
    title: 'Produto & UX',
    description: 'Experiências simples, modernas e pensadas para o usuário final.',
  },
  {
    icon: Workflow,
    title: 'Automação & Dados',
    description: 'Processos inteligentes, relatórios e sistemas conectados.',
  },
]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      when: 'beforeChildren',
    },
  },
}

const headingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const headingItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const cardsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.12,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const scrollToSection = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Services() {
  return (
    <motion.section
      id="servicos"
      className="relative overflow-hidden py-20 text-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div className="mx-auto max-w-3xl text-center" variants={headingVariants}>
          <motion.span
            variants={headingItemVariants}
            className="inline-flex items-center rounded-full border border-blue-300/35 bg-slate-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 shadow-lg shadow-black/20 backdrop-blur-md"
          >
            O que construímos
          </motion.span>

          <motion.h2
            variants={headingItemVariants}
            className="mt-6 font-display text-3xl font-bold tracking-tight text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl"
          >
            Produtos digitais prontos para operar e crescer.
          </motion.h2>

          <motion.p
            variants={headingItemVariants}
            className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-slate-200 drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] sm:text-lg"
          >
            Apps, SaaS e plataformas com design, automação e visão de negócio.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={cardsVariants}
        >
          {solutions.map((solution) => {
            const Icon = solution.icon

            return (
              <motion.article
                key={solution.title}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-white/15 bg-slate-950/42 p-6 shadow-2xl shadow-black/25 backdrop-blur-md transition-colors duration-300 hover:border-blue-300/55 hover:bg-slate-950/55 hover:shadow-blue-500/15"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent opacity-80" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-70" />
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-blue-400/12 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-300/35 shadow-lg shadow-blue-950/30 transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_28px_rgba(59,130,246,0.35)]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-7 text-xl font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="relative mt-3 text-sm font-medium leading-6 text-slate-200">
                  {solution.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          variants={headingItemVariants}
        >
          <motion.button
            type="button"
            onClick={() => scrollToSection('#projetos')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/15 px-5 py-2.5 text-sm font-semibold text-blue-100 shadow-lg shadow-blue-500/10 backdrop-blur-md transition-colors duration-200 hover:border-blue-300/40 hover:bg-blue-500/20"
          >
            Conhecer soluções
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => scrollToSection('#contato')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors duration-200 hover:border-blue-300/30 hover:bg-white/[0.06]"
          >
            Falar com a DLSBox
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
