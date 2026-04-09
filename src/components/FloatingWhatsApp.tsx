import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '447858632888'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, vim pelo site da DLSBox e gostaria de falar com o atendimento.',
)

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function FloatingWhatsApp() {
  const openWhatsAppChat = () => {
    window.open(WHATSAPP_URL, '_blank')
  }

  return (
    <div className="fixed bottom-[40px] right-[40px] z-50">
      <button
        type="button"
        onClick={openWhatsAppChat}
        aria-label="Falar com o atendimento da DLSBox no WhatsApp"
        className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-green-500 text-white hover:bg-green-600 hover:scale-[1.05] hover:-translate-y-1 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
      >
        <MessageCircle className="w-7 h-7" strokeWidth={1} />
      </button>
    </div>
  )
}
