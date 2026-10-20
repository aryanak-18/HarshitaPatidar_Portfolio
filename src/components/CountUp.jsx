import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

// Counts the numeric part of a value like "16.4%", "12K+" or "5.6x" up from zero when visible.
export default function CountUp({ value, duration = 1.8, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/)
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value)

  useEffect(() => {
    if (!inView || !match) return
    const [, prefix, number, suffix] = match
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return setDisplay(value)
    const decimals = (number.split('.')[1] || '').length
    const controls = animate(0, parseFloat(number), {
      duration,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`),
    })
    return () => controls.stop()
  }, [inView])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  )
}
