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
      className="relative isolate overflow-hidden bg-[#07111f] py-24 text-white shadow-[0_34px_90px_rgba(7,17,31,0.24)]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(37,99,235,0.34),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(217,119,6,0.22),transparent_26%),linear-gradient(180deg,#07111f_0%,#0b1727_54%,#07111f_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-amber-500/55 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div className="mx-auto max-w-3xl text-center" variants={headingVariants}>
          <motion.span
            variants={headingItemVariants}
            className="inline-flex items-center rounded-full border border-sky-300/50 bg-sky-400/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-100 shadow-[0_0_32px_rgba(56,189,248,0.22)] backdrop-blur-md"
          >
            O que construímos
          </motion.span>

          <motion.h2
            variants={headingItemVariants}
            className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_16px_40px_rgba(0,0,0,0.42)] sm:text-5xl lg:text-6xl"
          >
            Produtos digitais prontos para operar e{' '}
            <span className="bg-gradient-to-r from-sky-300 via-white to-amber-300 bg-clip-text text-transparent">
              crescer.
            </span>
          </motion.h2>

          <motion.p
            variants={headingItemVariants}
            className="mx-auto mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-100 drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:text-lg"
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
                className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/18 bg-white/[0.075] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-all duration-300 hover:border-sky-300/65 hover:bg-white/[0.105] hover:shadow-[0_28px_80px_rgba(14,165,233,0.22)]"
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
            className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/[0.08] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/10 backdrop-blur-md transition-colors duration-200 hover:border-amber-200/45 hover:bg-white/[0.13]"
          >
            Falar com a DLSBox
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}
