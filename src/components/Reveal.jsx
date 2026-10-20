import { motion } from 'framer-motion'
import { surface, slow } from './motion'

export default function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const Tag = motion[as]
  return (
    <Tag {...surface} transition={slow(delay)} className={className}>
      {children}
    </Tag>
  )
}
