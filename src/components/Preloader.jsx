import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false)
      onDone?.()
    }, 2200)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[80] grid place-items-center bg-[#0E0E0E]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Schermata di caricamento"
        >
          <motion.div
            className="relative"
            initial="off"
            animate="on"
            variants={{
              off: { scale: 0.9, filter: 'blur(2px)', opacity: 0.9 },
              on: { scale: 1, filter: 'blur(0px)', opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="mx-auto h-16 w-16 rounded-xl border-2 border-[#E63946]/60"
              initial={{ boxShadow: '0 0 0px rgba(230,57,70,0.0)' }}
              animate={{ boxShadow: ['0 0 0px rgba(230,57,70,0.0)', '0 0 32px rgba(230,57,70,0.8)', '0 0 0px rgba(230,57,70,0.0)'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ boxShadow: '0 0 0px rgba(255,209,102,0.0)' }}
              animate={{ boxShadow: ['0 0 0px rgba(255,209,102,0.0)', '0 0 40px rgba(255,209,102,0.7)', '0 0 0px rgba(255,209,102,0.0)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.p className="mt-6 text-sm tracking-wide text-white/80">RenderHeart</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
