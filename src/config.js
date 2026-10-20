// Dados do cliente. Deixe vazio para esconder a linha no site.
export const WHATSAPP = '5542984250205'
export const ADDRESS = ''
export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Natu+Soul+SPA'
export const HOURS = ''
export const INSTAGRAM = ''

export const waLink = (msg = 'Olá! Vi o site do Natu Soul SPA e quero agendar um horário. Quais horários vocês têm?') =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

// Valores e detalhes de cada serviço serão preenchidos depois
export const SERVICES = [
  'Massagens',
  'Day Spa',
  'Estética Corporal',
  'Ensaio Fotográfico',
  'Combos',
  'Day Spa Noiva',
  'Estética Facial',
  'Depilação a Laser',
  'Consulta Nutricional',
  'Head Spa',
]
