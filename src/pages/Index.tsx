import { Hero } from '@/components/sections/Hero'
import { Intro } from '@/components/sections/Intro'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Contact } from '@/components/sections/Contact'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Intro />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
