import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

type LandingDepthBackgroundProps = {
  className?: string
}

export function LandingDepthBackground({ className }: LandingDepthBackgroundProps) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 220])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none fixed inset-0 -z-10 overflow-hidden', className)}
    >
      {/* Base — off-white levemente mais quente para sensação de profundidade */}
      <div className="absolute inset-0 bg-[#EEECEA]" />

      {/* Grande blob azul — topo esquerda, ancora o fundo */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: y1 }}
        className="absolute -top-60 -left-48
                   h-[480px] w-[480px] md:h-[780px] md:w-[780px]
                   rounded-full bg-blue-600/[0.22]
                   blur-[120px] md:blur-[160px]"
      />

      {/* Blob cobre — centro direita, contraste quente */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: y2 }}
        className="absolute top-[22%] -right-56
                   h-[420px] w-[420px] md:h-[700px] md:w-[700px]
                   rounded-full bg-amber-700/[0.18]
                   blur-[100px] md:blur-[140px]"
      />

      {/* Blob navy — centro fundo, cria sensação de abismo */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: y3 }}
        className="absolute top-[55%] left-[30%]
                   h-[360px] w-[360px] md:h-[620px] md:w-[620px]
                   rounded-full bg-slate-900/[0.12]
                   blur-[120px] md:blur-[160px]"
      />

      {/* Blob azul secundário — topo direita, balanço */}
      <motion.div
        style={shouldReduceMotion ? {} : { y: y4 }}
        className="absolute -top-32 right-[10%]
                   h-[280px] w-[280px] md:h-[480px] md:w-[480px]
                   rounded-full bg-blue-400/[0.14]
                   blur-[90px] md:blur-[130px]"
      />

      {/* Grade premium — mais visível que a versão anterior */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,20,27,0.055) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(15,20,27,0.055) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      />

      {/* Vinheta nos cantos — reforça profundidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(7,17,31,0.08) 100%)',
        }}
      />

      {/* Overlay final — clareia o centro, escurece bordas sutilmente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.45), transparent 70%)',
        }}
      />
    </div>
  )
}
