export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-[#E63946] shadow-[0_0_24px_rgba(230,57,70,0.6)]" />
              <span className="text-lg font-semibold tracking-tight">RenderHeart</span>
            </div>
            <p className="mt-3 text-sm text-white/70">Diamo forma al cuore delle idee: brand, format e campagne ad alto impatto.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Link</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#cosa-facciamo" className="hover:underline">Cosa facciamo</a></li>
              <li><a href="#progetti" className="hover:underline">Progetti</a></li>
              <li><a href="#valori" className="hover:underline">Valori</a></li>
              <li><a href="#contatti" className="hover:underline">Contatti</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Social</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:underline">TikTok</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
              <li><a href="https://t.me/NOME_BOT" className="hover:underline">Telegram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Newsletter</h4>
            <form className="mt-3 flex gap-2">
              <input type="email" aria-label="Email newsletter" placeholder="you@email.com" className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD166]"/>
              <button className="rounded-md bg-[#E63946] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_24px_rgba(230,57,70,0.6)]">Iscriviti</button>
            </form>
            <p className="mt-2 text-[10px] text-white/60">Privacy • Cookie • Termini</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">© {new Date().getFullYear()} RenderHeart — Tutti i diritti riservati.</div>
      </div>
    </footer>
  )
}
