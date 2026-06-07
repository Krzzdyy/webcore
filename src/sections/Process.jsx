const steps = [
  {
    num: '01',
    title: 'Inquiry & Brief',
    desc: 'Fill out our form or message us. We ask a few questions about your business, goals, and style.',
    icon: '📋',
    color: 'bg-acid',
  },
  {
    num: '02',
    title: 'Quote & Downpayment',
    desc: "We send your custom quote. You pay 50% downpayment to kick off the project.",
    icon: '💸',
    color: 'bg-cobalt',
    textLight: true,
  },
  {
    num: '03',
    title: 'Design & Build',
    desc: 'We design and develop your site. You get updates along the way and can request revisions.',
    icon: '🛠️',
    color: 'bg-punch',
    textLight: true,
  },
  {
    num: '04',
    title: 'Launch & Handover',
    desc: 'Final payment, we launch your site and hand over all files and access.',
    icon: '🚀',
    color: 'bg-ink',
    textLight: true,
  },
]

const Process = () => {
  return (
    <section id="process" className="relative bg-acid py-24 overflow-hidden border-y-3 border-ink">
      {/* Big number watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[20rem] text-ink opacity-[0.03] leading-none">HOW</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-ink/50 uppercase tracking-widest font-bold">How It Works</span>
          <h2 className="font-display text-6xl md:text-7xl text-ink mt-2 leading-none">
            FROM IDEA<br />
            TO <span className="underline decoration-ink decoration-4">LAUNCH</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ num, title, desc, icon, color, textLight }, i) => (
            <div key={num} className="relative">
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 z-20 -translate-y-1/2">
                  <span className="font-display text-2xl text-ink">→</span>
                </div>
              )}

              <div className={`${color} border-3 border-ink shadow-comic p-7 h-full flex flex-col hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150`}>
                <div className="flex justify-between items-start mb-5">
                  <span className="font-display text-5xl opacity-20 leading-none">{num}</span>
                  <span className="text-3xl">{icon}</span>
                </div>
                <h3 className={`font-display text-2xl mb-3 leading-tight ${textLight ? 'text-cream' : 'text-ink'}`}>{title}</h3>
                <p className={`font-body text-sm leading-relaxed mt-auto ${textLight ? 'text-cream/60' : 'text-ink/60'}`}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment note */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {[
            '50% downpayment to start',
            '50% upon delivery',
            'GCash / Maya / Bank transfer',
          ].map((note) => (
            <div key={note} className="bg-ink border-2 border-ink px-4 py-2 flex items-center gap-2">
              <span className="text-acid font-display text-lg">✦</span>
              <span className="font-mono text-xs text-cream uppercase tracking-wide">{note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
