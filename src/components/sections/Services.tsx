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
      className="relative isolate overflow-hidden py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span
            variants={headingItemVariants}
            className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-600"
          >
            O que construímos
          </motion.span>

          <motion.h2
            variants={headingItemVariants}
            className="mt-6 font-display text-4xl font-extrabold tracking-tight text-[#07111f] sm:text-5xl lg:text-6xl"
          >
            Produtos digitais prontos para operar e{' '}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500 bg-clip-text text-transparent">
              crescer.
            </span>
          </motion.h2>

          <motion.p
            variants={headingItemVariants}
            className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-600 sm:text-lg"
          >
            Apps, SaaS e plataformas com design, automação e visão de negócio.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
          variants={cardsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {solutions.map((solution) => {
            const Icon = solution.icon

            return (
              <motion.article
                key={solution.title}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-[#07111f] p-6 shadow-[0_20px_60px_rgba(7,17,31,0.22),0_4px_16px_rgba(7,17,31,0.12)] transition-all duration-300 hover:border-sky-300/50 hover:shadow-[0_32px_80px_rgba(7,17,31,0.28),0_0_40px_rgba(14,165,233,0.16)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent opacity-90" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.16] via-white/[0.03] to-amber-500/[0.08] opacity-90" />
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-sky-400/22 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-amber-500/16 blur-3xl opacity-70" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/18 text-sky-100 ring-1 ring-sky-200/45 shadow-[0_0_34px_rgba(56,189,248,0.24)] transition-all duration-300 group-hover:bg-sky-400/24 group-hover:text-white group-hover:shadow-[0_0_40px_rgba(56,189,248,0.36)]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative mt-7 text-2xl font-bold tracking-tight text-white">
                  {solution.title}
                </h3>
                <p className="relative mt-3 text-[15px] font-semibold leading-7 text-slate-100">
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
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/40 bg-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_16px_42px_rgba(14,165,233,0.28)] backdrop-blur-md transition-colors duration-200 hover:border-sky-100/70 hover:bg-sky-400"
          >
            Conhecer soluções
            <ArrowRight className="h-4 w-4" />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => scrollToSection('#contato')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full border border-slate-700/20 bg-slate-900/[0.06] px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition-colors duration-200 hover:border-blue-400/30 hover:bg-slate-900/[0.10]"
          >
            Falar com a DLSBox
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
