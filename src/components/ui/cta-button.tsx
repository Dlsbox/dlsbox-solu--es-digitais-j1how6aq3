import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AnchorProps {
  href: string
  external?: boolean
  children: ReactNode
  className?: string
  onClick?: never
  type?: never
  disabled?: never
}

interface ButtonProps {
  href?: never
  external?: never
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

type CtaProps = AnchorProps | ButtonProps

const PRIMARY =
  'inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-sm:h-10 max-sm:px-5 max-sm:text-[13px]'

const SECONDARY_DARK =
  'inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/15 active:translate-y-0 max-sm:h-10 max-sm:px-5 max-sm:text-[13px]'

const SECONDARY_LIGHT =
  'inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md active:translate-y-0 max-sm:h-10 max-sm:px-5 max-sm:text-[13px]'

const TEXT_LINK =
  'inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:gap-3'

function Wrapper({ href, external, children, className }: { href: string; external?: boolean; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

export function PrimaryButton({ href, external, children, className, onClick, type = 'button', disabled }: CtaProps) {
  const cls = cn(PRIMARY, className)
  if (href) return <Wrapper href={href} external={external} className={cls}>{children}</Wrapper>
  return <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
}

export function SecondaryButtonDark({ href, external, children, className, onClick, type = 'button' }: CtaProps) {
  const cls = cn(SECONDARY_DARK, className)
  if (href) return <Wrapper href={href} external={external} className={cls}>{children}</Wrapper>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}

export function SecondaryButtonLight({ href, external, children, className, onClick, type = 'button' }: CtaProps) {
  const cls = cn(SECONDARY_LIGHT, className)
  if (href) return <Wrapper href={href} external={external} className={cls}>{children}</Wrapper>
  return <button type={type} onClick={onClick} className={cls}>{children}</button>
}

export function TextLinkCTA({ href, external, children, className, onClick }: CtaProps) {
  const cls = cn(TEXT_LINK, className)
  if (href) return <Wrapper href={href} external={external} className={cls}>{children}</Wrapper>
  return <button type="button" onClick={onClick} className={cls}>{children}</button>
}
