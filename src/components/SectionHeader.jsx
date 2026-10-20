import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SplitWords from './SplitWords'

export default function SectionHeader({ index, label, title, intro, dark = false }) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal y={12} className={`label flex items-center gap-4 ${dark ? '!text-white/60' : ''}`}>
        <span className={dark ? 'text-accent-light' : 'text-accent'}>{index}</span>
        <span>{label}</span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className={`h-px flex-1 origin-left ${dark ? 'bg-gradient-to-r from-accent-light/60 to-white/5' : 'bg-gradient-to-r from-accent/50 to-line'}`}
        />
      </Reveal>
      {title && (
        <h2 className={`display mt-8 max-w-[820px] text-[clamp(32px,4.4vw,52px)] leading-[1.08] ${dark ? '!text-white' : ''}`}>
          <SplitWords text={title} delay={0.1} stagger={0.05} />
        </h2>
      )}
      {intro && (
        <Reveal delay={250} className={`mt-5 max-w-[640px] text-[17px] leading-[1.7] ${dark ? 'text-white/70' : ''}`}>
          <p>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
