import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Evolution } from '@/components/sections/Evolution'
import { Differentials } from '@/components/sections/Differentials'
import { Products } from '@/components/sections/Products'
import { Plans } from '@/components/sections/Plans'
import { Contact } from '@/components/sections/Contact'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

export default function Index() {
  return (
    <div className="w-full relative z-10 flex flex-col rounded-[2.5rem] overflow-hidden bg-background shadow-[0_30px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-foreground/[0.03]">
      <Hero />
      <Marquee />
      <Services />
      <Evolution />
      <Differentials />
      <Products />
      <Plans />
      <Contact />
      <FinalCTA />
      <FloatingWhatsApp />
    </div>
  )
}
