import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// Global visual utility layer: scroll progress, custom cursor, gentle particles
export default function Effects() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
    </>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-[#FFD166] shadow-[0_0_12px_rgba(255,209,102,0.8)]"
      aria-hidden="true"
    />
  )
}

function CustomCursor() {
  const cursorRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    setIsTouch(mq.matches)
    const handle = (e) => {
      const el = cursorRef.current
      if (!el) return
      const x = e.clientX
      const y = e.clientY
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    if (!mq.matches) {
      window.addEventListener('mousemove', handle, { passive: true })
    }
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  if (isTouch) return null

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[70] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div className="h-6 w-6 rounded-full border border-white/50 bg-white/10 blur-[0.5px]" />
      <div className="-mt-6 h-10 w-10 rounded-full bg-[#E63946]/20 blur-xl" />
      <style>{`
        .magnet:hover ~ .cursor {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}
