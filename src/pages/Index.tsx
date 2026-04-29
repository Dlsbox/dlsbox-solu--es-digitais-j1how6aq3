import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Process } from '@/components/sections/Process'
import { Products } from '@/components/sections/Products'
import { ProductCarousel } from '@/components/sections/ProductCarousel'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { TechStack } from '@/components/sections/TechStack'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue/20">
      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <Products />
        <ProductCarousel />
        <Testimonials />
        <Pricing />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
