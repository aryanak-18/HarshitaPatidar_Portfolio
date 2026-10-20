import Lenis from 'lenis'

let lenis = null

const headerOffset = () => (document.querySelector('header')?.offsetHeight ?? 72) - 1

// Glide to a section (or the top). Measures against the live scroll position, not Lenis's
// internal one, in case they've drifted.
export function scrollToId(id) {
  const el = id ? document.getElementById(id) : null
  const y = el ? el.getBoundingClientRect().top + window.scrollY - headerOffset() : 0
  if (lenis) lenis.scrollTo(y)
  else window.scrollTo({ top: y, behavior: 'smooth' })
}

// Inertial smooth scrolling. Skipped for users who prefer reduced motion.
export function initSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  let frame
  const loop = (time) => {
    lenis.raf(time)
    frame = requestAnimationFrame(loop)
  }
  frame = requestAnimationFrame(loop)

  // Route in-page anchor links through Lenis so they glide instead of jump.
  const onClick = (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    const hash = link.getAttribute('href')
    const id = hash === '#top' || hash === '#' ? null : hash.slice(1)
    if (id && !document.getElementById(id)) return
    e.preventDefault()
    scrollToId(id)
    history.replaceState(null, '', hash)
  }
  document.addEventListener('click', onClick)

  return () => {
    cancelAnimationFrame(frame)
    document.removeEventListener('click', onClick)
    lenis.destroy()
    lenis = null
  }
}

export const pauseScroll = () => lenis?.stop()
export const resumeScroll = () => lenis?.start()
