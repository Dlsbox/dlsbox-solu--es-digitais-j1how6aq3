import { Reveal } from '@/components/ui/reveal'
import { BentoCard } from '@/components/ui/bento-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-card/50 border-t border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Inicie seu Projeto</h2>
            <p className="text-muted-foreground text-lg">
              Conte-nos sobre a sua necessidade e apresentaremos a melhor estrutura.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <BentoCard className="p-6 md:p-12 bg-background">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Nome Completo</label>
                    <Input
                      placeholder="Seu nome"
                      className="bg-muted/50 border-transparent focus-visible:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">E-mail</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-muted/50 border-transparent focus-visible:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">WhatsApp</label>
                    <Input
                      placeholder="(00) 00000-0000"
                      className="bg-muted/50 border-transparent focus-visible:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Interesse Principal
                    </label>
                    <Select>
                      <SelectTrigger className="bg-muted/50 border-transparent focus:ring-primary/50">
                        <SelectValue placeholder="Selecione um item" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lp">Landing Page</SelectItem>
                        <SelectItem value="site">Site Institucional</SelectItem>
                        <SelectItem value="sys">Sistemas / SaaS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Mensagem (Opcional)
                  </label>
                  <Textarea
                    placeholder="Descreva brevemente como podemos te ajudar..."
                    className="min-h-[120px] bg-muted/50 border-transparent focus-visible:ring-primary/50 resize-y"
                  />
                </div>
                <div className="pt-2">
                  <Button size="lg" className="w-full sm:w-auto px-10 rounded-full">
                    Enviar Solicitação <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
