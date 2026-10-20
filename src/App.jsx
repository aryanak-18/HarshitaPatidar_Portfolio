import { useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { initSmoothScroll } from './lib/smoothScroll'
import Aurora from './components/Aurora'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Approach from './components/Approach'
import Credentials from './components/Credentials'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {/* Page-wide glow so every section carries the dark aurora, not just hero and contact */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
        <Aurora dark />
      </div>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Approach />
        <Credentials />
        <Contact />
      </main>
    </MotionConfig>
  )
}
