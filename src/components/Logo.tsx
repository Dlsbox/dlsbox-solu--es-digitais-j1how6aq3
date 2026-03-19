import { cn } from '@/lib/utils'
import { Meteors } from './Meteors'

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden flex items-center justify-center bg-[#0E0E12] rounded-xl transition-all duration-300 hover:scale-105 hover:brightness-110',
        className,
      )}
    >
      <Meteors number={30} />

      {/* SVG Container on top */}
      <svg
        viewBox="0 0 340 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full relative z-10 block"
      >
        {/* Geometric Box Shapes using Logo Palette */}
        <g transform="translate(20, 12)">
          <path d="M24 28 L0 14 L0 42 L24 56 Z" fill="#1940C8" />
          <path d="M24 28 L48 14 L48 42 L24 56 Z" fill="#2B52E0" />
          <path d="M24 0 L48 14 L24 28 L0 14 Z" fill="#F0EBE1" />
          <path d="M24 7 L36 14 L24 21 L12 14 Z" fill="#5C3518" />
        </g>

        {/* Main Text */}
        <text
          x="84"
          y="48"
          fontFamily="Outfit, sans-serif"
          fontWeight="800"
          fontSize="46"
          fill="#F0EBE1"
        >
          DLSBox
        </text>

        {/* Subtitle Text */}
        <text
          x="88"
          y="64"
          fontFamily="Outfit, sans-serif"
          fontWeight="400"
          fontSize="11"
          fill="rgba(240,235,225,0.8)"
          letterSpacing="3.5"
        >
          SOLUÇÕES DIGITAIS
        </text>
      </svg>
    </div>
  )
}
