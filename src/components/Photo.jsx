import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EASE } from './motion'

// Foto que se revela por uma máscara suave e se move devagar com a rolagem
export default function Photo({ src, alt, className = '', speed = 40, position = 'object-center', anchor = 'center' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], anchor === 'bottom' ? [0, speed] : [-speed, speed])

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: 'inset(12% 12% 12% 12% round 28px)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 28px)', opacity: 1 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 1.8, ease: EASE }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, height: `calc(100% + ${speed * 2}px)`, marginTop: anchor === 'bottom' ? -speed * 2 : -speed }}
        className={`w-full max-w-none object-cover ${position}`}
      />
    </motion.div>
  )
}
