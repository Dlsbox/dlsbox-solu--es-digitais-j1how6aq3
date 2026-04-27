import { useState } from 'react'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'todas', label: 'Todos' },
  { id: 'educacao', label: 'Educação' },
  { id: 'financas', label: 'Finanças' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'comunidades', label: 'Comunidades' },
  { id: 'produtividade', label: 'Produtividade' },
  { id: 'ia', label: 'IA aplicada' },
  { id: 'operacoes', label: 'Operações' },
]

const areas = [
  {
    id: 'educacao',
    title: 'Educação',
    description: 'Plataformas de ensino, leitura inteligente, cursos, aulas e conteúdo digital.',
  },
  {
    id: 'financas',
    title: 'Finanças',
    description: 'Controle financeiro, dashboards, relatórios, assinaturas e gestão de dados.',
  },
  {
    id: 'comunidades',
    title: 'Comunidades',
    description: 'Redes, grupos, interação entre usuários, perfis e conteúdo colaborativo.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Ferramentas para sellers, relatórios, reconciliação e análise operacional.',
  },
  {
    id: 'produtividade',
    title: 'Produtividade',
    description: 'Sistemas para organizar tarefas, documentos, processos e decisões.',
  },
  {
    id: 'ia',
    title: 'IA aplicada',
    description: 'Ferramentas que usam inteligência artificial para análise, automação e suporte.',
  },
  {
    id: 'operacoes',
    title: 'Operações',
    description: 'Sistemas de gestão interna, controle de processos, logística e monitoramento.',
  },
]

export function Areas() {
  const [activeCategory, setActiveCategory] = useState('todas')

  const filteredAreas = areas.filter(
    (area) => activeCategory === 'todas' || area.id === activeCategory,
  )

  return (
    <section id="areas" className="py-24 md:py-32 px-6 md:px-12 border-t border-border bg-muted/10">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Áreas de Atuação
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-balance">
              Áreas que a DLSBox transforma em produto digital
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Criamos soluções digitais para diferentes necessidades. Cada solução é pensada para
              ter clareza, uso real e possibilidade de crescimento.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border',
                activeCategory === category.id
                  ? 'bg-foreground text-background border-foreground'
                  : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground',
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="p-8 md:p-10 border border-border bg-card rounded-2xl hover:border-foreground/20 transition-colors group"
            >
              <h3 className="text-2xl font-medium mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
