import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] border-b',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-border py-4'
          : 'bg-transparent border-transparent py-6',
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tighter uppercase z-50 relative"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          DLSBox
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition-colors duration-300">
            Serviços
          </a>
          <a href="#projetos" className="hover:text-foreground transition-colors duration-300">
            Projetos
          </a>
          <a href="#contato" className="hover:text-foreground transition-colors duration-300">
            Contato
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-background z-40 flex flex-col justify-center px-6 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none -translate-y-4',
        )}
      >
        <nav className="flex flex-col gap-8 text-2xl font-medium tracking-widest uppercase">
          <a
            href="#servicos"
            className="hover:text-muted-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#projetos"
            className="hover:text-muted-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="hover:text-muted-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}
