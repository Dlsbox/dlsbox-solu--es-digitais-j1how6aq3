import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { FixedBackgroundRelief } from './FixedBackgroundRelief'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <FixedBackgroundRelief />

      <div className="relative w-full max-w-[1600px] flex-1 flex flex-col z-10 transition-all duration-300 px-4 md:px-8 pb-8">
        <Header />
        <main className="flex-1 flex flex-col relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
