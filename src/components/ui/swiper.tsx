import React, { useEffect, useRef } from 'react'
import { Swiper as SwiperType } from 'swiper/types'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { cn } from '@/lib/utils'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface SwiperProps {
  children: React.ReactNode
  className?: string
  options?: any
  onSwiper?: (swiper: SwiperType) => void
  navigation?: boolean
  pagination?: boolean | object
  scrollbar?: boolean | object
  modules?: any[]
}

export function Swiper({
  children,
  className,
  options = {},
  onSwiper,
  navigation = false,
  pagination = false,
  scrollbar = false,
  modules = []
}: SwiperProps) {
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperInstanceRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (!swiperRef.current) return

    // Dynamically import Swiper to avoid SSR issues
    import('swiper').then(({ default: Swiper }) => {
      const defaultModules = [A11y]

      if (navigation) defaultModules.push(Navigation)
      if (pagination) defaultModules.push(Pagination)
      if (scrollbar) defaultModules.push(Scrollbar)

      const allModules = [...defaultModules, ...modules]

      swiperInstanceRef.current = new Swiper(swiperRef.current!, {
        modules: allModules,
        navigation: navigation ? {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        } : false,
        pagination: pagination ? {
          el: '.swiper-pagination',
          clickable: true,
          ...(typeof pagination === 'object' ? pagination : {}),
        } : false,
        scrollbar: scrollbar ? {
          el: '.swiper-scrollbar',
          ...(typeof scrollbar === 'object' ? scrollbar : {}),
        } : false,
        ...options,
      })

      if (onSwiper) {
        onSwiper(swiperInstanceRef.current)
      }
    })

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy()
      }
    }
  }, [options, onSwiper, navigation, pagination, scrollbar, modules])

  return (
    <div ref={swiperRef} className={cn('swiper', className)}>
      <div className="swiper-wrapper">
        {React.Children.map(children, (child, index) => (
          <div key={index} className="swiper-slide">
            {child}
          </div>
        ))}
      </div>
      {pagination && <div className="swiper-pagination"></div>}
      {navigation && (
        <>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </>
      )}
      {scrollbar && <div className="swiper-scrollbar"></div>}
    </div>
  )
}

export function SwiperSlide({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('swiper-slide', className)}>
      {children}
    </div>
  )
}