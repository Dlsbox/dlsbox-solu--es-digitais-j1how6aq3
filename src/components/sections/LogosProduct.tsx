import { ArrowUpRight, Mic, Bird, ArrowRight } from 'lucide-react'

export function LogosProduct() {
  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group bg-white/40 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl transition-all duration-700">
      <div className="flex-1 w-full rounded-[2.5rem] border border-border/50 shadow-md relative overflow-hidden group-hover:border-foreground/20 transition-all duration-1000 bg-[#fbfbfa] p-6 md:p-8 flex flex-col items-center transform group-hover:scale-[1.02]">
        {/* Header da Imagem */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-blue-700 text-white p-2.5 rounded-lg flex items-center justify-center relative mt-4">
              <Bird className="w-8 h-8 absolute -top-6 -right-3 text-blue-700 fill-blue-700" />
              <Mic className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-bold text-blue-900 tracking-tight">DLSLOGOS</h4>
          </div>
          <h5 className="text-2xl font-medium text-slate-600 mt-2">Antes e Depois</h5>
        </div>

        {/* Comparativo */}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 w-full relative items-center xl:items-stretch">
          {/* Antes */}
          <div className="flex-1 w-full bg-white rounded-[20px] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
            <div className="text-center py-4 border-b-2 border-orange-100/50">
              <span className="text-slate-500 font-bold tracking-[0.2em] text-sm">ANTES</span>
            </div>
            <div className="p-6 text-slate-600 text-[15px] space-y-6 font-serif flex-1">
              <p className="font-bold text-slate-700">I - A TRINDADE E O PLANO REDENTOR.</p>
              <p className="leading-relaxed">
                1. Eleitos segundo a presciencia do Pai. Deus elegeu a Igreja desde a eternidade (Ef
                1.4).
              </p>
              <div className="bg-[#fdf8f3] p-5 rounded-xl text-slate-500 leading-relaxed border border-orange-50">
                Referencias encontradas no meio do texto costumam exigir copia, revisao e formatacao
                manual.
              </div>
              <p className="text-slate-400 leading-relaxed">
                Referencias encontradas no meio do texto costumam exigir copia, revisao e formatacao
                manual.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 z-10 bg-[#fbfbfa] p-2 rounded-full text-blue-600 flex-shrink-0 shadow-sm border border-slate-100">
            <ArrowRight className="w-6 h-6 rotate-90 xl:rotate-0" strokeWidth={3} />
          </div>

          {/* Depois */}
          <div className="flex-1 w-full bg-[#f4f7fb] rounded-[20px] shadow-sm border border-blue-50 overflow-hidden flex flex-col relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-800"></div>
            <div className="text-center py-4 bg-white rounded-t-[20px]">
              <span className="text-blue-900 font-bold tracking-[0.2em] text-sm">DEPOIS</span>
            </div>
            <div className="p-5 text-slate-700 text-[15px] space-y-4 flex-1 flex flex-col">
              <p className="font-bold text-blue-950 text-base">I - A Trindade e o Plano Redentor</p>

              <div className="bg-white p-5 rounded-xl border-l-4 border-blue-300 shadow-sm space-y-3">
                <span className="bg-[#eef2f6] text-slate-600 text-xs font-bold px-3 py-1.5 rounded-md">
                  Efesios 1:4
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Como também nos elegeu nele antes da fundacao do mundo, para que fossemos santos e
                  irrepreensiveis diante dele em amor.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-blue-300 shadow-sm space-y-3">
                <span className="bg-[#eef2f6] text-slate-600 text-xs font-bold px-3 py-1.5 rounded-md">
                  1 Pedro 1:2
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Eleitos segundo a presciencia de Deus Pai, em santificacao do Espirito, para a
                  obediência e aspersão do sangue de Jesus Cristo.
                </p>
              </div>

              <div className="mt-auto pt-6 flex justify-center pb-2">
                <span className="bg-[#2c4068] text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-md">
                  Audio disponivel - 1 min 48 seg
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center flex flex-col items-center gap-3 w-full">
          <span className="text-slate-600 font-medium text-lg">Acesse agora:</span>
          <a
            href="https://logos.dlsbox.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#2a4365] text-white font-semibold text-xl px-10 py-3 rounded-full shadow-lg hover:bg-[#1e3048] transition-colors inline-block w-full max-w-xs truncate"
          >
            logos.dlsbox.com
          </a>
        </div>
      </div>

      <div className="flex-1 space-y-10">
        <div className="flex items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-display text-foreground tracking-tight">
            DLSLogos
          </h3>
          <span className="px-3 py-1 bg-blue-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-blue-700 dark:text-blue-400 border border-blue-600/20 rounded-full">
            Produto Live
          </span>
        </div>
        <p className="text-muted-foreground font-light text-xl leading-relaxed">
          Uma solução inteligente que transforma documentos em audiobooks profissionais, realizando
          a detecção e inserção automática de referências bíblicas para um estudo mais rico.
        </p>
        <button
          onClick={() => window.open('https://logos.dlsbox.com', '_blank')}
          className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-700"
        >
          <span className="border-b border-foreground/20 group-hover:border-blue-600/50 pb-1">
            Acessar DLSLogos
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>
    </div>
  )
}
