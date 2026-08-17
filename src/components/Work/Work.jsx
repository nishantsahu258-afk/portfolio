const projects = [
  {
    num: '01', name: 'Elume', tag: 'E-commerce UI', reverse: false,
    desc: 'A full storefront experience — listings, cart and checkout — powered by dummy localStorage APIs to simulate a real commerce backend.',
    tools: ['React', 'LocalStorage', 'Checkout UI'],
    href: 'https://elume-nine.vercel.app/',
    img:  '/elume_preview.png',
    alt:  'Elume e-commerce interface preview',
  },
  {
    num: '02', name: 'Aura AI', tag: 'AI Chat Agent', reverse: true,
    desc: 'A Gemini-powered chat companion with a sharp, sarcastic personality — genuinely useful for real tasks while staying entertaining to talk to.',
    tools: ['React', 'Gemini API', 'Prompt Design'],
    href: 'https://aura-ai-lemon-zeta.vercel.app',
    img:  '/aura_ai_preview.png',
    alt:  'Aura AI chat agent preview',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-[min(14vw,150px)] px-[var(--edge)]">
      <div className="idx-head flex items-center gap-5 mb-[clamp(56px,8vw,110px)]">
        <span className="idx-num font-mono text-[13px] text-teal tracking-[.06em] shrink-0">02</span>
        <span className="idx-rule flex-1 h-px bg-paper/12 max-w-[90px]" />
        <span className="idx-label font-mono text-[12.5px] tracking-[.14em] uppercase text-paper/62 shrink-0">Selected Work</span>
      </div>

      <div className="flex flex-col gap-[clamp(70px,10vw,140px)]">
        {projects.map((p) => (
          <a
            key={p.num}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            data-cursor-text="View site"
            className={`work-row grid items-center gap-[clamp(32px,5vw,70px)] ${p.reverse ? 'work-row-reverse' : ''}`}
            style={{ gridTemplateColumns: p.reverse ? '.85fr 1.15fr' : '1.15fr .85fr' }}
          >
            <div className={`work-media relative rounded-[20px] overflow-hidden ${p.reverse ? 'order-2' : ''}`}>
              <div className="work-mask overflow-hidden rounded-[20px] border border-paper/12 bg-black/20">
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="work-img w-full h-auto transition-[transform,filter] duration-1000 origin-center"
                  style={{ filter: 'grayscale(.2) brightness(.9)' }}
                />
              </div>
            </div>

            <div className={`work-meta flex flex-col gap-[14px] ${p.reverse ? 'order-1' : ''}`}>
              <span className="font-mono text-xs text-teal tracking-[.05em]">{p.num}</span>
              <h3 className="font-display font-[500] leading-[1.05] text-paper" style={{ fontSize: 'clamp(32px,3.6vw,50px)' }}>{p.name}</h3>
              <p className="font-mono text-xs uppercase tracking-[.09em] text-paper/34">{p.tag}</p>
              <p className="text-paper/62 leading-[1.65] max-w-[44ch] mt-1">{p.desc}</p>
              <ul className="flex gap-[9px] flex-wrap mt-1.5">
                {p.tools.map((t) => (
                  <li key={t} className="font-mono text-[11px] text-paper/62 border border-paper/12 px-3 py-[5px] rounded-full">{t}</li>
                ))}
              </ul>
              <span className="work-link inline-flex items-center gap-[7px] mt-2.5 font-mono text-[12.5px] text-paper w-fit pb-1 border-b border-paper/12 transition-[border-color,color] duration-300">
                View Work <i className="not-italic">↗</i>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
