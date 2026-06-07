import SpiderWeb from '../components/SpiderWeb'

const packages = [
  {
    name: 'Starter',
    codename: 'CORE-01',
    price: '₱5,000',
    priceSuffix: '– ₱8,000',
    delivery: '5–7 days',
    color: 'bg-cream',
    accent: 'bg-ink text-cream',
    featured: false,
    features: [
      { text: '1-page landing page', ok: true },
      { text: 'Mobile responsive', ok: true },
      { text: 'Contact / inquiry form', ok: true },
      { text: 'Social media links', ok: true },
      { text: 'Basic SEO setup', ok: true },
      { text: '2 revision rounds', ok: true },
      { text: 'CMS editing', ok: false },
      { text: 'Booking widget', ok: false },
    ],
    best: 'Small shops, food stalls, solo freelancers',
  },
  {
    name: 'Business',
    codename: 'CORE-02',
    price: '₱12,000',
    priceSuffix: '– ₱18,000',
    delivery: '7–14 days',
    color: 'bg-acid',
    accent: 'bg-ink text-acid',
    featured: true,
    features: [
      { text: 'Up to 4 pages', ok: true },
      { text: 'Mobile responsive', ok: true },
      { text: 'Contact / inquiry form', ok: true },
      { text: 'Social media links', ok: true },
      { text: 'Basic SEO setup', ok: true },
      { text: '3 revision rounds', ok: true },
      { text: 'CMS editing', ok: true },
      { text: 'Booking widget', ok: false },
    ],
    best: 'Restaurants, salons, clinics, retail stores',
  },
  {
    name: 'Pro',
    codename: 'CORE-03',
    price: '₱20,000',
    priceSuffix: '+',
    delivery: '14–21 days',
    color: 'bg-ink',
    accent: 'bg-acid text-ink',
    featured: false,
    features: [
      { text: 'Up to 7 pages', ok: true },
      { text: 'Mobile responsive', ok: true },
      { text: 'Contact / inquiry form', ok: true },
      { text: 'Social media links', ok: true },
      { text: 'Basic SEO setup', ok: true },
      { text: '5 revision rounds', ok: true },
      { text: 'CMS editing', ok: true },
      { text: 'Booking widget', ok: true },
    ],
    best: 'Clinics, dental offices, law firms, growing brands',
  },
]

const addons = [
  { name: 'Extra page', price: '₱1,500' },
  { name: 'Logo design', price: '₱2,500' },
  { name: 'Google Maps integration', price: '₱500' },
  { name: 'Domain & hosting setup', price: '₱1,000' },
  { name: 'Extra revision round', price: '₱800' },
  { name: 'Rush delivery', price: '+₱2,000' },
]

const Packages = () => {
  return (
    <section id="packages" className="relative bg-cream py-24 overflow-hidden">
      {/* Web corner */}
      <div className="absolute top-0 left-0">
        <SpiderWeb size={200} />
      </div>
      <div className="absolute bottom-0 right-0 rotate-180">
        <SpiderWeb size={160} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-ink/40 uppercase tracking-widest font-bold">Pricing</span>
          <h2 className="font-display text-6xl md:text-7xl text-ink mt-2 leading-none">
            SIMPLE.<br />
            <span className="text-cobalt">ONE-TIME</span> PAYMENT.
          </h2>
          <p className="font-body text-ink/50 mt-4 text-sm max-w-sm mx-auto">
            No monthly fees from us. Pick the package that fits your business.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map(({ name, codename, price, priceSuffix, delivery, color, accent, featured, features, best }) => (
            <div
              key={name}
              className={`${color} border-3 border-ink ${featured ? 'shadow-comic-lg -translate-y-3' : 'shadow-comic'} relative transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1 flex flex-col`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-punch border-3 border-ink px-5 py-1 whitespace-nowrap">
                  <span className="font-display text-cream text-sm tracking-wide">⭐ MOST POPULAR</span>
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest mb-1">{codename}</div>
                    <div className={`font-display text-3xl ${color === 'bg-ink' ? 'text-cream' : 'text-ink'}`}>{name}</div>
                  </div>
                  <span className={`${accent} border-2 border-ink px-2 py-1 font-mono text-[10px] font-bold`}>{delivery}</span>
                </div>

                {/* Price */}
                <div className="mb-7">
                  <div className={`font-display text-5xl leading-none ${color === 'bg-ink' ? 'text-cream' : 'text-ink'}`}>{price}</div>
                  <div className={`font-body text-sm mt-1 ${color === 'bg-ink' ? 'text-cream/50' : 'text-ink/50'}`}>{priceSuffix} one-time</div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {features.map(({ text, ok }) => (
                    <li key={text} className={`flex items-center gap-2 text-sm font-body ${color === 'bg-ink' ? (ok ? 'text-cream' : 'text-cream/25') : (ok ? 'text-ink' : 'text-ink/25')}`}>
                      <span className={`text-base leading-none flex-shrink-0 ${ok ? '' : 'opacity-30'}`}>
                        {ok ? '✓' : '—'}
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <div className={`text-[10px] font-mono uppercase tracking-wide mb-5 ${color === 'bg-ink' ? 'text-cream/40' : 'text-ink/40'}`}>
                  Best for: {best}
                </div>

                <a
                  href="#contact"
                  className={`block text-center py-3 border-3 font-display text-lg tracking-wide transition-all hover:translate-x-0.5 hover:translate-y-0.5
                    ${featured
                      ? 'bg-ink text-acid border-ink hover:shadow-none shadow-comic-acid'
                      : color === 'bg-ink'
                        ? 'bg-acid text-ink border-acid hover:shadow-none shadow-comic-acid'
                        : 'bg-ink text-cream border-ink hover:shadow-none shadow-comic'
                    }`}
                >
                  Get Started →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="font-display text-3xl text-ink">ADD-ONS</div>
            <div className="flex-1 h-0.5 bg-ink/20" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {addons.map(({ name, price }) => (
              <div key={name} className="flex justify-between items-center bg-ink border-2 border-ink px-4 py-3 group hover:bg-cobalt transition-colors">
                <span className="font-body text-sm text-cream/70">{name}</span>
                <span className="font-display text-acid text-lg group-hover:text-cream">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages
