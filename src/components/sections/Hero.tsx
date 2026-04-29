import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, Activity, Users } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-32 pb-20 px-6 flex flex-col justify-center overflow-hidden bg-brand-bg"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-copper/10 blur-[120px] pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 flex flex-col items-start gap-6">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.2em] text-brand-gray uppercase">
              Desenvolvimento Digital de Alto Impacto
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-extrabold text-brand-text">
              Desenvolvimento{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-deepBlue">
                premium
              </span>{' '}
              para o seu app.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="max-w-xl text-lg md:text-xl text-brand-gray leading-relaxed">
              Transformamos ideias em produtos digitais escaláveis, performáticos e prontos para
              conquistar mercado.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={300}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          >
            <Button
              size="lg"
              className="rounded-full text-base h-14 px-8 gap-2 bg-brand-blue hover:bg-brand-deepBlue text-white shadow-lg shadow-brand-blue/25"
              asChild
            >
              <a href="#contato">
                Iniciar meu projeto <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base h-14 px-8 border-brand-copper/30 text-brand-text hover:bg-brand-copper/5"
              asChild
            >
              <a href="#solucoes">Ver soluções</a>
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-brand-gray mt-4">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Entrega ágil
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-copper" /> Código limpo
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-deepBlue" /> Performance real
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-1 w-full lg:w-[120%] relative">
          <ScrollReveal delay={500} direction="left" className="relative lg:-mr-20">
            <div className="glass-card rounded-[2rem] p-4 sm:p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 z-0" />

              <div className="relative z-10 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[350px] sm:h-[400px]">
                <div className="h-12 border-b border-gray-100 bg-gray-50/50 flex items-center px-4 gap-2 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 h-6 w-32 sm:w-48 bg-white rounded-md border border-gray-200" />
                </div>

                <div className="flex-1 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 bg-[#fafafa] overflow-hidden">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-brand-text text-base sm:text-lg">
                        Visão Geral
                      </h3>
                      <p className="text-[10px] sm:text-xs text-brand-gray">
                        Performance da aplicação em tempo real
                      </p>
                    </div>
                    <div className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] sm:text-xs font-bold">
                      Online
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-1 sm:gap-2">
                      <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                      <span className="text-lg sm:text-2xl font-bold text-brand-text">98.5%</span>
                      <span className="text-[8px] sm:text-[10px] text-brand-gray uppercase tracking-wider">
                        Conversão
                      </span>
                    </div>
                    <div className="bg-brand-deepBlue p-3 sm:p-4 rounded-xl shadow-lg shadow-brand-deepBlue/20 flex flex-col gap-1 sm:gap-2 text-white transform -translate-y-1 sm:-translate-y-2">
                      <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />
                      <span className="text-lg sm:text-2xl font-bold">12ms</span>
                      <span className="text-[8px] sm:text-[10px] text-white/70 uppercase tracking-wider">
                        Latência
                      </span>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-1 sm:gap-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />
                      <span className="text-lg sm:text-2xl font-bold text-brand-text">+45k</span>
                      <span className="text-[8px] sm:text-[10px] text-brand-gray uppercase tracking-wider">
                        Usuários
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-2 sm:p-4 relative min-h-[80px]">
                    <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-white to-transparent z-10" />
                    <div className="w-full h-full flex items-end gap-1 sm:gap-2 px-1 pb-1">
                      {[40, 70, 45, 90, 65, 85, 100, 80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-brand-blue/20 rounded-t-sm relative group-hover:bg-brand-blue/30 transition-colors"
                          style={{ height: `${h}%` }}
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-brand-blue rounded-t-sm transition-all duration-700"
                            style={{ height: `${h * 0.7}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
