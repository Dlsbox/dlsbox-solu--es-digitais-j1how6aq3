import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-[26px] right-[26px] z-50">
      <button
        onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
        aria-label="Contact us on WhatsApp"
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#25D366] to-[#1DA851] hover:scale-105 transition-transform duration-300 relative group overflow-hidden border border-white/20"
        style={{
          boxShadow: '0 14px 30px rgba(24,200,87,0.34), inset 0 2px 4px rgba(255,255,255,0.3)',
        }}
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle className="w-8 h-8 relative z-10 drop-shadow-md" />
      </button>
    </div>
  )
}
