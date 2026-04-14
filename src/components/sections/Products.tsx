import { AspectRatio } from '@/components/ui/aspect-ratio'

const works = [
  {
    title: 'Fintech Dashboard',
    category: 'Sistemas',
    image: 'https://img.usecurling.com/p/800/600?q=dashboard&color=black',
  },
  {
    title: 'Luxury Real Estate',
    category: 'Autoridade',
    image: 'https://img.usecurling.com/p/800/600?q=architecture&color=black',
  },
  {
    title: 'High-End E-commerce',
    category: 'E-commerce',
    image: 'https://img.usecurling.com/p/800/600?q=fashion&color=black',
  },
  {
    title: 'Tech Landing Page',
    category: 'Conversão',
    image: 'https://img.usecurling.com/p/800/600?q=technology&color=black',
  },
]

export function Products() {
  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex justify-between items-end mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Trabalhos Selecionados
          </span>
          <a
            href="#contato"
            className="text-sm font-medium tracking-widest uppercase hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
          >
            Ver Todos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {works.map((work, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden bg-muted mb-6">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                </AspectRatio>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-medium">{work.title}</h3>
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground border border-border px-3 py-1 rounded-full">
                  {work.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
