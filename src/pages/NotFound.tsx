import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center font-sans selection:bg-foreground selection:text-background">
      <h1 className="text-[20vw] md:text-[15vw] leading-none font-medium tracking-tighter mb-8">
        404
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-12">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="group flex items-center gap-4 text-sm font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors duration-300"
      >
        Voltar ao início
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors duration-300">
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </div>
  )
}
