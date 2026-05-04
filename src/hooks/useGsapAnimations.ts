import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Titles
      gsap.utils.toArray<HTMLElement>('.reveal-title').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          filter: 'blur(4px)',
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
        })
      })

      // Paragraphs / text blocks
      gsap.utils.toArray<HTMLElement>('.reveal-text').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 18,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
        })
      })

      // Cards — staggered per parent grid
      const cardGroups = new Map<Element, HTMLElement[]>()
      gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((el) => {
        const parent = el.parentElement ?? document.body
        if (!cardGroups.has(parent)) cardGroups.set(parent, [])
        cardGroups.get(parent)!.push(el)
      })

      cardGroups.forEach((cards, parent) => {
        gsap.from(cards, {
          opacity: 0,
          y: 32,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: parent,
            start: 'top 88%',
            once: true,
          },
        })
      })

      ScrollTrigger.refresh()
    })

    return () => {
      ctx.revert()
    }
  }, [])
}
