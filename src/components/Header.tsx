import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Portfólio' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 transition-colors duration-300 border-b',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md border-border'
            : 'bg-background/80 backdrop-blur-md border-transparent',
        )}
      >
        <a href="#" className="flex items-center gap-2.5 text-foreground no-underline">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-600 to-brown-600 flex items-center justify-center font-bold text-xs text-white">
            DLS
          </div>
          <span className="font-bold text-lg tracking-tight">DLSBox</span>
        </a>

        <nav className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3.5 py-2 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex bg-gradient-to-br from-blue-600 to-blue-700 text-white text-sm font-medium px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Fale conosco
        </a>

        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border flex flex-col px-6 py-4 gap-0 z-40 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-muted-foreground py-3.5 border-b border-border/50 last:border-none"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
