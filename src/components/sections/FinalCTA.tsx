import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import { Mail, MessageCircle } from 'lucide-react'

export function FinalCTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10">
        <Reveal>
          <div className="glass-card rounded-[var(--r2)] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden border-border/80">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              Pronto para tirar sua ideia do papel?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Fale com nossa equipe de especialistas. Vamos entender o seu cenário e propor a
              estrutura digital perfeita para os seus objetivos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-14 group text-base shadow-[0_0_20px_rgba(198,241,53,0.3)] hover:shadow-[0_0_30px_rgba(198,241,53,0.5)] hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-8 h-14 bg-background/50 hover:bg-white/5 border-border text-base transition-all"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
