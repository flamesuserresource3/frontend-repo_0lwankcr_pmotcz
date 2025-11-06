import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '#cosa-facciamo', label: 'Cosa facciamo' },
  { href: '#progetti', label: 'Progetti' },
  { href: '#valori', label: 'Valori' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Barra di navigazione principale"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#E63946] rounded-md" aria-label="RenderHeart Home">
            <div className="h-8 w-8 rounded-md bg-[#E63946] shadow-[0_0_24px_rgba(230,57,70,0.6)]" />
            <span className="text-lg font-semibold tracking-tight text-[#1A1A1A]">RenderHeart</span>
          </a>
          <div className="hidden md:flex items-center gap-8" role="navigation">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#1A1A1A]/80 hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#E63946] rounded-md px-1 py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-full bg-[#E63946] px-4 py-2 text-white shadow-[0_0_24px_rgba(230,57,70,0.6)] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
            >
              Parla con noi <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
