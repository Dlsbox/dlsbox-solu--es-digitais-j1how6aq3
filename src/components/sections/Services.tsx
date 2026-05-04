import { ArrowRight, Layers, Sparkles, Workflow } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { PrimaryButton, SecondaryButtonLight } from '@/components/ui/cta-button'

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
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const headingVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const headingItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const cardsVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.16, staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: 'easeOut' } },
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
            className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-blue-600"
          >
            O que construímos
          </motion.span>

          <motion.h2
            variants={headingItemVariants}
            className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Produtos digitais prontos para operar e{' '}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-amber-500 bg-clip-text text-transparent">
              crescer.
            </span>
          </motion.h2>

          <motion.p
            variants={headingItemVariants}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-600 sm:text-base"
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

                <h3 className="relative mt-6 font-display text-lg font-semibold tracking-tight text-white">
                  {solution.title}
                </h3>
                <p className="relative mt-2 text-sm leading-6 text-blue-300">
                  {solution.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          variants={headingItemVariants}
        >
          <PrimaryButton href="#projetos">
            Conhecer soluções
            <ArrowRight className="h-4 w-4" />
          </PrimaryButton>

          <SecondaryButtonLight
            href="https://wa.me/447858632888?text=Olá,%20vim%20pelo%20site%20da%20DLSBox.%20Quero%20falar%20sobre%20um%20projeto%20digital."
            external
          >
            Falar com a DLSBox
          </SecondaryButtonLight>
        </motion.div>
      </div>
    </motion.section>
  )
}
