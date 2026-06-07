import { useState } from 'react'
import SpiderWeb from '../components/SpiderWeb'

const Contact = () => {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', contact: '', package: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const inputClass = "w-full bg-cream/5 border-2 border-cream/20 text-cream font-body text-sm px-4 py-3 outline-none focus:border-acid transition-colors placeholder:text-cream/25"

  return (
    <section id="contact" className="relative bg-cream py-24 overflow-hidden">
      <div className="absolute top-0 right-0 rotate-90">
        <SpiderWeb size={220} />
      </div>
      <div className="absolute bottom-0 left-0">
        <SpiderWeb size={180} />
      </div>

      {/* Halftone bg */}
      <div className="absolute inset-0 halftone pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="font-mono text-xs text-ink/40 uppercase tracking-widest font-bold">Get In Touch</span>
            <h2 className="font-display text-6xl md:text-7xl text-ink mt-2 leading-none">
              READY<br />
              TO <span className="text-cobalt">BUILD?</span>
            </h2>
            <p className="font-body text-ink/50 mt-5 text-sm leading-relaxed max-w-sm">
              Tell us about your business and we'll get back to you within 24 hours with a custom quote.
            </p>

            {/* Info cards */}
            <div className="mt-10 flex flex-col gap-4">
              {[
                { icon: '⚡', label: 'Response Time', val: 'Within 24 hours' },
                { icon: '💳', label: 'Payment Methods', val: 'GCash · Maya · Bank Transfer' },
                { icon: '📍', label: 'Location', val: 'Philippines (Remote-first)' },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex items-center gap-4 bg-ink border-3 border-ink px-5 py-4 shadow-comic hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <div className="font-mono text-[10px] text-acid uppercase tracking-widest">{label}</div>
                    <div className="font-body text-sm text-cream mt-0.5">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-ink border-3 border-ink shadow-comic-lg p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <span className="text-6xl animate-float">🎉</span>
                <h3 className="font-display text-4xl text-acid">Message Sent!</h3>
                <p className="font-body text-cream/60 text-sm max-w-xs">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-comic text-sm mt-4"
                >
                  Send Another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-acid uppercase tracking-widest">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan dela Cruz"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-acid uppercase tracking-widest">Business Name</label>
                    <input
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="My Business"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-acid uppercase tracking-widest">Contact (FB / Email / Phone)</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="How can we reach you?"
                    className={inputClass}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-acid uppercase tracking-widest">Package Interested In</label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className={inputClass + " appearance-none"}
                    required
                  >
                    <option value="" disabled>Select a package...</option>
                    <option>Core Starter — ₱5,000–₱8,000</option>
                    <option>Core Business — ₱12,000–₱18,000</option>
                    <option>Core Pro — ₱20,000+</option>
                    <option>Not sure yet, need advice</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-acid uppercase tracking-widest">Tell us about your business</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? Any specific needs?"
                    className={inputClass + " resize-none"}
                    required
                  />
                </div>

                <button type="submit" className="btn-comic text-base py-4 text-center font-display text-xl tracking-wide w-full">
                  Send Inquiry →
                </button>

                <p className="font-mono text-[10px] text-cream/25 text-center uppercase tracking-wide">
                  We reply within 24 hours · No spam ever
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
