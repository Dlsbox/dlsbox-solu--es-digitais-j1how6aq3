import { ArrowUpRight, TrendingDown, TrendingUp, Wallet } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export function TrackerProduct() {
  const metrics = {
    balance: 18000,
    incomes: 24500,
    expenses: 6500,
    essential_percentage: 65,
    non_essential_percentage: 30,
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center group">
      <div className="flex-1 space-y-10 order-2 lg:order-1">
        <div className="flex items-center gap-6">
          <h3 className="text-4xl md:text-5xl font-display text-foreground tracking-tight">
            DLSTracker
          </h3>
          <span className="px-3 py-1 bg-brown-600/10 text-[10px] uppercase tracking-[0.2em] font-medium text-brown-700 dark:text-brown-400 border border-brown-600/20">
            Produto Live
          </span>
        </div>
        <p className="text-foreground font-medium text-lg">
          Controle financeiro claro. Sem planilhas. Sem ruído.
        </p>
        <p className="text-muted-foreground font-light text-xl leading-relaxed">
          Dashboard financeiro pessoal com visão mensal, renda, despesas, saldo e metas. Importação
          manual ou por extrato bancário. Planos Free e Pro.
        </p>
        <button
          onClick={() => window.open('https://tracker.dlsbox.com', '_blank')}
          className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium text-foreground group-hover:text-brown-600 dark:group-hover:text-brown-400 transition-colors duration-700"
        >
          <span className="border-b border-foreground/20 group-hover:border-brown-600/50 pb-1">
            Acessar DLSTracker
          </span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </div>

      <div className="flex-1 w-full relative order-1 lg:order-2">
        <div className="absolute inset-0 bg-muted/40 border border-border rounded-xl transform translate-x-3 translate-y-3 -z-20 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5" />
        <div className="absolute inset-0 bg-background/50 border border-border rounded-xl transform translate-x-1.5 translate-y-1.5 -z-10 transition-transform duration-700 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />

        <Card className="w-full h-full min-h-[440px] sm:min-h-[500px] bg-card rounded-xl border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group-hover:border-brown-600/30 transition-all duration-1000 flex flex-col">
          <div className="h-12 border-b border-border flex items-center gap-2 px-6 bg-muted/30 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
          </div>

          <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center bg-gradient-to-br from-card to-muted/10 relative">
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="p-3 bg-primary/10 rounded-xl text-primary ring-1 ring-primary/20">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-2xl text-foreground tracking-tight">
                  Financial Status
                </h4>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  Real-time budget overview
                </p>
              </div>
            </div>

            <div className="space-y-8 sm:space-y-10">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-brown-600/80 dark:text-brown-400/80 block mb-3">
                  Total Balance
                </span>
                <div className="text-4xl sm:text-6xl font-sans font-light tracking-tighter text-foreground">
                  {formatCurrency(metrics.balance)}
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-8 py-5 sm:py-6 border-y border-border/60">
                <div className="flex-1 flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 bg-emerald-500/10 rounded-full text-emerald-600 dark:text-emerald-400 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Incomes
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-foreground">
                      + {formatCurrency(metrics.incomes)}
                    </span>
                  </div>
                </div>
                <div className="w-px h-10 bg-border/60" />
                <div className="flex-1 flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-2.5 bg-brown-600/10 rounded-full text-brown-600 dark:text-brown-400 shrink-0">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div className="w-full">
                    <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Expenses
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-foreground">
                      - {formatCurrency(metrics.expenses)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-5 sm:space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm font-sans">
                    <span className="font-medium text-foreground">Essential</span>
                    <span className="text-muted-foreground font-medium">
                      {metrics.essential_percentage}%
                    </span>
                  </div>
                  <Progress
                    value={metrics.essential_percentage}
                    className="h-1.5 sm:h-2 bg-secondary [&>div]:bg-primary"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm font-sans">
                    <span className="font-medium text-foreground">Non-Essential</span>
                    <span className="text-muted-foreground font-medium">
                      {metrics.non_essential_percentage}%
                    </span>
                  </div>
                  <Progress
                    value={metrics.non_essential_percentage}
                    className="h-1.5 sm:h-2 bg-secondary [&>div]:bg-brown-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
