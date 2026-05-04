import { useEffect, useState, type ComponentType } from 'react'
import { motion } from 'framer-motion'
import {
  Atom,
  Code2,
  Braces,
  Paintbrush,
  Zap,
  Database,
  Flame,
  CreditCard,
  Cloud,
  Github,
  BrainCircuit,
  Server,
  Globe,
  Table2,
  FileCode2,
  Palette,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type TechIconItem = {
  id: string
  name: string
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
  x: number
  y: number
  size: number
  rotate: number
  tone: 'blue' | 'copper' | 'white'
  hideOnMobile?: boolean
}

const techIcons: TechIconItem[] = [
  { id: 'react-1', name: 'React', icon: Atom, x: 8, y: 8, size: 72, rotate: -12, tone: 'blue' },
  {
    id: 'typescript-1',
    name: 'TypeScript',
    icon: Code2,
    x: 86,
    y: 12,
    size: 64,
    rotate: 10,
    tone: 'blue',
  },
  {
    id: 'javascript-1',
    name: 'JavaScript',
    icon: Braces,
    x: 48,
    y: 17,
    size: 58,
    rotate: -7,
    tone: 'copper',
    hideOnMobile: true,
  },
  {
    id: 'tailwind-1',
    name: 'Tailwind CSS',
    icon: Paintbrush,
    x: 15,
    y: 24,
    size: 78,
    rotate: 8,
    tone: 'white',
  },
  { id: 'vite-1', name: 'Vite', icon: Zap, x: 66, y: 25, size: 58, rotate: 11, tone: 'blue' },
  {
    id: 'supabase-1',
    name: 'Supabase',
    icon: Database,
    x: 76,
    y: 32,
    size: 70,
    rotate: -8,
    tone: 'copper',
  },
  {
    id: 'firebase-1',
    name: 'Firebase',
    icon: Flame,
    x: 30,
    y: 39,
    size: 60,
    rotate: -14,
    tone: 'copper',
    hideOnMobile: true,
  },
  {
    id: 'stripe-1',
    name: 'Stripe',
    icon: CreditCard,
    x: 6,
    y: 46,
    size: 66,
    rotate: 14,
    tone: 'blue',
  },
  { id: 'vercel-1', name: 'Vercel', icon: Cloud, x: 88, y: 50, size: 74, rotate: -10, tone: 'white' },
  {
    id: 'github-1',
    name: 'GitHub',
    icon: Github,
    x: 18,
    y: 62,
    size: 70,
    rotate: -6,
    tone: 'copper',
  },
  {
    id: 'openai-1',
    name: 'OpenAI',
    icon: BrainCircuit,
    x: 78,
    y: 68,
    size: 78,
    rotate: 9,
    tone: 'blue',
  },
  { id: 'node-1', name: 'Node.js', icon: Server, x: 10, y: 82, size: 68, rotate: 7, tone: 'white' },
  {
    id: 'next-1',
    name: 'Next.js',
    icon: Globe,
    x: 52,
    y: 83,
    size: 62,
    rotate: -9,
    tone: 'blue',
    hideOnMobile: true,
  },
  {
    id: 'postgres-1',
    name: 'PostgreSQL',
    icon: Table2,
    x: 84,
    y: 88,
    size: 72,
    rotate: -12,
    tone: 'copper',
  },
  {
    id: 'html-1',
    name: 'HTML5',
    icon: FileCode2,
    x: 35,
    y: 94,
    size: 58,
    rotate: 12,
    tone: 'white',
    hideOnMobile: true,
  },
  { id: 'css-1', name: 'CSS3', icon: Palette, x: 68, y: 96, size: 60, rotate: -5, tone: 'copper' },
]

const getToneClass = (tone: TechIconItem['tone']) => {
  if (tone === 'blue') return 'text-blue-600/45'
  if (tone === 'copper') return 'text-amber-800/40'
  return 'text-slate-700/30'
}

export function GlobalTechBackground({ className }: { className?: string }) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    active: false,
  })
  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
  })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
          window.innerHeight,
        ),
      })
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: event.clientX,
        y: event.clientY + window.scrollY,
        active: true,
      })
    }

    const handleMouseLeave = () => {
      setMouse((prev) => ({ ...prev, active: false }))
    }

    updateDimensions()
    window.setTimeout(updateDimensions, 250)
    window.setTimeout(updateDimensions, 1000)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', updateDimensions)
    window.addEventListener('load', updateDimensions)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('load', updateDimensions)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute left-0 top-0 z-0 w-full overflow-hidden', className)}
      style={{ height: dimensions.height, perspective: 1200 }}
    >
      {techIcons.map((tech) => {
        const Icon = tech.icon
        const iconX = (tech.x / 100) * dimensions.width
        const iconY = (tech.y / 100) * dimensions.height
        const dx = mouse.x - iconX
        const dy = mouse.y - iconY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const influence = Math.max(0, 1 - distance / 520)
        const opacity = mouse.active ? 0.12 + influence * 0.42 : 0.11
        const scale = 0.96 + influence * 0.16
        const tiltX = influence * Math.max(-12, Math.min(12, dy / 28))
        const tiltY = influence * Math.max(-12, Math.min(12, -dx / 28))

        return (
          <motion.div
            key={tech.id}
            className={cn(
              'absolute items-center justify-center rounded-3xl border border-white/30 bg-white/[0.18] backdrop-blur-[3px]',
              'flex md:flex',
              tech.hideOnMobile && 'hidden md:flex',
              getToneClass(tech.tone),
            )}
            style={{
              left: iconX,
              top: iconY,
              width: tech.size,
              height: tech.size,
              transformStyle: 'preserve-3d',
            }}
            animate={{
              opacity,
              scale,
              x: -tech.size / 2,
              y: -tech.size / 2 - influence * 12,
              rotate: tech.rotate + influence * 3,
              rotateX: tiltX,
              rotateY: tiltY,
              boxShadow: [
                `inset 0 1px 0 rgba(255,255,255,${0.38 + influence * 0.2})`,
                `inset 0 -14px 26px rgba(15,20,27,${0.05 + influence * 0.08})`,
                `0 ${18 + influence * 20}px ${48 + influence * 34}px rgba(15,20,27,${
                  0.14 + influence * 0.1
                })`,
              ].join(', '),
              filter: `drop-shadow(0 0 ${16 + influence * 38}px rgba(37,99,235,${
                0.08 + influence * 0.18
              }))`,
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <span
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/45 via-white/10 to-slate-950/10"
              style={{ transform: 'translateZ(1px)' }}
            />
            <span
              className="absolute inset-[1px] rounded-[1.4rem] border border-white/20"
              style={{ transform: 'translateZ(3px)' }}
            />
            <Icon
              className="relative h-1/2 w-1/2 drop-shadow-[0_10px_18px_rgba(15,20,27,0.22)]"
              aria-hidden="true"
              style={{ transform: `translateZ(${12 + influence * 12}px)` }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
