import { useState } from 'react'
import { ArrowRight, Loader2, Mail, Clock } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { createLead } from '@/services/leads'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

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
        description: 'Por favor, preencha todos os campos.',
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
        description: 'Ocorreu um problema. Tente novamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contato"
      className="py-24 md:py-32 relative overflow-hidden bg-brand-deepBlue text-white"
    >
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-copper/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Pronto para <span className="text-brand-copper">escalar</span> seu produto?
              </h2>
              <p className="text-lg md:text-xl text-white/70 font-light mb-12 max-w-md leading-relaxed">
                Fale com nossos especialistas e receba uma proposta personalizada para tirar sua
                ideia do papel com estratégia, design e tecnologia.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                    <Clock className="w-5 h-5 text-brand-copper" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Resposta Rápida</h4>
                    <p className="text-sm font-light text-white/60">Em até 24 horas úteis</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Contato Direto</h4>
                    <p className="text-sm font-light text-white/60">contato@dlsbox.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-gray-100"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-copper" />
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.1em] uppercase text-brand-gray ml-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all disabled:opacity-50"
                    placeholder="Como devemos chamar você?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.1em] uppercase text-brand-gray ml-1">
                    E-mail corporativo
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-[0.1em] uppercase text-brand-gray ml-1">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all min-h-[120px] resize-none disabled:opacity-50"
                    placeholder="Um breve resumo do seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-3 bg-brand-blue text-white font-bold text-lg hover:bg-brand-deepBlue transition-colors disabled:opacity-50 px-8 py-5 rounded-xl shadow-lg shadow-brand-blue/20 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      Enviando <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Enviar Mensagem{' '}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-brand-gray font-medium mt-6">
                  Resposta em até 24h • Atendimento consultivo • Sem compromisso
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
