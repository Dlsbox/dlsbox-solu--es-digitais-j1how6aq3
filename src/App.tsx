import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import IndexPage from './pages/Index'
import NotFound from './pages/NotFound'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
    errorElement: <NotFound />,
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      <Sonner />
    </>
  )
}
