export function Marquee() {
  const items = [
    'Landing pages',
    'Plataformas SaaS',
    'Tráfego pago',
    'Sistemas web',
    'E-commerce',
    'Sites institucionais',
    'Automações',
    'UI/UX Design',
  ]

  const extendedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 py-5 overflow-hidden flex whitespace-nowrap relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="marquee-content flex items-center">
        {extendedItems.map((item, i) => (
          <div key={i} className="flex items-center mx-6">
            <div className="w-2 h-2 rounded-full bg-primary mr-4 shadow-[0_0_10px_#3B82F6]" />
            <span className="font-display font-medium text-lg tracking-wide text-primary">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
