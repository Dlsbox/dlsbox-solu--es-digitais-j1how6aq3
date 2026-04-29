import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-4'
          : 'bg-transparent py-6',
      )}
    >
      <div className="container max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 cursor-pointer group"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('hero')
          }}
        >
          <div className="w-8 h-8 rounded bg-brand-deepBlue flex items-center justify-center font-bold text-xs text-white group-hover:bg-brand-blue transition-colors">
            DLS
          </div>
          <span className="font-bold text-xl tracking-tight text-brand-text">DLSBox</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Soluções', 'Produtos', 'Processo', 'Planos', 'Contato'].map((item) => (
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
              className="text-sm font-medium text-brand-gray hover:text-brand-blue transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="hidden sm:flex rounded-full px-6 bg-brand-blue hover:bg-brand-deepBlue text-white shadow-md shadow-brand-blue/20"
            onClick={() => scrollTo('contato')}
          >
            Falar com especialista
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-brand-text">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
