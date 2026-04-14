import { Hero } from '@/components/sections/Hero'
import { Intro } from '@/components/sections/Intro'
import { Services } from '@/components/sections/Services'
import { Products } from '@/components/sections/Products'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <div className="w-full bg-background text-foreground selection:bg-foreground selection:text-background">
      <Hero />
      <Intro />
      <Services />
      <Products />
      <Contact />
    </div>
  )
}
