import SpiderWeb from '../components/SpiderWeb'

const services = [
  { icon: '🖥️', title: 'Landing Pages', desc: 'Single-page sites built to capture attention and convert visitors into paying customers.', color: 'bg-[#B4E50D]' },
  { icon: '🏢', title: 'Business Websites', desc: 'Multi-page websites covering your services, about, contact — everything clients need to trust you.', color: 'bg-[#134686] text-cream' },
  { icon: '📅', title: 'Booking Integration', desc: 'Let clients book appointments directly from your site — no back-and-forth, no missed inquiries.', color: 'bg-[#E00543] text-cream' },
  { icon: '✏️', title: 'CMS / Easy Editing', desc: 'Update your own content anytime without touching a single line of code.', color: 'bg-[#B4E50D]' },
  { icon: '🔍', title: 'Basic SEO Setup', desc: 'Meta tags, page titles, descriptions, and mobile optimization so Google can actually find you.', color: 'bg-ink text-cream' },
  { icon: '📱', title: 'Mobile-First Design', desc: 'Every site looks and works perfectly on phones, tablets, and desktops — guaranteed.', color: 'bg-cream' },
]

const Services = () => {
  return (
    <section id="services" className="relative bg-ink py-24 overflow-hidden">
      {/* Acid yellow web corner */}
      <div className="absolute top-0 right-0 opacity-20 rotate-90">
        <SpiderWeb size={260} className="[filter:invert(1)]" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-20">
        <SpiderWeb size={200} className="[filter:invert(1)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs text-[#B4E50D] uppercase tracking-widest font-bold">What We Do</span>
            <h2 className="font-display text-6xl md:text-7xl text-cream mt-2 leading-none">
              OUR
              <br />
              <span className="text-[#B4E50D]">SERVICES</span>
            </h2>
          </div>
          <p className="font-body text-cream/50 max-w-xs text-sm leading-relaxed">
            We handle the web so you can focus on running your business. From simple landing pages to full-featured sites.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`${color} border-3 border-cream/20 p-7 group hover:-translate-y-1 hover:shadow-[6px_6px_0px_#C8F000] transition-all duration-200 cursor-none relative overflow-hidden`}
            >
              {/* Number label */}
              <span className="absolute top-4 right-5 font-display text-5xl opacity-10 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="font-display text-2xl mb-3 leading-tight">{title}</h3>
              <p className="font-body text-sm leading-relaxed opacity-75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
