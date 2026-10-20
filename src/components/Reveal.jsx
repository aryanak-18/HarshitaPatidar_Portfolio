import { motion } from 'framer-motion'

// Fades and lifts content the first time it scrolls into view.
export default function Reveal({ as = 'div', delay = 0, y = 28, className = '', children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  )
}
