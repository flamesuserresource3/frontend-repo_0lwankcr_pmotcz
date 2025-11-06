import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const easing = [0.22, 1, 0.36, 1]

export default function Hero() {
  const words = 'Diamo forma al cuore delle idee.'.split(' ')

  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated gradient veil */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(60% 80% at 50% 20%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.65) 60%, rgba(26,26,26,0.85) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl text-white">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur">
            Moderno • Premium • Autentico
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            {words.map((w, i) => (
              <motion.span
                key={w + i}
                className="mr-2 inline-block"
                initial={{ y: 24, opacity: 0, textShadow: '0 0 0 rgba(230,57,70,0)' }}
                animate={{ y: 0, opacity: 1, textShadow: ['0 0 0 rgba(230,57,70,0)', '0 0 12px rgba(230,57,70,0.6)', '0 0 0 rgba(230,57,70,0)'] }}
                transition={{ duration: 0.6, delay: 0.15 * i, ease: easing }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-4 text-lg text-white/90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * words.length, ease: easing }}
          >
            Creatività, strategia e tecnologia per trasformare visioni in progetti reali.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * words.length + 0.2, ease: easing }}
          >
            <motion.a
              href="#contatti"
              className="rounded-full bg-[#E63946] px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(230,57,70,0.6)] focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
              whileHover={{
                boxShadow: [
                  '0 0 30px rgba(230,57,70,0.6)',
                  '0 0 45px rgba(255,209,102,0.6)',
                  '0 0 30px rgba(230,57,70,0.6)',
                ],
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              Parla con noi
            </motion.a>
            <motion.a
              href="#progetti"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: easing }}
            >
              Guarda i progetti
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Slow animated hero gradient */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(26,26,26,0.3) 40%, rgba(26,26,26,0.8) 100%)',
        }}
      />
    </section>
  )
}
