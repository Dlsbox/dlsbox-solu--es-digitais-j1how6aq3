import { MessageCircle } from 'lucide-react'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <MovingBorderButton
        containerClassName="w-14 h-14 shadow-lg hover:scale-105 transition-transform"
        className="bg-[#25D366] text-white p-0 flex items-center justify-center"
        borderRadius="1.75rem"
        onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </MovingBorderButton>
    </div>
  )
}
