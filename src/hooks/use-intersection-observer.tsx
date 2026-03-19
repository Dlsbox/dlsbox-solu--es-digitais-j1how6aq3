import { useEffect, useState, RefObject } from 'react'

interface Args extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  { threshold = 0, root = null, rootMargin = '0%', triggerOnce = false }: Args,
): boolean {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
        if (entry.isIntersecting && triggerOnce) {
          observer.unobserve(element)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, threshold, root, rootMargin, triggerOnce])

  return isIntersecting
}
