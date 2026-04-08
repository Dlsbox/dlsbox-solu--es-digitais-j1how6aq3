import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export default function Layout() {
  return (
    <div className="min-h-screen p-[14px] flex flex-col items-center">
      {/* 3D Page Shell */}
      <div className="hero-surface relative w-full max-w-[1600px] flex-1 flex flex-col rounded-[26px] md:rounded-[34px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/10 dark:border-white/5 transition-all duration-300 bg-gradient-to-b from-white to-[#f8f9fa] dark:from-[#111214] dark:to-[#0a0b0d]">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        {/* Decorative Blobs */}
        <div className="absolute top-[-15%] left-[-10%] w-[50vw] max-w-[600px] aspect-square bg-[#2f5cff]/10 rounded-full blur-[80px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] max-w-[600px] aspect-square bg-[#2f5cff]/10 rounded-full blur-[80px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

        <div className="relative z-10 flex flex-col flex-1">
          <Header />
          <main className="flex-1 flex flex-col">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
