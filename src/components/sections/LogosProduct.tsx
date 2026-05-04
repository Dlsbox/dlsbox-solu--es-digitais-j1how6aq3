import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function LogosProduct() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group reveal-card">

      <div className="flex-1 w-full relative">
        <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
        <div className="absolute inset-0 rounded-2xl translate-y-4 scale-[0.97] bg-slate-900/10 blur-xl -z-10 transition-all duration-700 group-hover:translate-y-6 group-hover:blur-2xl" />

        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)] group-hover:shadow-[0_32px_80px_rgba(15,23,42,0.16)] group-hover:border-blue-200/60 transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-amber-50/20 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent z-10" />
          <motion.img
            src="/logos.png"
            alt="DLSLogos — antes e depois"
            className="w-full h-auto object-contain"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </div>

        <div className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-semibold text-slate-700">Produto ativo</span>
        </div>
      </div>

      <div className="flex-1 space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            DLSLogos
          </h3>
          <span className="px-3 py-1 bg-blue-600/10 text-[10px] uppercase tracking-[0.22em] font-bold text-blue-600 border border-blue-600/20 rounded-full">
            Produto Live
          </span>
        </div>
        <p className="text-sm leading-7 text-blue-600 sm:text-base max-w-lg">
          Uma solução inteligente que transforma documentos em audiobooks profissionais, realizando
          a detecção e inserção automática de referências bíblicas para um estudo mais rico.
        </p>
        <a
          href="https://logos.dlsbox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-900 transition-all duration-300 hover:gap-3 hover:text-blue-600"
        >
          Acessar DLSLogos
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

    </div>
  )
}
