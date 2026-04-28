import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/70 backdrop-blur-2xl border-b border-white/5 py-4 shadow-2xl'
          : 'bg-gradient-to-b from-background/80 to-transparent py-6',
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tighter uppercase text-white flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
            <div className="w-3 h-3 bg-white rounded-sm" />
          </div>
          <span>
            DLS<span className="text-blue-500 font-light">BOX</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#problema"
            className="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors"
          >
            Problema
          </a>
          <a
            href="#solucao"
            className="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors"
          >
            Solução
          </a>
          <a
            href="#produtos"
            className="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors"
          >
            Produtos
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium tracking-wide text-white/60 hover:text-white transition-colors"
          >
            Planos
          </a>
        </nav>

        <Button
          className="rounded-full h-10 px-6 bg-white text-black hover:bg-white/90 font-medium text-sm transition-transform hover:scale-105"
          asChild
        >
          <a href="#contato">Falar com Especialista</a>
        </Button>
      </div>
    </header>
  )
}
