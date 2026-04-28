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
    <section id="contato" className="py-32 md:py-48 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-foreground text-background -z-10 rounded-t-[4rem] md:rounded-t-[6rem]" />
      <div className="max-w-[1600px] mx-auto w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-[10vw] lg:text-[6vw] leading-[0.85] tracking-tighter font-semibold uppercase mb-8 text-background mix-blend-difference">
              Pronto para
              <br />
              <span className="text-background/50 italic font-light">escalar?</span>
            </h2>
            <div className="space-y-6 mb-12 backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem]">
              <p className="text-background/80 text-xl max-w-md font-light">
                Preencha o formulário abaixo. Nossa equipe técnica avaliará seu desafio e retornará
                com uma proposta de alto impacto.
              </p>
              <ul className="text-background/60 text-sm space-y-4 font-medium tracking-wide mt-6">
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-full">
                    <ArrowRight className="w-4 h-4 text-background/80" />
                  </div>{' '}
                  Sem formulário longo
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-full">
                    <ArrowRight className="w-4 h-4 text-background/80" />
                  </div>{' '}
                  Conversa direta
                </li>
                <li className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-full">
                    <ArrowRight className="w-4 h-4 text-background/80" />
                  </div>{' '}
                  Sem compromisso
                </li>
              </ul>
            </div>
            <a
              href="mailto:contato@dlsbox.com"
              className="text-3xl md:text-5xl font-medium hover:text-background/70 transition-colors inline-block pb-2 border-b-2 border-background/20 hover:border-background"
            >
              contato@dlsbox.com
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-14 rounded-[3rem] shadow-2xl"
          >
            <div className="space-y-4">
              <label className="text-xs font-medium tracking-widest uppercase text-background/50 block ml-2">
                Nome
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-xl text-background focus:outline-none focus:border-background/50 transition-colors placeholder:text-background/20 disabled:opacity-50"
                placeholder="Seu nome ou empresa"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-medium tracking-widest uppercase text-background/50 block ml-2">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-xl text-background focus:outline-none focus:border-background/50 transition-colors placeholder:text-background/20 disabled:opacity-50"
                placeholder="seu@email.com"
              />
            </div>
            <div className="space-y-4">
              <label className="text-xs font-medium tracking-widest uppercase text-background/50 block ml-2">
                O que você precisa?
              </label>
              <textarea
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-xl text-background focus:outline-none focus:border-background/50 transition-colors placeholder:text-background/20 min-h-[160px] resize-none disabled:opacity-50"
                placeholder="Um breve resumo do seu problema ou ideia..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-between text-sm font-medium tracking-widest uppercase bg-background text-foreground hover:bg-background/90 transition-colors disabled:opacity-50 px-8 py-6 rounded-2xl"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3 mx-auto">
                  Enviando <Loader2 className="w-5 h-5 animate-spin" />
                </span>
              ) : (
                <>
                  <span>Enviar Mensagem</span>
                  <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
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
