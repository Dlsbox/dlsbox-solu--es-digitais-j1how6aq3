import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { createLead } from '@/services/leads'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [scope, setScope] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !scope) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor, preencha todos os campos antes de enviar.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    try {
      await createLead({ name, email, scope })
      toast({
        title: 'Solicitação enviada',
        description: 'Recebemos sua mensagem. Entraremos em contato em breve.',
      })
      setName('')
      setEmail('')
      setScope('')
    } catch (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Ocorreu um problema ao enviar sua solicitação. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-32 md:py-48 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-[10vw] lg:text-[6vw] leading-[0.9] tracking-tighter font-medium uppercase mb-8">
              Vamos
              <br />
              <span className="text-background/50">Conversar</span>
            </h2>
            <p className="text-background/70 text-lg max-w-md mb-12">
              Pronto para elevar sua infraestrutura digital? Descreva o escopo do seu projeto e
              desenharemos a arquitetura exata para o seu próximo passo.
            </p>
            <a
              href="mailto:suporte@dlsbox.com"
              className="text-2xl md:text-4xl font-medium hover:text-background/70 transition-colors"
            >
              suporte@dlsbox.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-4">
              <label className="text-xs font-medium tracking-widest uppercase text-background/50 block">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl focus:outline-none focus:border-background transition-colors placeholder:text-background/20 disabled:opacity-50"
                placeholder="Seu nome ou empresa"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-medium tracking-widest uppercase text-background/50 block">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl focus:outline-none focus:border-background transition-colors placeholder:text-background/20 disabled:opacity-50"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-medium tracking-widest uppercase text-background/50 block">
                Escopo do Projeto
              </label>
              <textarea
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl focus:outline-none focus:border-background transition-colors placeholder:text-background/20 min-h-[120px] resize-none disabled:opacity-50"
                placeholder="Fale um pouco sobre o que você busca construir..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-4 text-sm font-medium tracking-widest uppercase hover:text-background/70 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  Enviando <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <div className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center group-hover:border-background transition-colors">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
