import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

function openMailFallback(name: string, email: string, scope: string) {
  const subject = encodeURIComponent('Novo contato pelo site DLSBox')
  const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nNecessidade:\n${scope}`)
  window.open(`mailto:contact@dlsbox.com?subject=${subject}&body=${body}`, '_blank')
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [scope, setScope] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !scope.trim()) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Preencha nome, e-mail e descreva sua necessidade antes de enviar.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, scope }),
      })

      if (!res.ok) throw new Error(`status ${res.status}`)

      toast({
        title: 'Mensagem enviada',
        description: 'Recebemos sua solicitação. Em breve entraremos em contato.',
      })
      setName('')
      setEmail('')
      setScope('')
    } catch {
      openMailFallback(name, email, scope)
      toast({
        title: 'Mensagem preparada no seu e-mail',
        description:
          'Não conseguimos enviar automaticamente. Abrimos seu e-mail para finalizar o contato.',
      })
      setName('')
      setEmail('')
      setScope('')
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
              Tem um
              <br />
              <span className="text-background/50">projeto?</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-background/70 text-lg max-w-md">
                Conte o que você precisa. A conversa é gratuita e sem compromisso.
              </p>
              <ul className="text-background/50 text-sm space-y-2 font-medium tracking-wide">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> Entendemos sua ideia
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> Indicamos o melhor caminho
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> Conversa sem compromisso
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:contact@dlsbox.com"
                className="text-2xl md:text-4xl font-medium hover:text-background/70 transition-colors block"
              >
                contact@dlsbox.com
              </a>
              <a
                href="https://wa.me/447858632888?text=Olá,%20tenho%20um%20projeto%20e%20quero%20conversar%20com%20a%20DLSBox."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 h-12 px-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold rounded-full transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.122 1.527 5.855L.057 23.882a.5.5 0 0 0 .61.61l6.087-1.456A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.021-1.38l-.36-.214-3.733.894.908-3.648-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
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
                O que você precisa?
              </label>
              <textarea
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                disabled={isSubmitting}
                className="w-full bg-transparent border-b border-background/20 py-4 text-xl focus:outline-none focus:border-background transition-colors placeholder:text-background/20 min-h-[120px] resize-none disabled:opacity-50"
                placeholder="Um breve resumo do seu problema ou ideia..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  Enviando <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Enviar Mensagem
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
