import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, SunMedium } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignore */ }
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-rule/20 bg-ground/60 text-ink backdrop-blur-md transition-colors duration-700 hover:bg-ground/80"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {dark ? <SunMedium size={19} strokeWidth={1.5} /> : <Moon size={19} strokeWidth={1.5} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
