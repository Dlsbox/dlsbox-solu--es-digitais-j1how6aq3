import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full relative z-10 pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
