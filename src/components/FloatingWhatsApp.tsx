import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-[40px] right-[40px] z-50">
      <button
        onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
        aria-label="Contact us on WhatsApp"
        className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-foreground text-background hover:scale-[1.05] hover:-translate-y-1 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
      >
        <MessageCircle className="w-7 h-7" strokeWidth={1} />
      </button>
    </div>
  )
}
