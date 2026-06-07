import { useState } from 'react'
import SpiderWeb from '../components/SpiderWeb'

const faqs = [
  {
    q: 'Do I own my website after it\'s built?',
    a: 'Yes — 100%. Once final payment is made, all files, code, and access are transferred to you. Your website is yours, no strings attached.',
  },
  {
    q: 'Does the price include domain and hosting?',
    a: 'Domain and hosting are paid by you directly — these typically cost ₱500–₱3,000/year depending on your provider. We help you set everything up as part of the handover process.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Post-launch revisions are available as an add-on at ₱800 per revision round. For bigger updates or new sections, we\'ll give you a custom quote.',
  },
  {
    q: 'How do I pay?',
    a: 'We accept GCash, Maya, and bank transfer. Payment is split: 50% downpayment to begin, and 50% upon final delivery before launch.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely! Reach out via the contact form and describe what you currently have. We\'ll assess your site and give you a tailored quote for the redesign.',
  },
  {
    q: 'How many revisions do I get?',
    a: 'Starter gets 2 rounds, Business gets 3 rounds, and Pro gets 5 rounds. Additional revision rounds are ₱800 each. We also try to get things right the first time.',
  },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="relative bg-ink py-24 overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-20 rotate-180">
        <SpiderWeb size={240} className="[filter:invert(1)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-acid uppercase tracking-widest font-bold">FAQ</span>
            <h2 className="font-display text-6xl md:text-7xl text-cream mt-2 leading-none">
              GOT<br />
              <span className="text-acid">QUESTIONS?</span>
            </h2>
          </div>
          <p className="font-body text-cream/40 max-w-xs text-sm">
            Everything you need to know before getting started with WebCore.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`border-3 transition-all duration-200 ${
                open === i ? 'border-acid bg-acid/10' : 'border-cream/20 bg-cream/5 hover:border-cream/40'
              }`}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 p-6 cursor-none"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-xl text-cream leading-tight">{q}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 border-2 flex items-center justify-center font-display text-xl transition-all duration-200 ${
                    open === i ? 'border-acid text-acid bg-acid/10 rotate-45' : 'border-cream/40 text-cream/60'
                  }`}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-acid/30 mb-4" />
                  <p className="font-body text-cream/60 text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 bg-acid border-3 border-acid p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-comic-lg">
          <div>
            <div className="font-display text-2xl text-ink">Still have questions?</div>
            <div className="font-body text-sm text-ink/60 mt-1">Message us directly — we reply within 24 hours.</div>
          </div>
          <a href="#contact" className="btn-comic-dark whitespace-nowrap">
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
