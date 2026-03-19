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
    <div className="w-full bg-primary text-primary-foreground dark:bg-primary/10 dark:text-primary border-y border-primary/20 py-5 overflow-hidden flex whitespace-nowrap relative transition-colors duration-300">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-colors duration-300" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-colors duration-300" />

      <div className="marquee-content flex items-center">
        {extendedItems.map((item, i) => (
          <div key={i} className="flex items-center mx-6">
            <div className="w-2 h-2 rounded-full bg-primary-foreground dark:bg-primary mr-4 shadow-[0_0_10px_rgba(255,255,255,0.8)] dark:shadow-[0_0_10px_#3B82F6] transition-colors duration-300" />
            <span className="font-display font-medium text-lg tracking-wide transition-colors duration-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
