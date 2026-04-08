import { useEffect } from 'react'

export function useScrollFadeOpacity(
  targetRef: React.RefObject<HTMLElement | null>,
  startOffset: number = 0.75,
  endOffset: number = 0.25,
) {
  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    let isIntersecting = false
    let animationFrameId: number

    const updateOpacity = () => {
      if (!isIntersecting || !targetRef.current) return

      const rect = targetRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      const elementTop = rect.top
      const startFade = windowHeight * startOffset
      const endFade = windowHeight * endOffset

      let newOpacity = 1
      if (elementTop > startFade) {
        newOpacity = 1
      } else if (elementTop < endFade) {
        newOpacity = 0
      } else {
        newOpacity = (elementTop - endFade) / (startFade - endFade)
      }

      // Directly apply styles to the DOM node for extremely high-performance scrolling
      // without triggering React state updates and re-renders
      targetRef.current.style.opacity = newOpacity.toString()

      animationFrameId = requestAnimationFrame(updateOpacity)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        isIntersecting = entry.isIntersecting

        if (isIntersecting) {
          animationFrameId = requestAnimationFrame(updateOpacity)
        } else {
          cancelAnimationFrame(animationFrameId)
        }
      },
      {
        root: null,
        threshold: 0,
        // Track the element well before it enters and after it leaves the screen
        rootMargin: '100% 0px 100% 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [targetRef, startOffset, endOffset])
}
