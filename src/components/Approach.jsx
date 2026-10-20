import { motion } from 'framer-motion'
import { approach } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Approach() {
  return (
    <section id="approach" className="section">
      <div className="wrap">
        <SectionHeader index="04" label="Approach" title={approach.title} intro={approach.intro} />

        {/* Pipeline bar that fills step by step as it scrolls into view */}
        <div className="relative mb-6 hidden h-[3px] overflow-hidden rounded-full bg-line lg:block" aria-hidden="true">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
            transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
            className="h-full origin-left bg-gradient-to-r from-accent via-pop-green to-pop-lime"
          />
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map(([title, copy], i) => (
            <Reveal as="li" key={title} delay={i * 150}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_48px_-28px_rgba(14,26,43,.35)] md:min-h-[300px]">
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-accent-wash to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative flex items-center justify-between">
                <span className="font-mono text-xs text-accent">Step {String(i + 1).padStart(2, '0')}</span>
                <span className="text-gradient font-serif text-[44px] italic leading-none">{i + 1}</span>
              </span>
              <h3 className="relative mt-8 font-serif text-[23px] leading-[1.2] tracking-[-.01em]">{title}</h3>
              <p className="relative mt-3 text-[15px] leading-[1.7]">{copy}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
