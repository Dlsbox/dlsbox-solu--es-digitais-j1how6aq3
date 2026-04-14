import { Link } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50 px-6 py-4 md:px-12 flex items-center justify-between">
      <Link to="/" className="text-sm font-semibold tracking-widest uppercase">
        DLSBox
      </Link>
      <div className="flex items-center gap-6">
        <a
          href="#contato"
          className="text-xs font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors hidden md:block"
        >
          Contato
        </a>
        <ThemeToggle />
      </div>
    </header>
  )
}
