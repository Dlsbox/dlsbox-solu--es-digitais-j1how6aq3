import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Reveal } from '@/components/ui/reveal'
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { CheckCircle2, Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'O nome é obrigatório e deve ter no mínimo 2 caracteres.'),
  email: z.string().email('Insira um e-mail válido.'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Selecione um serviço de interesse.'),
  message: z.string().optional(),
})

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
  }

  return (
    <section
      id="contato"
      className="py-24 bg-card/20 border-t border-border/50 scroll-mt-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Solicite um <span className="text-primary">Orçamento</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preencha os dados abaixo e entraremos em contato para entender seu projeto e propor a
              melhor solução digital.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-background/80 backdrop-blur-md border border-border/80 shadow-xl rounded-[var(--r2)] p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brown-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-md">
                    Recebemos sua solicitação. Nossa equipe entrará em contato em breve através do
                    e-mail ou WhatsApp informado.
                  </p>
                  <Button
                    className="mt-8 rounded-full"
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false)
                      form.reset()
                    }}
                  >
                    Enviar nova solicitação
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Nome *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Seu nome completo"
                                className="bg-card/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">E-mail *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="seu@email.com"
                                className="bg-card/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              WhatsApp / Telefone
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(00) 00000-0000"
                                className="bg-card/50"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">
                              Serviço de Interesse *
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-card/50">
                                  <SelectValue placeholder="Selecione um serviço" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Landing Pages">Landing Pages</SelectItem>
                                <SelectItem value="Sites para Negócios">
                                  Sites para Negócios
                                </SelectItem>
                                <SelectItem value="Sistemas & SaaS">Sistemas & SaaS</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Como podemos ajudar?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Conte um pouco sobre o seu projeto ou necessidade..."
                              className="min-h-[120px] bg-card/50 resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto px-8 h-12 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all group"
                      >
                        Solicitar Orçamento
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
