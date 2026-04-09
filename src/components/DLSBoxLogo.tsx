import { cn } from '@/lib/utils'

type DLSBoxLogoProps = {
  width?: number | string
  showSubtitle?: boolean
  className?: string
}

export default function DLSBoxLogo({ width, showSubtitle = true, className }: DLSBoxLogoProps) {
  const defaultWidth = 520
  const height = showSubtitle ? 180 : 140
  const isDefault = width === undefined

  return (
    <svg
      width={width || '100%'}
      height={isDefault ? 'auto' : (Number(width) / defaultWidth) * height}
      viewBox="0 0 520 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo DLSBox Soluções Digitais"
      className={cn(
        'transition-transform duration-700 hover:scale-[1.02]',
        'animate-in fade-in slide-in-from-top-4 duration-1000 ease-out',
        isDefault && 'w-full max-w-[300px] sm:max-w-[380px] md:max-w-[520px]',
        className,
      )}
    >
      <defs>
        <linearGradient
          id="bgGradient"
          x1="0"
          y1="0"
          x2="520"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#07111E" />
          <stop offset="100%" stop-color="#101A28" />
        </linearGradient>

        <linearGradient
          id="blueFace"
          x1="40"
          y1="60"
          x2="130"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#1E5C95" />
          <stop offset="100%" stop-color="#123D66" />
        </linearGradient>

        <linearGradient
          id="brownFace"
          x1="130"
          y1="60"
          x2="220"
          y2="150"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#8C6542" />
          <stop offset="100%" stop-color="#5F4128" />
        </linearGradient>

        <linearGradient
          id="topFace"
          x1="85"
          y1="20"
          x2="130"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#FFFFFF" />
          <stop offset="100%" stop-color="#E7E7E7" />
        </linearGradient>

        <filter id="shadow" x="0" y="0" width="260" height="180" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.35" />
        </filter>

        <filter id="textShadow" x="0" y="0" width="520" height="180" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.35" />
        </filter>
      </defs>

      <rect x="0" y="0" width="520" height="180" rx="24" fill="url(#bgGradient)" />

      <g filter="url(#shadow)">
        {/* Fundo escuro para o recorte (gaps) */}
        <polygon points="85,20 155,58 155,115 100,150 30,115 30,56" fill="#0B0F14" />

        {/* Topo do cubo */}
        <polygon
          points="85,18 155,56 100,90 30,54"
          fill="url(#topFace)"
          stroke="#E7E7E7"
          stroke-width="1.5"
          stroke-linejoin="round"
        />

        {/* Face azul */}
        <polygon
          points="28,57 98,93 98,151 28,116"
          fill="url(#blueFace)"
          stroke="#123D66"
          stroke-width="1.5"
          stroke-linejoin="round"
        />

        {/* Face marrom */}
        <polygon
          points="157,59 102,93 102,151 157,116"
          fill="url(#brownFace)"
          stroke="#5F4128"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </g>

      <g filter="url(#textShadow)">
        <text
          x="190"
          y="92"
          fill="#FFFFFF"
          font-size="52"
          font-weight="700"
          font-family="Arial, Helvetica, sans-serif"
          letter-spacing="0.5"
        >
          DLSBox
        </text>

        {showSubtitle && (
          <text
            x="190"
            y="132"
            fill="#F1F1F1"
            font-size="24"
            font-weight="400"
            font-family="Arial, Helvetica, sans-serif"
            letter-spacing="3"
          >
            SOLUÇÕES DIGITAIS
          </text>
        )}
      </g>
    </svg>
  )
}
