import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Button as MovingBorderButton } from '@/components/ui/moving-border'
import { MessageCircle, Mail } from 'lucide-react'
import { LampContainer } from '@/components/ui/lamp'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

export function FinalCTA() {
  const ref = useRef<HTMLHeadingElement>(null)
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true })

  return (
    <section id="cta" className="relative w-full scroll-mt-20 overflow-hidden bg-background">
      <LampContainer>
        <h2
          ref={ref}
          className={cn(
            'mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl',
            'transition-all ease-in-out',
          )}
          style={{
            transitionDuration: '800ms',
            transitionDelay: '300ms',
            opacity: isIntersecting ? 1 : 0.5,
            transform: isIntersecting ? 'translateY(0)' : 'translateY(100px)',
          }}
        >
          Pronto para começar?
        </h2>

        <div
          className={cn(
            'flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 transition-all duration-700 delay-500',
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
          )}
        >
          <MovingBorderButton
            containerClassName="w-full sm:w-auto h-14 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            className="px-8 text-base bg-[#25D366] text-white font-medium gap-2"
            borderRadius="1.75rem"
            onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
          >
            <MessageCircle className="w-5 h-5 text-white" /> Chamar no WhatsApp
          </MovingBorderButton>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 rounded-full h-14 bg-background/50 backdrop-blur-md text-base hover:bg-background/80 hover:scale-[1.02] transition-transform border-border/50"
          >
            <Mail className="w-5 h-5 mr-2" /> Enviar E-mail
          </Button>
        </div>
      </LampContainer>
    </section>
  )
}
