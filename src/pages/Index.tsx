import { Hero } from '@/components/sections/Hero'
import { Intro } from '@/components/sections/Intro'
import { Services } from '@/components/sections/Services'
import { Areas } from '@/components/sections/Areas'
import { Products } from '@/components/sections/Products'
import { Contact } from '@/components/sections/Contact'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground font-sans selection:bg-foreground selection:text-background flex flex-col relative overflow-hidden">
      {/* Fixed Parallax / Glass Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-500/10 blur-[120px] blob-animate-1" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-500/10 blur-[120px] blob-animate-2" />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-1 w-full">
          <Hero />
          <Intro />
          <Services />
          <Areas />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
