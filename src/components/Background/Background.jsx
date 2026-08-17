const experience = [
  {
    year: '2026 — Present',
    title: 'Independent Frontend Developer',
    badge: 'Now',
    sub: 'Self-directed · Remote',
    desc: 'Designed and built two production-grade React applications from scratch, covering component architecture, state, API integration and motion design.',
  },
  {
    year: '2026 — Present',
    title: 'Frontend Development — Deep Dive',
    badge: null,
    sub: 'Self-taught · React Ecosystem',
    desc: 'Went from fundamentals to advanced React patterns — hooks, context, component libraries, and animation tooling like Framer Motion and GSAP.',
  },
];

const education = [
  {
    year: '2025 — 2028',
    title: 'Bachelor of Computer Applications',
    badge: null,
    sub: 'Shri Shankaracharya Professional University , Bhilai , Chhattisgarh',
    desc: 'Coursework in data structures, web technologies and software engineering, alongside independent frontend projects outside the curriculum.',
  },
];

function Ledger({ title, items }) {
  return (
    <div className="ledger">
      <p className="font-mono text-xs uppercase tracking-[.12em] text-teal mb-6 pb-[14px] border-b border-paper/12">
        {title}
      </p>
      {items.map((item, i) => (
        <div
          key={i}
          className="ledger__row py-[22px] border-b border-paper/12 transition-[padding-left] duration-[350ms] hover:pl-[10px] first:pt-0"
        >
          <p className="font-mono text-xs text-paper/34 mb-2">{item.year}</p>
          <div className="ledger__body">
            <h4 className="font-display font-[500] leading-[1.3] text-paper flex items-center gap-[10px] flex-wrap" style={{ fontSize: 'clamp(18px,1.9vw,22px)' }}>
              {item.title}
              {item.badge && (
                <span className="font-mono text-[9.5px] uppercase tracking-[.08em] text-ink bg-teal px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </h4>
            <p className="text-paper/34 text-[13.5px] mt-1">{item.sub}</p>
            <p className="text-paper/62 leading-[1.6] mt-2.5 max-w-[48ch]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Background() {
  return (
    <section id="background" className="relative py-[min(14vw,150px)] px-[var(--edge)]">
      <div className="idx-head flex items-center gap-5 mb-[clamp(56px,8vw,110px)]">
        <span className="idx-num font-mono text-[13px] text-teal tracking-[.06em] shrink-0">03</span>
        <span className="idx-rule flex-1 h-px bg-paper/12 max-w-[90px]" />
        <span className="idx-label font-mono text-[12.5px] tracking-[.14em] uppercase text-paper/62 shrink-0">Background</span>
      </div>

      <div className="bg-split grid gap-[clamp(40px,6vw,90px)] items-start" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <Ledger title="Experience" items={experience} />
        <Ledger title="Education"  items={education}  />
      </div>
    </section>
  );
}
