import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import IndexPage from './pages/Index'
import NotFound from './pages/NotFound'
import PrivacidadePage from './pages/Privacidade'
import TermosDeUsoPage from './pages/TermosDeUso'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { useLenis } from '@/hooks/useLenis'
import { LandingDepthBackground } from '@/components/LandingDepthBackground'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/privacidade',
    element: <PrivacidadePage />,
  },
  {
    path: '/termos-de-uso',
    element: <TermosDeUsoPage />,
  },
])

function AppContent() {
  useLenis()

  return (
    <>
      <LandingDepthBackground />
      <RouterProvider router={router} />
      <Toaster />
      <Sonner />
    </>
  )
}

export default function App() {
  return <AppContent />
}
