import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-background/90 backdrop-blur-md border-border py-4' : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center cursor-pointer transition-transform hover:scale-105 duration-300"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Logo className="h-10 sm:h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-muted/50 rounded-full px-2 py-1.5 border border-border/50">
          {['Soluções', 'Evolução', 'Produtos', 'Planos'].map((item) => (
            <button
              key={item}
              onClick={() =>
                scrollTo(
                  item
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, ''),
                )
              }
              className="px-4 py-1.5 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button
            className="hidden sm:flex rounded-full px-6 shadow-sm"
            onClick={() => scrollTo('cta')}
          >
            Orçamento <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
