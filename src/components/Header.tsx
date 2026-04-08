import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="relative z-50 flex items-center justify-between px-6 md:px-10 py-6">
      <Logo />
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-[12px] border border-black/10 dark:border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:bg-black/10 dark:hover:bg-white/10 transition-all"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </Button>
      </div>
    </header>
  )
}
