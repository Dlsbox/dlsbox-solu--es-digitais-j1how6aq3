export function Marquee() {
  const items = [
    'Landing pages',
    'SaaS',
    'Tráfego',
    'Sistemas',
    'E-commerce',
    'Design',
    'Automações',
  ]

  const extendedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full bg-card border-y border-border py-5 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="marquee-content flex items-center opacity-70">
        {extendedItems.map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="font-display font-semibold text-sm tracking-widest uppercase text-muted-foreground">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-border ml-16" />
          </div>
        ))}
      </div>
    </div>
  )
}
