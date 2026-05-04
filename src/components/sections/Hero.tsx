import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [startTyping, setStartTyping] = useState(false)
  const [typedText, setTypedText] = useState('')

  const fullText = 'Apps, SaaS e sistemas construídos com rigor técnico e visão de produto.'

  useLayoutEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    const content = contentRef.current

    if (!section || !video || !content) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const context = gsap.context(() => {
      const badge = content.querySelector('.hero-badge')
      const lines = gsap.utils.toArray<HTMLElement>('.hero-line')
      const premium = content.querySelector('.hero-premium')
      const description = content.querySelector('.hero-description')
      const buttons = gsap.utils.toArray<HTMLElement>('.hero-actions .btn')

      if (prefersReducedMotion) {
        gsap.set([lines, description, buttons], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        })
        gsap.set(video, { scale: 1.02, y: 0 })
        return
      }

      gsap.set(video, {
        scale: 1.02,
        y: 0,
        transformOrigin: 'center center',
      })
      gsap.set(lines, { autoAlpha: 0, y: 42, filter: 'blur(12px)' })
      gsap.set(premium, { scale: 0.96, transformOrigin: 'left center' })
      gsap.set(description, { autoAlpha: 0, y: 22, filter: 'blur(8px)' })
      gsap.set(buttons, { autoAlpha: 0, y: 18 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        .to(
          lines,
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            stagger: 0.16,
          },
        )
        .to(
          premium,
          {
            scale: 1,
            duration: 0.72,
          },
          '<',
        )
        .to(
          description,
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.75,
          },
          '-=0.24',
        )
        .to(
          buttons,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
          },
          '-=0.34',
        )

      ScrollTrigger.create({
        animation: tl,
        trigger: section,
        start: 'top center',
        toggleActions: 'play reverse play reverse',
        onEnter: () => setStartTyping(true),
        onLeaveBack: () => setStartTyping(false),
      })

      gsap.to(video, {
        scale: 1.08,
        y: 70,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to(content, {
        opacity: 0.25,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, section)

    return () => context.revert()
  }, [])

  useEffect(() => {
    if (startTyping) {
      setTypedText('')
      let i = 0
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
        }
      }, 50)
      return () => clearInterval(timer)
    } else {
      setTypedText('')
    }
  }, [startTyping, fullText])

  return (
    <section
      ref={sectionRef}
      className="hero-full-video relative flex min-h-screen items-center overflow-hidden bg-[#050b16] px-6 pb-16 pt-32 md:px-12 md:pb-20 md:pt-36"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="hero-bg-video absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/DLSBoxHeroScene.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(5,11,22,0.72)_0%,rgba(5,11,22,0.55)_44%,rgba(5,11,22,0.38)_100%)] md:bg-[linear-gradient(90deg,rgba(5,11,22,0.76)_0%,rgba(5,11,22,0.54)_30%,rgba(5,11,22,0.22)_58%,rgba(5,11,22,0.06)_100%)]" />
      <div className="hero-vignette pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_48%,rgba(0,0,0,0.22)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-[#050b16]/36 to-transparent" />

      <div
        ref={contentRef}
        className="hero-content relative z-[3] mx-auto w-full max-w-[1180px] text-white"
      >
        <div className="max-w-[760px]">
          <h1
            className="hero-title m-0 text-[clamp(42px,13vw,64px)] font-[750] leading-[0.94] tracking-[-0.055em] text-white md:text-[clamp(52px,7vw,96px)] md:leading-[0.92]"
            style={{
              fontFamily: '"Sora", "Manrope", "Plus Jakarta Sans", system-ui, sans-serif',
              textShadow: '0 10px 30px rgba(0,0,0,0.35)',
            }}
          >
            <span className="hero-line block opacity-0 will-change-[transform,opacity,filter]">
              Desenvolvimento digital
            </span>
            <span
              className="hero-line hero-premium block font-display font-semibold italic text-[#60a5fa] opacity-0 will-change-[transform,opacity,filter]"
              style={{
                fontFamily: '"Playfair Display", "Cormorant Garamond", serif',
                textShadow: '0 0 26px rgba(96,165,250,0.22)',
              }}
            >
              premium
            </span>
            <span className="hero-line block opacity-0 will-change-[transform,opacity,filter]">
              para produtos reais.
            </span>
          </h1>

          <p
            className="hero-description mt-6 max-w-[560px] text-base font-semibold leading-[1.75] text-[#60a5fa] opacity-0 will-change-[transform,opacity,filter]"
            style={{
              fontFamily: '"Inter", "Plus Jakarta Sans", system-ui, sans-serif',
              textShadow: '0 8px 24px rgba(0,0,0,0.28)',
            }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <div
            className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ fontFamily: '"Inter", "Plus Jakarta Sans", system-ui, sans-serif' }}
          >
            <a
              href="https://wa.me/447858632888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white opacity-0 shadow-[0_8px_28px_rgba(37,99,235,0.34)] transition-all duration-200 will-change-[transform,opacity] hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_12px_34px_rgba(37,99,235,0.46)]"
            >
              Falar sobre meu projeto
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@dlsbox.com"
              className="btn inline-flex items-center justify-center rounded-full border border-white/22 bg-white/[0.08] px-7 py-3.5 font-semibold text-white opacity-0 shadow-[0_8px_28px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-200 will-change-[transform,opacity] hover:-translate-y-0.5 hover:bg-white/14"
            >
              Ver soluções agora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
