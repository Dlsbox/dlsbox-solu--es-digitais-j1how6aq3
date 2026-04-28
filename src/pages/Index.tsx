import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { LogosProduct } from '@/components/sections/LogosProduct'
import { TrackerProduct } from '@/components/sections/TrackerProduct'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { Contact } from '@/components/sections/Contact'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export default function IndexPage() {
  useEffect(() => {
    // Forçar Dark Mode para manter o padrão premium (Glassmorphism e Palette original)
    document.documentElement.classList.add('dark')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 overflow-hidden flex flex-col">
      {/* Background Fixo / Parallax Premium */}
      <div className="fixed inset-0 -z-50 bg-[#050505]">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=abstract%20dark%20gradient')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      <Header />

      <main className="relative z-10 flex-1">
        <Hero />
        <Problem />
        <Solution />

        {/* Produtos: Restaurando LogosProduct e TrackerProduct */}
        <section id="produtos" className="py-24 md:py-32 px-6 md:px-12 relative z-20">
          <div className="max-w-[1400px] mx-auto space-y-24 md:space-y-40">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-6">
                  Nossos{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Produtos
                  </span>
                </h2>
                <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light">
                  Soluções reais e de alta performance que já estão escalando no mercado.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <LogosProduct />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <TrackerProduct />
            </ScrollReveal>
          </div>
        </section>

        <Testimonials />
        <Pricing />
        <Contact />
      </main>
    </div>
  )
}
