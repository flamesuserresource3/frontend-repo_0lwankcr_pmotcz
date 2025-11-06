import { Rocket, Star, Users, Sparkles, TrendingUp, Filter } from 'lucide-react'

export function WhatWeDo() {
  const items = [
    {
      title: 'Creatività e Produzione Digitale',
      desc:
        'Diamo vita a video, format e contenuti con qualità da studio e velocità da creator.',
    },
    {
      title: 'Branding e Comunicazione',
      desc:
        'Costruiamo identità solide e narrative memorabili per brand che vogliono emergere.',
    },
    {
      title: 'Consulenza e Giovani Progetti',
      desc:
        'Affianchiamo talenti e realtà in crescita: strategia, metodo e network per scalare.',
    },
  ]
  return (
    <section id="cosa-facciamo" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] sm:text-4xl">Cosa facciamo</h2>
        <p className="mt-3 max-w-2xl text-[#1A1A1A]/70">
          Uniamo creatività, strategia e tecnologia per risultati misurabili.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm transition hover:shadow-[0_0_24px_rgba(255,209,102,0.25)]"
            >
              <div className="mb-3 h-10 w-10 rounded-lg bg-[#1A1A1A] text-white flex items-center justify-center shadow-[0_0_16px_rgba(26,26,26,0.4)]">
                <Sparkles size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A]">{it.title}</h3>
              <p className="mt-2 text-sm text-[#1A1A1A]/70">{it.desc}</p>
              <a href="#contatti" className="mt-4 inline-block text-sm font-medium text-[#E63946] hover:underline">
                Avvia il tuo progetto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedProjects() {
  const filters = ['Torneo', 'Branding', 'Campagna', 'Video']
  const projects = [
    {
      title: 'Evolve League',
      tag: 'Torneo',
      img:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60',
      desc:
        'Torneo di editing video con 256+ partecipanti, influencer judge e premi. ',
    },
    {
      title: 'DeSport',
      tag: 'Branding',
      img:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=60',
      desc: 'Format calcetto con presidenti, crediti e aste.',
    },
    {
      title: 'Fanta Partenope',
      tag: 'Campagna',
      img:
        'https://images.unsplash.com/photo-1521417531039-74b1d58b0678?auto=format&fit=crop&w=1200&q=60',
      desc: 'Sottocompetizioni, ranking e media gallery.',
    },
    {
      title: 'RenderHeart Core',
      tag: 'Video',
      img:
        'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=60',
      desc: 'Produzioni video e design system del brand.',
    },
  ]

  return (
    <section id="progetti" className="bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] sm:text-4xl">Progetti in evidenza</h2>
            <p className="mt-3 max-w-2xl text-[#1A1A1A]/70">
              Evolve League, DeSport, Fanta Partenope e altri progetti selezionati.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-[#1A1A1A]/60" aria-hidden="true" />
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtri progetti">
              {filters.map((f) => (
                <button
                  key={f}
                  className="rounded-full border border-[#1A1A1A]/10 bg-white px-3 py-1 text-xs text-[#1A1A1A]/80 hover:text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 inline-block rounded-full bg-[#1A1A1A] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">
                  {p.tag}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A]">{p.title}</h3>
                <p className="mt-1 text-sm text-[#1A1A1A]/70">{p.desc}</p>
                <a href="#contatti" className="mt-3 inline-block text-sm font-medium text-[#E63946] hover:underline">
                  Scopri il case study →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ValuesAndTestimonials() {
  const values = [
    { title: 'Creatività', icon: Sparkles },
    { title: 'Autenticità', icon: Star },
    { title: 'Collaborazione', icon: Users },
    { title: 'Impatto', icon: TrendingUp },
    { title: 'Evoluzione', icon: Rocket },
  ]

  const testimonials = [
    { name: 'Luca', role: 'Founder', quote: 'RenderHeart ha trasformato la nostra idea in un brand reale.' },
    { name: 'Giulia', role: 'Marketing', quote: 'Metodo, gusto e velocità: partner perfetti.' },
    { name: 'Marco', role: 'Creator', quote: 'Ci hanno aiutato a passare da concept a progetto.' },
  ]

  return (
    <section id="valori" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A1A] sm:text-4xl">I nostri valori</h2>
        <p className="mt-3 max-w-2xl text-[#1A1A1A]/70">
          Premium ma umani: uniamo rigore professionale e calore.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-black/[0.06] bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1A1A1A] text-white">
                <v.icon size={20} />
              </div>
              <h3 className="text-sm font-semibold text-[#1A1A1A]">{v.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-black/[0.06] bg-[#FAFAFA] p-6 text-[#1A1A1A] shadow-inner">
              <p className="text-sm">“{t.quote}”</p>
              <footer className="mt-3 text-xs text-[#1A1A1A]/70">
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCTA() {
  return (
    <section id="contatti" className="relative overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFD166]/30 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-[#E63946]/20 blur-2xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Avvia il tuo progetto</h2>
            <p className="mt-3 max-w-xl text-white/80">
              Raccontaci obiettivi e tempistiche: ti rispondiamo in 24-48h.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://t.me/NOME_BOT"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
              >
                Bot Telegram
              </a>
              <a
                href="#"
                className="rounded-full bg-[#E63946] px-5 py-2 text-sm font-medium text-white shadow-[0_0_30px_rgba(230,57,70,0.6)] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"
              >
                Parla con noi
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">Social: TikTok • Instagram • YouTube</p>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <label className="block text-sm font-medium text-white" htmlFor="name">Nome</label>
            <input id="name" name="name" className="mt-1 w-full rounded-md border border-white/20 bg-white/90 px-3 py-2 text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD166]" placeholder="Il tuo nome" required />

            <label className="mt-4 block text-sm font-medium text-white" htmlFor="email">Email</label>
            <input id="email" type="email" name="email" className="mt-1 w-full rounded-md border border-white/20 bg-white/90 px-3 py-2 text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD166]" placeholder="you@email.com" required />

            <label className="mt-4 block text-sm font-medium text-white" htmlFor="topic">Argomento</label>
            <select id="topic" name="topic" className="mt-1 w-full rounded-md border border-white/20 bg-white/90 px-3 py-2 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#FFD166]">
              <option>Produzione digitale</option>
              <option>Branding e comunicazione</option>
              <option>Consulenza e giovani progetti</option>
            </select>

            <label className="mt-4 block text-sm font-medium text-white" htmlFor="message">Messaggio</label>
            <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-md border border-white/20 bg-white/90 px-3 py-2 text-[#1A1A1A] placeholder-[#1A1A1A]/50 focus:outline-none focus:ring-2 focus:ring-[#FFD166]" placeholder="Parlaci della tua idea" required />

            <button type="submit" className="mt-5 w-full rounded-full bg-[#E63946] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(230,57,70,0.6)] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#FFD166]">
              Invia richiesta
            </button>
            <p className="mt-2 text-[10px] text-white/60">Protetto da reCAPTCHA • GDPR-ready</p>
          </form>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
          <h3 className="text-lg font-semibold">Collabora con noi</h3>
          <p className="mt-1 text-sm text-white/80">Cerchiamo giovani editor, grafici, dev e creator. Inviaci portfolio e disponibilità.</p>
          <a href="#" className="mt-3 inline-block rounded-full border border-white/30 px-4 py-2 text-xs hover:bg-white/10">Invia candidatura →</a>
        </div>
      </div>
    </section>
  )
}
