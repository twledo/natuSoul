export const EASE = [0.22, 1, 0.36, 1]

export const surface = {
  initial: { opacity: 0, y: 28, filter: 'blur(10px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-10% 0px' },
}

export const slow = (delay = 0, duration = 1.4) => ({ duration, delay, ease: EASE })
