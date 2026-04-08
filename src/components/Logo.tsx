import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 bg-[#060811] pl-3 pr-5 py-2.5 rounded-2xl shadow-lg border border-white/10 select-none',
        className,
      )}
    >
      {/* Isometric Cube */}
      <div className="relative w-8 h-8 flex-shrink-0 group perspective-1000 ml-1">
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:rotate-y-[15deg] group-hover:-translate-y-0.5"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-35.264deg) rotateY(45deg)' }}
        >
          {/* Top Face */}
          <div
            className="absolute inset-0 bg-[#e2e8f0] border-[0.5px] border-black/5"
            style={{ transform: 'rotateX(90deg) translateZ(16px)' }}
          />
          {/* Front Face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#2f5cff] to-[#1a3bbd] border-[0.5px] border-black/20"
            style={{ transform: 'translateZ(16px)' }}
          />
          {/* Right Face */}
          <div
            className="absolute inset-0 bg-[#0f2a96] border-[0.5px] border-black/40"
            style={{ transform: 'rotateY(90deg) translateZ(16px)' }}
          />
        </div>
      </div>

      {/* Text Container */}
      <div className="flex flex-col justify-center">
        <span className="text-white font-bold text-sm leading-tight tracking-wide">DLSBox</span>
        <span className="text-white/60 text-[9px] uppercase tracking-widest leading-tight mt-[1px]">
          Soluções Digitais
        </span>
      </div>
    </div>
  )
}
