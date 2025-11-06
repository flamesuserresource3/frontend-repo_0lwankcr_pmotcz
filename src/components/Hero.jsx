import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#1A1A1A]/80" />
        <div className="relative max-w-3xl text-white">
          <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide backdrop-blur">
            Moderno • Premium • Autentico
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Diamo forma al cuore delle idee.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Creatività, strategia e tecnologia per trasformare visioni in progetti reali.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contatti"
              className="rounded-full bg-[#E63946] px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(230,57,70,0.6)] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
            >
              Parla con noi
            </a>
            <a
              href="#progetti"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
            >
              Guarda i progetti
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
