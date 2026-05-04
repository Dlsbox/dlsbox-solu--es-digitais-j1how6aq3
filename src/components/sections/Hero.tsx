import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%&*!'
const GLITCH_TARGET = 'Soluções Digitais'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const raysRef = useRef<HTMLDivElement>(null)
  const [startTyping, setStartTyping] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [introVisible, setIntroVisible] = useState(true)
  const [introDismissed, setIntroDismissed] = useState(false)
  const [startGlitch, setStartGlitch] = useState(false)
  const [glitchedText, setGlitchedText] = useState('')

  const fullText = 'Apps, SaaS e sistemas construídos com rigor técnico e visão de produto.'

  useLayoutEffect(() => {
    const intro = introRef.current
    const rays = raysRef.current

    if (!intro) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setGlitchedText(GLITCH_TARGET)
      setStartGlitch(true)
      return
    }

    const context = gsap.context(() => {
      const introItems = gsap.utils.toArray<HTMLElement>('.hero-intro-item')

      gsap.set(introItems, {
        autoAlpha: 0,
        y: 24,
        scale: 0.98,
        filter: 'blur(10px)',
      })

      if (rays) {
        gsap.to(rays, {
          rotation: 360,
          transformOrigin: 'center center',
          duration: 80,
          repeat: -1,
          ease: 'none',
        })
      }

      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .to(introItems, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: 0.14,
        })
        .call(() => setStartGlitch(true), [], '<+0.1')
    }, intro)

    return () => context.revert()
  }, [])

  useLayoutEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    const content = contentRef.current

    if (!section || !video || !content) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const context = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('.hero-line')
      const premium = content.querySelector('.hero-premium')
      const description = content.querySelector('.hero-description')
      const buttons = gsap.utils.toArray<HTMLElement>('.hero-actions .btn')

      gsap.set(video, {
        scale: 1.02,
        y: 0,
        transformOrigin: 'center center',
      })

      if (!introDismissed) {
        gsap.set(lines, { autoAlpha: 0, y: 42, filter: 'blur(12px)' })
        gsap.set(premium, { scale: 0.96, transformOrigin: 'left center' })
        gsap.set(description, { autoAlpha: 0, y: 22, filter: 'blur(8px)' })
        gsap.set(buttons, { autoAlpha: 0, y: 18 })
        return
      }

      if (prefersReducedMotion) {
        gsap.set([lines, description, buttons], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        })
        setStartTyping(true)
        return
      }

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

      tl.eventCallback('onComplete', () => setStartTyping(true))

      ScrollTrigger.refresh()

      const parallaxVideo = gsap.to(video, {
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

      const parallaxContent = gsap.to(content, {
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

      return () => {
        parallaxVideo.scrollTrigger?.kill()
        parallaxContent.scrollTrigger?.kill()
      }
    }, section)

    return () => context.revert()
  }, [introDismissed])

  const handleEnter = () => {
    const intro = introRef.current
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!intro || prefersReducedMotion) {
      setIntroVisible(false)
      setIntroDismissed(true)
      return
    }

    gsap.to(intro, {
      autoAlpha: 0,
      scale: 1.045,
      filter: 'blur(18px)',
      duration: 0.78,
      ease: 'power3.inOut',
      pointerEvents: 'none',
      onComplete: () => {
        setIntroVisible(false)
        setIntroDismissed(true)
      },
    })
  }

  useEffect(() => {
    if (!startGlitch) {
      setGlitchedText('')
      return
    }

    const text = GLITCH_TARGET
    const totalDuration = 1800
    const intervalMs = 40
    const totalFrames = totalDuration / intervalMs
    let frame = 0

    const timer = setInterval(() => {
      const progress = frame / totalFrames
      const lockedUpTo = Math.floor(progress * text.length)

      let result = ''
      for (let i = 0; i < text.length; i++) {
        if (i < lockedUpTo) {
          result += text[i]
        } else if (text[i] === ' ') {
          result += ' '
        } else {
          result += GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        }
      }
      setGlitchedText(result)
      frame++
      if (frame > totalFrames) {
        setGlitchedText(text)
        clearInterval(timer)
      }
    }, intervalMs)

    return () => clearInterval(timer)
  }, [startGlitch])

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

      {introVisible && (
        <div
          ref={introRef}
          className="hero-intro absolute inset-0 z-[20] flex items-center justify-center overflow-hidden bg-[#050b16] px-6 text-white"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.13),transparent_55%)]" />
          <div
            ref={raysRef}
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(96,165,250,0.06) 2deg, transparent 4deg, transparent 45deg, rgba(96,165,250,0.06) 47deg, transparent 49deg, transparent 90deg, rgba(96,165,250,0.06) 92deg, transparent 94deg, transparent 135deg, rgba(96,165,250,0.06) 137deg, transparent 139deg, transparent 180deg, rgba(96,165,250,0.06) 182deg, transparent 184deg, transparent 225deg, rgba(96,165,250,0.06) 227deg, transparent 229deg, transparent 270deg, rgba(96,165,250,0.06) 272deg, transparent 274deg, transparent 315deg, rgba(96,165,250,0.06) 317deg, transparent 319deg)',
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:46px_46px] opacity-30" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
            <p className="hero-intro-item mb-5 font-display text-[clamp(18px,4vw,32px)] font-extrabold tracking-[0.12em] uppercase text-white/60">
              DLS<span className="text-[#60a5fa]">Box</span>
            </p>

            <div className="hero-intro-item">
              <h2 className="font-display text-[clamp(52px,14vw,140px)] font-extrabold leading-none tracking-[-0.06em] text-white drop-shadow-[0_0_60px_rgba(96,165,250,0.35)]">
                {glitchedText || ' '}
              </h2>
            </div>

            <div
              className="hero-intro-item mt-2 h-px w-2/3 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"
              style={{ boxShadow: '0 0 22px 4px rgba(96,165,250,0.38)' }}
            />

            <button
              type="button"
              onClick={handleEnter}
              className="hero-intro-item mt-10 inline-flex items-center justify-center rounded-full border border-sky-200/45 bg-[#60a5fa] px-8 py-3.5 text-sm font-bold text-[#050b16] shadow-[0_18px_52px_rgba(96,165,250,0.34)] outline-none transition duration-200 hover:-translate-y-0.5 hover:bg-sky-300 focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050b16]"
              aria-label="Entrar e revelar o vídeo principal"
            >
              Entrar
            </button>
          </div>
        </div>
      )}

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
