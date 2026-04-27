export function Intro() {
  return (
    <section id="sobre" className="py-24 md:py-48 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Nossa História
            </span>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-balance">
              Nascemos de uma dor real.
            </h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 max-w-3xl">
              <p>
                Em <strong className="text-foreground font-medium">2022</strong>, a DLSBox Ltd
                surgiu no Reino Unido como uma empresa de vendas online. Operávamos no dia a dia de
                um negócio real — com pedidos, fornecedores, margens e obrigações fiscais para
                gerenciar.
              </p>
              <p>
                Com o tempo, percebemos que{' '}
                <em className="text-brown-600 dark:text-brown-400 not-italic font-medium">
                  as ferramentas disponíveis no mercado não resolviam o nosso problema.
                </em>{' '}
                Eram genéricas, caras ou fragmentadas demais. A resposta foi direta: desenvolvemos
                as nossas próprias.
              </p>
              <p>
                Calculadora de lucro, análise de produtos em tempo real, gestão completa da
                operação, integração com o{' '}
                <strong className="text-foreground font-medium">HMRC</strong> — o órgão fiscal
                britânico. Construímos tudo internamente porque precisávamos que funcionasse de
                verdade.
              </p>
              <p>
                Hoje, com essa experiência acumulada, abrimos a porta para desenvolver soluções
                digitais para outros negócios.{' '}
                <strong className="text-foreground font-medium">
                  Sabemos como é estar do outro lado — e isso muda tudo.
                </strong>
              </p>
            </div>

            <div className="p-8 md:p-10 bg-muted/30 border border-border rounded-2xl relative mt-8">
              <p className="text-xl md:text-2xl font-medium italic text-balance relative z-10">
                "Quando construímos para você, estamos usando o mesmo cuidado de quem já dependeu do
                próprio software para tocar um negócio."
              </p>
              <span className="block mt-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
                — Equipe DLSBox Ltd, desde 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
