import SpiderWeb from '../components/SpiderWeb'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cream flex items-center overflow-hidden pt-20"
    >
      {/* Halftone bg dots */}
      <div className="absolute inset-0 halftone pointer-events-none" />

      {/* Spider web corners */}
      <div className="absolute top-0 left-0">
        <SpiderWeb size={220} />
      </div>
      <div className="absolute top-0 right-0 rotate-90">
        <SpiderWeb size={180} />
      </div>

      {/* Floating background shapes */}
      <div className="absolute top-24 right-12 w-64 h-64 bg-acid border-3 border-ink rounded-full opacity-30 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 left-16 w-40 h-40 bg-punch border-3 border-ink opacity-20 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-cobalt border-3 border-ink opacity-15 animate-float" style={{ animationDelay: '0.8s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left: text */}
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-ink border-2 border-ink shadow-comic-acid">
            <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
            <span className="font-mono text-xs text-acid font-bold tracking-widest uppercase">
              🇵🇭 Web Design Studio
            </span>
          </div>

          <h1 className="font-display text-7xl md:text-8xl leading-none text-ink mb-4">
            WE BUILD
            <br />
            <span className="text-cobalt">WEBSITES</span>
            <br />
            THAT{' '}
            <span className="relative inline-block">
              <span className="relative z-10">WORK.</span>
              <span className="absolute bottom-0 left-0 w-full h-4 bg-acid -z-0" />
            </span>
          </h1>

          <p className="font-body text-lg text-ink/60 max-w-md mb-8 leading-relaxed">
            Landing pages & business websites for local shops, clinics, restaurants, and brands — fast delivery, bold design, real results.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#packages" className="btn-comic text-base px-8 py-4">
              See Packages ↓
            </a>
            <a href="#contact" className="btn-comic-dark text-base px-8 py-4">
              Get a Quote →
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-6 flex-wrap">
            {[
              { num: '3', label: 'Packages' },
              { num: '5–21', label: 'Days Delivery' },
              { num: '100%', label: 'Mobile Ready' },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-4xl text-ink leading-none">{num}</span>
                <span className="font-mono text-xs text-ink/50 uppercase tracking-widest mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: big illustrated card stack */}
        <div className="relative flex justify-center items-center h-[480px]">
          {/* Back card */}
          <div className="absolute top-8 right-8 w-72 h-80 bg-cobalt border-3 border-ink rotate-6" />

          {/* Middle card */}
          <div className="absolute top-4 right-4 w-72 h-80 bg-punch border-3 border-ink rotate-3" />

          {/* Front main card */}
          <div className="relative w-72 h-80 bg-acid border-3 border-ink shadow-comic-lg flex flex-col items-center justify-center gap-4 p-8">
            {/* Spider web tiny in card corner */}
            <div className="absolute top-0 right-0 opacity-20">
              <SpiderWeb size={80} className="rotate-90" />
            </div>

            {/* Big emoji / cartoon globe */}
            <div className="text-7xl animate-float">🌐</div>
            <div className="text-center">
              <div className="font-display text-3xl text-ink">WebCore</div>
              <div className="font-mono text-xs text-ink/60 uppercase tracking-widest">Built to Perform</div>
            </div>

            {/* Small badges */}
            <div className="flex gap-2 mt-2 flex-wrap justify-center">
              {['React', 'Tailwind', 'SEO'].map((t) => (
                <span key={t} className="tag-pill text-[10px] px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>

          {/* Floating label stickers */}
          <div className="absolute bottom-12 left-0 bg-punch border-3 border-ink px-4 py-2 shadow-comic rotate-[-4deg] animate-wiggle">
            <span className="font-display text-cream text-lg">₱5,000+</span>
          </div>
          <div className="absolute top-0 left-6 bg-ink border-3 border-ink px-3 py-1 shadow-comic-acid rotate-[3deg]">
            <span className="font-mono text-xs text-acid font-bold">5–7 DAY DELIVERY</span>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-ink border-t-3 border-ink py-3 overflow-hidden">
        <div className="flex gap-0 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="font-display text-acid text-xl tracking-widest mx-8">
              LANDING PAGES &nbsp;✦&nbsp; BUSINESS WEBSITES &nbsp;✦&nbsp; BOOKING INTEGRATION &nbsp;✦&nbsp; MOBILE READY &nbsp;✦&nbsp; SEO SETUP &nbsp;✦&nbsp; CMS INCLUDED &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </section>
  )
}

export default Hero
