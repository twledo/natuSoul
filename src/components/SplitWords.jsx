import { motion } from 'framer-motion'
import { EASE } from './motion'

const list = (delay) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: delay } },
})
const word = {
  hidden: { y: '115%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 1.3, ease: EASE } },
}

// Cada palavra sobe de uma máscara, uma depois da outra
export default function SplitWords({ text, as = 'h2', className = '', delay = 0, onMount = false }) {
  const Tag = motion[as]
  const trigger = onMount
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: { once: true, margin: '-10% 0px' } }

  return (
    <Tag variants={list(delay)} initial="hidden" {...trigger} aria-label={text} className={className}>
      {text.split(' ').map((w, i, arr) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.14em] align-bottom -mb-[0.14em]">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < arr.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
