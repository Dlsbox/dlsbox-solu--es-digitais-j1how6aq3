import { useState, useEffect, MouseEvent } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

type ViewTransitionDocument = Document & {
  startViewTransition?: (
    options:
      | (() => void)
      | {
          update: () => void
          types?: string[]
        },
  ) => {
    ready: Promise<void>
    finished: Promise<void>
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 40)

      // Detect active section
      const sections = ['servicos', 'projetos', 'tecnologias', 'processo', 'contato']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#servicos', label: 'Soluções', id: 'servicos' },
    { href: '#projetos', label: 'Produtos', id: 'projetos' },
    { href: '#tecnologias', label: 'Tecnologias', id: 'tecnologias' },
    { href: '#processo', label: 'Processo', id: 'processo' },
    { href: '#contato', label: 'Contato', id: 'contato' },
  ]

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)

    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleNavClick = (href: string) => {
    const supportsViewTransition =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const transitionDocument = document as ViewTransitionDocument

    if (supportsViewTransition && transitionDocument.startViewTransition) {
      document.documentElement.style.viewTransitionName = 'root'

      const transition = transitionDocument.startViewTransition({
        update: () => {
          scrollToSection(href)
        },
        types: ['circular-wipe'],
      })

      transition.finished.finally(() => {
        document.documentElement.style.viewTransitionName = ''
      })

      return
    }

    scrollToSection(href)
  }

  const handleNavClickWithTransition = (event: MouseEvent<HTMLElement>, href: string) => {
    event.preventDefault()

    document.documentElement.style.setProperty('--view-transition-x', `${event.clientX}px`)
    document.documentElement.style.setProperty('--view-transition-y', `${event.clientY}px`)

    handleNavClick(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 border-b',
          isScrolled
            ? 'h-16 bg-[#F8F7F2]/85 backdrop-blur-xl border-slate-200/60 shadow-sm'
            : 'h-24 bg-[#050b16]/38 backdrop-blur-xl border-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)]',
        )}
      >
        {/* Logo */}
        <motion.a
          href="#"
          className={cn(
            'flex items-center gap-3 no-underline group transition-colors duration-300',
            isScrolled ? 'text-foreground' : 'text-white',
          )}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img
            src="/logo.png"
            alt="DLSBox"
            animate={{
              width: isScrolled ? 52 : 70,
              height: isScrolled ? 52 : 70,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'object-contain transition-[filter] duration-300',
              isScrolled
                ? '[filter:drop-shadow(0_5px_14px_rgba(15,20,27,0.30))]'
                : '[filter:brightness(1.1)_contrast(1.1)_drop-shadow(0_0_16px_rgba(255,255,255,0.35))_drop-shadow(0_8px_20px_rgba(0,0,0,0.55))]',
            )}
          />
          <span className="hidden sm:flex flex-col leading-none">
            <motion.span
              animate={{
                fontSize: isScrolled ? '1.125rem' : '1.25rem',
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="font-display font-bold tracking-tight"
            >
              DLSBox
            </motion.span>
            <motion.span
              animate={{
                fontSize: isScrolled ? '0.58rem' : '0.64rem',
                opacity: isScrolled ? 0.68 : 0.82,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={cn(
                'mt-1 font-display font-semibold uppercase tracking-[0.22em]',
                isScrolled ? 'text-slate-500' : 'text-white/72',
              )}
            >
              Soluções Digitais
            </motion.span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClickWithTransition(e, link.href)}
              className={cn(
                'relative overflow-hidden px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                activeSection === link.id
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50'
                  : isScrolled
                    ? 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    : 'text-white/78 hover:text-white hover:bg-white/10',
              )}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              <span className="relative z-10">{link.label}</span>
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-50 dark:bg-blue-950/50 rounded-lg -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contato"
          onClick={(e) => handleNavClickWithTransition(e, '#contato')}
          className={cn(
            'relative overflow-hidden hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300',
            isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base',
          )}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-4 h-4 relative z-10" />
          <span className="hidden xl:inline relative z-10">Falar com especialista</span>
          <span className="xl:hidden relative z-10">Contato</span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className={cn(
            'lg:hidden p-2 rounded-lg transition-colors',
            isScrolled ? 'text-foreground hover:bg-muted/50' : 'text-white hover:bg-white/10',
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <img
                    src="/logo.png"
                    alt="DLSBox"
                    className="h-12 w-auto object-contain [filter:drop-shadow(0_5px_14px_rgba(15,20,27,0.24))]"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClickWithTransition(e, link.href)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className={cn(
                          'relative overflow-hidden block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300',
                          activeSection === link.id
                            ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50'
                            : 'text-foreground hover:bg-muted/50 hover:translate-x-2',
                        )}
                      >
                        <span className="relative z-10">{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* CTA */}
                <div className="p-6 border-t border-border">
                  <motion.a
                    href="#contato"
                    onClick={(e) => handleNavClickWithTransition(e, '#contato')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="relative overflow-hidden flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Falar com especialista</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
