import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { Button } from '@/components/ui/button'
import { MessageCircle, Mail } from 'lucide-react'

export function FinalCTA() {
  return (
    <section id="cta" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <Reveal>
          <BentoCard className="bg-primary/5 border-primary/20 text-center py-16 md:py-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground tracking-tight">
              Pronto para começar?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Vamos construir a estrutura digital ideal para o seu negócio. Fale com um especialista
              hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 rounded-full h-14 text-base">
                <MessageCircle className="w-5 h-5 mr-2" /> Chamar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-8 rounded-full h-14 bg-background text-base"
              >
                <Mail className="w-5 h-5 mr-2" /> Enviar E-mail
              </Button>
            </div>
          </BentoCard>
        </Reveal>
      </div>
    </section>
  )
}
