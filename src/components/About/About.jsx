export default function About() {
  return (
    <section id="about" className="relative py-[min(14vw,150px)] px-[var(--edge)]">
      <div className="idx-head flex items-center gap-5 mb-[clamp(56px,8vw,110px)]">
        <span className="idx-num font-mono text-[13px] text-teal tracking-[.06em] shrink-0">01</span>
        <span className="idx-rule flex-1 h-px bg-paper/12 max-w-[90px]" />
        <span className="idx-label font-mono text-[12.5px] tracking-[.14em] uppercase text-paper/62 shrink-0">About</span>
      </div>

      <div className="about-grid grid gap-[clamp(40px,6vw,100px)] items-start" style={{ gridTemplateColumns: '1.15fr .85fr' }}>
        <figure className="about-portrait sticky top-[120px]">
          <img
            src="/about.jpg"
            alt="Nishant Sahu - Frontend Developer"
            loading="lazy"
            className="w-full aspect-[16/11] object-cover rounded-[20px] border border-paper/12"
          />
          <figcaption className="flex items-center justify-between mt-4 font-mono text-[11.5px] text-paper/34">
            <span className="flex items-center gap-[7px] text-teal">
              <i className="not-italic w-[6px] h-[6px] rounded-full bg-teal shadow-[0_0_0_3px_rgba(55,214,196,.18)]" />
              Open to work
            </span>
            <span>Durg, IN</span>
          </figcaption>
        </figure>

        <div>
          <p className="about__intro mb-9">
            <span className="line-mask">
              <span className="line-inner font-display font-[460] leading-[1.18] tracking-[-0.01em]" style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>
                I build the kind of interfaces
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner font-display font-[460] leading-[1.18] tracking-[-0.01em]" style={{ fontSize: 'clamp(28px,3.4vw,44px)' }}>
                that don't need explaining.
              </span>
            </span>
          </p>

          <p
            id="aboutText"
            className="about__text leading-[1.7] max-w-[56ch] text-paper/62"
            style={{ fontSize: 'clamp(16px,1.3vw,18px)' }}
          >
            I'm Nishant — a frontend developer who spent the last stretch going deep on React:
            component architecture, state management, animation, and the small interaction details
            most people skip. Instead of stopping at tutorials, I built two full products end‑to‑end,
            to prove the fundamentals actually hold up under a real build.
          </p>

          <dl className="about-meta grid gap-6 mt-[52px] pt-7 border-t border-paper/12" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            {[
              { dt: 'Focus',    dd: 'React · JavaScript · UI Design' },
              { dt: 'Shipped',  dd: <><span data-count-to="2">0</span> independent products</> },
              { dt: 'Based in', dd: 'Durg, India' },
            ].map(({ dt, dd }) => (
              <div key={dt} className="about-meta-item">
                <dt className="font-mono text-[11px] uppercase tracking-[.1em] text-paper/34 mb-2">{dt}</dt>
                <dd className="font-display text-[17px] text-paper">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
