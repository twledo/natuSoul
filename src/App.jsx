import { useRef, useState } from 'react'
import { MotionConfig, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, AtSign, MapPin, Clock } from 'lucide-react'
import logo from './assets/logo.png'
import foto1 from './assets/foto1.webp'
import foto2 from './assets/foto2.webp'
import foto3 from './assets/foto3.webp'
import foto4 from './assets/foto4.webp'
import { SERVICES, ADDRESS, MAPS_URL, HOURS, INSTAGRAM, waLink } from './config'
import Reveal from './components/Reveal'
import SplitWords from './components/SplitWords'
import WhatsAppIcon from './components/WhatsAppIcon'
import ServiceNotice from './components/ServiceNotice'
import Photo from './components/Photo'
import ThemeToggle from './components/ThemeToggle'
import { EASE, slow } from './components/motion'

const YEAR = new Date().getFullYear()

const Cta = ({ children, msg, className = '' }) => (
  <a
    href={waLink(msg)}
    target="_blank"
    rel="noreferrer"
    className={`group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-normal tracking-wide text-ground transition-all duration-700 hover:gap-4 hover:shadow-[0_12px_40px_-12px_rgb(var(--wood)/0.6)] active:scale-[0.98] ${className}`}
  >
    <WhatsAppIcon size={20} />
    {children}
  </a>
)

// Fundo desfocado + foto nítida: a foto baixa resolução continua bonita em telas grandes
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const mx = useMotionValue(0)
  const px = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), { stiffness: 40, damping: 20 })
  const onMove = (e) => mx.set(e.clientX / window.innerWidth - 0.5)

  return (
    <header ref={ref} onPointerMove={onMove} className="relative isolate min-h-[100svh] overflow-hidden bg-[#07110b] text-white">
      <img src={foto2} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-70 blur-3xl brightness-50 saturate-150" />
      <motion.div
        style={{ y, x: px }}
        className="absolute -inset-x-4 inset-y-0 -z-10 lg:left-auto lg:w-[48%] lg:[mask-image:linear-gradient(to_right,transparent,black_38%)]"
      >
        <img src={foto2} alt="Passarela de madeira entre folhagens do Natu Soul SPA" className="animate-drift h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07110b] via-[#07110b]/80 to-[#07110b]/20 lg:bg-gradient-to-r lg:from-[#07110b] lg:via-[#07110b]/30 lg:to-transparent" />

      <div
        aria-hidden
        className="animate-beam pointer-events-none absolute inset-0 -z-10 mix-blend-soft-light"
        style={{ background: 'linear-gradient(105deg, transparent 32%, rgba(255,240,200,0.5) 46%, transparent 60%)' }}
      />

      <motion.div style={{ opacity: fade }} className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-6 pb-28 pt-8 lg:px-16 lg:pb-14">
        <motion.img
          src={logo}
          alt="Natu Soul Estética & SPA"
          width="364"
          height="309"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={slow(0.2, 1.6)}
          className="w-28 brightness-0 invert sm:w-32"
        />

        <div className="max-w-xl pt-24">
          <SplitWords
            as="h1"
            onMount
            delay={0.5}
            text="Um dia para o seu corpo e a sua mente descansarem"
            className="font-display text-[clamp(2.5rem,6.2vw,4.75rem)] leading-[1.06] tracking-[-0.005em]"
          />
          <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={slow(1.5, 1.8)}
            className="mt-8 max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 text-[1.05rem] leading-relaxed text-white/90 backdrop-blur-md"
          >
            Sejam bem-vindos ao Natu Soul SPA! Um lugar aconchegante, com belas paisagens e próximo à natureza,
            com toda a tranquilidade que você busca encontrar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={slow(2, 1.6)}
          >
            <Cta className="mt-8 w-full bg-white !text-[#0f2217] sm:w-auto">Quero agendar meu horário</Cta>
          </motion.div>
        </div>
      </motion.div>
    </header>
  )
}

function Espaco() {
  return (
    <section className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(55% 45% at 82% 35%, rgb(var(--wood) / 0.16), transparent 70%)' }}
      />
      <div className="relative mx-auto grid max-w-7xl items-end gap-14 px-6 py-28 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-40">
        <div className="lg:col-span-6">
          <SplitWords
            text="Um lugar para desacelerar"
            className="font-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.1] tracking-[-0.005em] lg:whitespace-nowrap"
          />
          <Reveal as="p" delay={0.3} className="mt-6 max-w-md text-[1.1rem] leading-[1.7] text-mute">
            Aqui, você terá um dia relaxante para seu corpo e mente para fugir da correria do dia a dia.
          </Reveal>
          <Photo src={foto1} alt="Entrada do Natu Soul SPA com espelho d'água e pedras" speed={16} className="mt-10 aspect-[4/5] w-full max-w-xl" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Photo src={foto4} alt="Recepção em madeira com vista para o jardim" speed={16} anchor="bottom" className="aspect-[452/800] w-full max-w-md lg:ml-auto" />
        </div>
      </div>
    </section>
  )
}

function Linha({ delay = 0 }) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-4% 0px' }}
      transition={{ duration: 1.8, delay, ease: EASE }}
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-[#EAF0E4]/25"
    />
  )
}

function Servicos() {
  const [aberto, setAberto] = useState(null)
  return (
    <>
    <section id="servicos" className="bg-[#10261b] px-6 py-28 text-[#EAF0E4] lg:px-16 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <SplitWords text="Escolha como quer descansar" className="font-display text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.1] tracking-[-0.005em]" />
        <ul className="relative mt-14">
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: EASE }}
            className="absolute inset-x-0 top-0 h-px origin-left bg-[#EAF0E4]/25"
          />
          {SERVICES.map((name, i) => (
            <motion.li
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ duration: 1.2, delay: (i % 3) * 0.08, ease: EASE }}
              className="relative"
            >
              <button
                type="button"
                onClick={() => setAberto(name)}
                aria-label={`Ver detalhes de ${name}`}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
              >
                <span className="flex items-center gap-0 transition-all duration-700 ease-out group-hover:gap-4 group-active:gap-4">
                  <span aria-hidden className="h-1.5 w-0 rounded-full bg-[#D9A46B] transition-all duration-700 group-hover:w-1.5 group-active:w-1.5" />
                  <span className="font-display text-[clamp(1.6rem,3.4vw,2.5rem)] leading-tight transition-colors duration-700 group-hover:text-[#E8BE8C]">
                    {name}
                  </span>
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#EAF0E4]/30 transition-all duration-700 group-hover:border-[#D9A46B] group-hover:bg-[#D9A46B] group-hover:text-[#10261b] group-active:bg-[#D9A46B]">
                  <ArrowUpRight size={19} strokeWidth={1.5} className="transition-transform duration-700 group-hover:rotate-12" />
                </span>
              </button>
              <Linha />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
    <ServiceNotice name={aberto} onClose={() => setAberto(null)} />
    </>
  )
}

function Fechamento() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const info = [
    ADDRESS && { Icon: MapPin, text: ADDRESS, href: MAPS_URL },
    HOURS && { Icon: Clock, text: HOURS },
    INSTAGRAM && { Icon: AtSign, text: INSTAGRAM, href: `https://instagram.com/${INSTAGRAM.replace('@', '')}` },
  ].filter(Boolean)

  return (
    <footer ref={ref} className="relative isolate overflow-hidden bg-[#07110b] text-white">
      <img src={foto3} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full scale-125 object-cover opacity-60 blur-3xl" />
      <motion.div style={{ y }} className="absolute -inset-y-[8%] inset-x-0 -z-10 lg:left-auto lg:w-[46%] lg:[mask-image:linear-gradient(to_right,transparent,black_40%)]">
        <img src={foto3} alt="Fachada do Natu Soul SPA à noite" loading="lazy" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07110b] via-[#07110b]/55 to-[#07110b]/30 lg:bg-gradient-to-r lg:from-[#07110b] lg:via-[#07110b]/40 lg:to-transparent" />

      <div className="mx-auto flex min-h-[90svh] max-w-7xl flex-col justify-end px-6 pb-12 pt-40 lg:px-16">
        <SplitWords text="Venha passar um dia na natureza" className="max-w-xl font-display text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.06] tracking-[-0.005em]" />
        <Reveal delay={0.2}>
          <Cta className="mt-10 w-full bg-white !text-[#0f2217] sm:w-auto">Reservar pelo WhatsApp</Cta>
        </Reveal>
        {info.length > 0 && (
          <Reveal delay={0.3} className="mt-14 flex flex-col gap-4 text-white/80">
            {info.map(({ Icon, text, href }) => {
              const row = (
                <span className="inline-flex items-center gap-3">
                  <Icon size={18} strokeWidth={1.5} className="text-[#D9A46B]" /> {text}
                </span>
              )
              return href ? (
                <a key={text} href={href} target="_blank" rel="noreferrer" className="w-fit underline-offset-4 hover:underline">{row}</a>
              ) : (
                <p key={text}>{row}</p>
              )
            })}
          </Reveal>
        )}
        <p className="mt-16 text-xs text-white/50">© {YEAR} Natu Soul Estética & SPA</p>
      </div>
    </footer>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.6 })

  return (
    <MotionConfig reducedMotion="user">
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-wood" />
      <ThemeToggle />
      <Hero />
      <Espaco />
      <Servicos />
      <Fechamento />

      <motion.a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={slow(2.2, 1.2)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f7a4d] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)]"
      >
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-[#1f7a4d]"
          animate={{ scale: [1, 1.7], opacity: [0.45, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut' }}
        />
        <WhatsAppIcon size={30} className="relative" />
      </motion.a>
    </MotionConfig>
  )
}
