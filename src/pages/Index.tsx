import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Contact } from '@/components/sections/Contact'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TechCarousel } from '@/components/TechCarousel'
import { FinalCTA } from '@/components/FinalCTA'
import { Process } from '@/components/Process'
import { GlobalTechBackground } from '@/components/GlobalTechBackground'
import { useGsapAnimations } from '@/hooks/useGsapAnimations'

function IndexContent() {
  useGsapAnimations()

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col relative z-10 overflow-hidden">
      <GlobalTechBackground />
      <Header />
      <main className="relative z-10 flex-1 w-full">
        <Hero />
        <TechCarousel />
        <Services />
        <Process />
        <Products />
        <FinalCTA />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default function IndexPage() {
  return <IndexContent />
}
