import { MouseEvent } from 'react'

type ViewTransitionDocument = Document & {
  startViewTransition?: (
    options: (() => void) | { update: () => void; types?: string[] },
  ) => { ready: Promise<void>; finished: Promise<void> }
}

function setTransitionOrigin(event: MouseEvent<HTMLElement>) {
  document.documentElement.style.setProperty('--view-transition-x', `${event.clientX}px`)
  document.documentElement.style.setProperty('--view-transition-y', `${event.clientY}px`)
}

function scrollToSection(href: string) {
  const element = document.querySelector(href)
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function useViewTransitionNav() {
  const handleSectionClick = (event: MouseEvent<HTMLElement>, href: string) => {
    event.preventDefault()
    setTransitionOrigin(event)

    const doc = document as ViewTransitionDocument
    const supportsVT =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (supportsVT && doc.startViewTransition) {
      document.documentElement.style.viewTransitionName = 'root'
      const transition = doc.startViewTransition({
        update: () => scrollToSection(href),
        types: ['circular-wipe'],
      })
      transition.finished.finally(() => {
        document.documentElement.style.viewTransitionName = ''
      })
      return
    }

    scrollToSection(href)
  }

  const handleLinkClick = (event: MouseEvent<HTMLElement>) => {
    setTransitionOrigin(event)
  }

  return { handleSectionClick, handleLinkClick }
}
