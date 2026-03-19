import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Services } from '@/components/sections/Services'
import { Evolution } from '@/components/sections/Evolution'
import { Differentials } from '@/components/sections/Differentials'
import { Products } from '@/components/sections/Products'
import { Plans } from '@/components/sections/Plans'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <Marquee />
      <Services />
      <Evolution />
      <Differentials />
      <Products />
      <Plans />
      <FinalCTA />
    </div>
  )
}
