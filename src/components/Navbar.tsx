import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg transition-colors duration-300">
            D
          </div>
          <span className="font-display font-semibold text-lg tracking-tight hidden sm:block transition-colors duration-300">
            DLSBox
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-secondary/10 dark:bg-secondary/50 backdrop-blur-md rounded-full px-2 py-1 border border-border/50 transition-colors duration-300">
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
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button
            className="hidden sm:flex rounded-full px-6 group transition-colors duration-300"
            onClick={() => scrollTo('cta')}
          >
            Orçamento
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
