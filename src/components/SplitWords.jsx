import { Fragment } from 'react'
import { motion } from 'framer-motion'

const word = {
  hidden: { y: '115%' },
  show: ({ delay, i, stagger }) => ({
    y: 0,
    transition: { duration: 0.9, delay: delay + i * stagger, ease: [0.2, 0.8, 0.2, 1] },
  }),
}

// Slides each word up from behind a mask, one after another.
// The unclipped wrapper is what gets observed, so the trigger works even though each word starts hidden.
// `onView` waits until the text scrolls into view; otherwise it plays on mount.
export default function SplitWords({ text, delay = 0, stagger = 0.06, onView = true, wordClassName = '' }) {
  const words = text.split(' ').filter(Boolean)
  const trigger = onView ? { whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } } : { animate: 'show' }

  return (
    <motion.span initial="hidden" {...trigger}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="-mb-[.16em] inline-block overflow-hidden pb-[.16em] align-bottom">
            <motion.span className={`inline-block ${wordClassName}`} variants={word} custom={{ delay, i, stagger }}>
              {w}
            </motion.span>
          </span>
          {(i < words.length - 1 || text.endsWith(' ')) && ' '}
        </Fragment>
      ))}
    </motion.span>
  )
}
