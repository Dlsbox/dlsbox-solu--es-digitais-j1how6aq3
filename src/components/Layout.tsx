import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { CustomCursor } from './CustomCursor'
import { NoiseOverlay } from './NoiseOverlay'

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      <main className="flex-grow z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
