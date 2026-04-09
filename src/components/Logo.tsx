import { cn } from '@/lib/utils'
import logoImg from '../assets/1000329977-8caf1.png'

export function Logo({ className }: { className?: string }) {
  return (
    <img src={logoImg} alt="DLSBox Soluções Digitais" className={cn('object-contain', className)} />
  )
}
