import { useState } from 'react'
import { Reveal } from '@/components/ui/reveal'
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
    <section id="contato" className="py-32 md:py-48 scroll-mt-20 relative z-10">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
        <Reveal className="mb-24 md:mb-32">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-brown-600/70 dark:text-brown-400/70 mb-8 block">
            Contato
          </span>
          <h2 className="text-5xl md:text-7xl font-display mb-8 tracking-tight">
            Inicie seu Projeto
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-muted-foreground font-light text-xl max-w-lg">
              Detalhe a sua necessidade. Desenharemos a arquitetura exata para o seu próximo passo.
            </p>
            <a
              href="mailto:suporte@dlsbox.com"
              className="inline-block text-sm uppercase tracking-[0.2em] font-medium text-foreground hover:text-brown-600 dark:hover:text-brown-400 transition-colors border-b border-foreground/20 pb-2 hover:border-brown-600/50"
            >
              suporte@dlsbox.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form className="w-full group" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 mb-16">
              <div className="space-y-6">
                <label className="text-[10px] uppercase tracking-[0.25em] font-medium text-foreground/50">
                  Nome Completo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors text-foreground font-display text-2xl placeholder:text-muted-foreground/30 placeholder:font-sans placeholder:text-lg disabled:opacity-50"
                  placeholder="Como devemos chamá-lo?"
                />
              </div>
              <div className="space-y-6">
                <label className="text-[10px] uppercase tracking-[0.25em] font-medium text-foreground/50">
                  E-mail Profissional
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors text-foreground font-display text-2xl placeholder:text-muted-foreground/30 placeholder:font-sans placeholder:text-lg disabled:opacity-50"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-6 md:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.25em] font-medium text-foreground/50">
                  Escopo da Necessidade
                </label>
                <textarea
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 focus:outline-none focus:border-foreground transition-colors text-foreground font-light text-xl placeholder:text-muted-foreground/30 min-h-[150px] resize-none leading-relaxed disabled:opacity-50"
                  placeholder="Descreva o cenário atual e o que você busca construir..."
                />
              </div>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative h-[64px] w-full sm:w-auto px-16 rounded-none bg-foreground text-background text-[10px] tracking-[0.25em] uppercase font-medium overflow-hidden transition-all duration-700 hover:bg-brown-800 dark:hover:bg-brown-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-6">
                  {isSubmitting ? (
                    <>
                      Enviando...
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar Solicitação
                      <ArrowRight className="w-4 h-4 transition-transform duration-700 ease-out group-hover:translate-x-2" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
