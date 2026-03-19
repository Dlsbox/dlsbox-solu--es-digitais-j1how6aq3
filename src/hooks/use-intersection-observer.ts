import { useEffect, useState, RefObject } from 'react'

interface Args extends IntersectionObserverInit {
  triggerOnce?: boolean
}

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  { threshold = 0, root = null, rootMargin = '0%', triggerOnce = false }: Args,
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const node = elementRef?.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        if (triggerOnce && isElementIntersecting) {
          setIsIntersecting(true)
          observer.unobserve(node)
        } else if (!triggerOnce) {
          setIsIntersecting(isElementIntersecting)
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [elementRef, threshold, root, rootMargin, triggerOnce])

  return isIntersecting
}
