export function Marquee() {
  const items = [
    'Landing Pages',
    'SaaS',
    'Sistemas',
    'E-commerce',
    'Design Editorial',
    'Automações',
  ]

  const extendedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full py-16 overflow-hidden flex whitespace-nowrap relative border-y border-foreground/[0.04] bg-background/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <div className="marquee-content flex items-center opacity-40">
        {extendedItems.map((item, i) => (
          <div key={i} className="flex items-center mx-16">
            <span className="font-display italic text-3xl md:text-5xl text-foreground font-light tracking-wide">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 ml-32" />
          </div>
        ))}
      </div>
    </div>
  )
}
