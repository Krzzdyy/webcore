import SpiderWeb from '../components/SpiderWeb'

const Footer = () => {
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-ink border-t-3 border-ink overflow-hidden">
      {/* Big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[14rem] text-cream/[0.03] leading-none whitespace-nowrap">WEBCORE</span>
      </div>

      {/* Web corner */}
      <div className="absolute bottom-0 right-0 opacity-15 rotate-180">
        <SpiderWeb size={180} className="[filter:invert(1)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-acid border-2 border-acid flex items-center justify-center">
                <span className="font-display text-2xl text-ink leading-none">W</span>
              </div>
              <span className="font-display text-3xl text-cream">
                Web<span className="text-acid">Core</span>
              </span>
            </div>
            <p className="font-body text-sm text-cream/40 leading-relaxed max-w-xs">
              Professional websites for local businesses across the Philippines. Built to perform, designed to impress.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-mono text-xs text-acid uppercase tracking-widest mb-5">Navigation</div>
            <ul className="flex flex-col gap-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-cream/50 hover:text-acid transition-colors group flex items-center gap-2"
                  >
                    <span className="w-4 h-px bg-cream/20 group-hover:bg-acid group-hover:w-6 transition-all" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="font-mono text-xs text-acid uppercase tracking-widest mb-5">Contact</div>
            <div className="flex flex-col gap-3 text-sm font-body text-cream/50">
              <span>📍 Philippines (Remote-first)</span>
              <span>⚡ Reply within 24 hours</span>
              <span>💳 GCash · Maya · Bank Transfer</span>
            </div>

            <div className="mt-6">
              <a href="#contact" className="btn-comic text-sm">
                Start a Project →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-cream/25 uppercase tracking-wide">
            © 2026 WebCore. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-acid animate-pulse" />
            <span className="font-mono text-xs text-cream/25 uppercase tracking-wide">Currently accepting new projects</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
