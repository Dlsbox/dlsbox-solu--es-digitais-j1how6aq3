import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type DLSBoxLogoProps = {
  width?: number | string
  showSubtitle?: boolean
  className?: string
}

export default function DLSBoxLogo({ width, showSubtitle = true, className }: DLSBoxLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(entry.contentRect.width / 520)
      }
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const isDefault = width === undefined

  return (
    <div
      ref={containerRef}
      style={{
        width: width || '100%',
        maxWidth: isDefault ? '520px' : 'none',
        aspectRatio: showSubtitle ? '520/180' : '520/140',
      }}
      className={cn(
        'relative overflow-visible',
        isDefault && 'w-full max-w-[300px] sm:max-w-[380px] md:max-w-[520px]',
        className,
      )}
      aria-label="Logo DLSBox Soluções Digitais"
      role="img"
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          width: 520,
          height: showSubtitle ? 180 : 140,
        }}
        className="absolute inset-0 flex items-center select-none pointer-events-none"
      >
        {/* Glows Ambientais */}
        <div className="absolute left-[30px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(29,117,203,0.18)_0%,rgba(29,117,203,0.05)_42%,rgba(0,0,0,0)_75%)] blur-[20px] z-0 animate-ambient-glow" />
        <div className="absolute left-[20px] bottom-[-10px] w-[180px] h-[36px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.06)_55%,rgba(0,0,0,0)_100%)] blur-[10px] z-0" />
        <div className="absolute left-[30px] bottom-[5px] w-[160px] h-[65px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.82)_0%,rgba(37,99,235,0.26)_38%,rgba(37,99,235,0.05)_72%,rgba(0,0,0,0)_100%)] blur-[18px] z-0 animate-floor-glow" />

        {/* Palco do Cubo 3D */}
        <div className="relative w-[180px] h-[180px] flex items-center justify-center [perspective:1200px] z-10 -ml-2">
          <div className="relative w-[120px] h-[120px] [transform-style:preserve-3d] animate-cube-wrap">
            <div className="relative w-full h-full [transform-style:preserve-3d] animate-cube-spin">
              {/* Face Traseira Interna */}
              <div
                className="absolute w-[120px] h-[120px] rounded-[4px] overflow-hidden [backface-visibility:hidden]"
                style={{
                  transform: 'translateZ(0px) scale(0.96)',
                  background: 'linear-gradient(145deg, rgba(20,20,24,0.95), rgba(8,8,10,0.92))',
                  boxShadow:
                    'inset 0 0 30px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.03)',
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0)_45%,rgba(0,0,0,0.14)_100%)]" />
              </div>

              {/* Face do Topo */}
              <div
                className="absolute w-[120px] h-[120px] rounded-[4px] overflow-hidden [backface-visibility:hidden] animate-face-top z-[3]"
                style={{
                  background: 'linear-gradient(145deg, #ffffff 0%, #ededed 58%, #d2d2d2 100%)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 1px 10px rgba(255,255,255,0.10), 0 12px 25px rgba(0,0,0,0.22)',
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0)_45%,rgba(0,0,0,0.14)_100%)]" />
              </div>

              {/* Face Azul */}
              <div
                className="absolute w-[120px] h-[120px] rounded-[4px] overflow-hidden [backface-visibility:hidden] animate-face-blue z-[2]"
                style={{
                  background: 'linear-gradient(145deg, #1d75cb 0%, #0c5aa6 55%, #083a71 100%)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 1px 10px rgba(255,255,255,0.10), 0 12px 25px rgba(0,0,0,0.22)',
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0)_45%,rgba(0,0,0,0.14)_100%)]" />
              </div>

              {/* Face Marrom */}
              <div
                className="absolute w-[120px] h-[120px] rounded-[4px] overflow-hidden [backface-visibility:hidden] animate-face-brown z-[1]"
                style={{
                  background: 'linear-gradient(145deg, #b77f4d 0%, #8a5428 55%, #4f2f19 100%)',
                  boxShadow:
                    'inset 0 0 0 1px rgba(255,255,255,0.18), inset 0 1px 10px rgba(255,255,255,0.10), 0 12px 25px rgba(0,0,0,0.22)',
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0)_45%,rgba(0,0,0,0.14)_100%)]" />
              </div>

              {/* Arestas Iluminadas */}
              <div className="absolute w-[112.5px] h-[1.5px] top-[27px] left-[9px] -rotate-[27deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.38),rgba(255,255,255,0.06))] blur-[0.3px] z-[5] animate-edge-in" />
              <div className="absolute w-[103.5px] h-[1.5px] top-[27.75px] left-[30px] rotate-[27deg] bg-[linear-gradient(90deg,rgba(255,255,255,0.28),rgba(255,255,255,0.04))] blur-[0.3px] z-[5] animate-edge-in" />
              <div className="absolute w-[1.5px] h-[94.5px] top-[31.5px] left-[94.5px] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(0,0,0,0.16))] blur-[0.3px] z-[5] animate-edge-in" />
            </div>
          </div>
        </div>

        {/* Tipografia */}
        <div className="ml-4 flex flex-col justify-center animate-title-in h-full pt-4">
          <h1
            className="text-[64px] leading-[0.9] tracking-[-0.04em] font-semibold text-foreground dark:text-zinc-100"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            DLS<span className="text-[#8a5428] italic font-medium">Box</span>
          </h1>
          {showSubtitle && (
            <p className="text-[18px] mt-2 font-medium tracking-[0.25em] text-muted-foreground uppercase dark:text-zinc-400">
              Soluções Digitais
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
