import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { EASE } from './motion'
import { waLink } from '../config'

// Aviso exibido ao abrir um serviço, até os detalhes e valores ficarem prontos
export default function ServiceNotice({ name, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!name) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [name, onClose])

  return (
    <AnimatePresence>
      {name && (
        <motion.div
          key="notice"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050d08]/75 p-6 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.7, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-ground p-8 text-center text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-10"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Fechar aviso"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-mute transition-colors duration-500 hover:bg-ink/10 hover:text-ink"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
            <p className="text-sm text-wood">{name}</p>
            <h3 id="notice-title" className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Em breve
            </h3>
            <p className="mt-4 leading-[1.7] text-mute">
              Estamos preparando os detalhes e os valores deste serviço. Enquanto isso, você pode tirar suas
              dúvidas e agendar pelo WhatsApp.
            </p>
            <a
              href={waLink(`Olá! Vi o site do Natu Soul SPA e quero agendar ${name}. Quais horários vocês têm?`)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-ground transition-all duration-700 hover:shadow-[0_12px_40px_-12px_rgb(var(--wood)/0.6)] active:scale-[0.98]"
            >
              <WhatsAppIcon size={20} />
              Falar no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
