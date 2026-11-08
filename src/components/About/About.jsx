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
          <img src="/about.jpg" alt="Nishant Sahu — Full Stack Software Developer" loading="lazy" className="w-full aspect-video object-cover rounded-[20px] border border-paper/12" />
          <figcaption className="flex items-center justify-between mt-4 font-mono text-[11.5px] text-paper/34">
            <span className="flex items-center gap-[7px] text-teal">
              <i className="not-italic w-[6px] h-[6px] rounded-full bg-teal shadow-[0_0_0_3px_rgba(55,214,196,.18)]" />
              Open to internships
            </span>
            <span>India</span>
          </figcaption>
        </figure>

        <div>
          <p className="about__intro mb-9">
            <span className="line-mask">
              <span className="line-inner font-display font-[460] leading-[1.18] tracking-[-0.01em] text-paper" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>
                I build <span className="text-teal">useful products</span>
              </span>
            </span>
            <span className="line-mask">
              <span className="line-inner font-display font-[460] leading-[1.18] tracking-[-0.01em] text-paper" style={{ fontSize: 'clamp(36px,4.5vw,56px)' }}>
                from UI to APIs.
              </span>
            </span>
          </p>

          <p id="aboutText" className="about__text leading-[1.7] max-w-[56ch] text-paper/62" style={{ fontSize: 'clamp(16px,1.3vw,18px)' }}>
            I’m a Bachelor's Degree in Computer Applications student at Shri Shankaracharya Professional University who learns by building. I work across React interfaces, API integration, and Node.js/Express backends, with hands-on projects including an AI chat application, an e-commerce experience, and a business analytics dashboard. I care about clean components, thoughtful UX, reliable data flow, and continuously improving through real projects.
          </p>

          <div className="about-meta grid gap-x-6 gap-y-10 mt-[52px] pt-7 border-t border-paper/12" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
            {[
              { num: '01', icon: '</>', title: 'Understand', desc: 'Break a problem into clear, practical requirements.' },
              { num: '02', icon: '◫', title: 'Structure', desc: 'Organize components, state, APIs, and data flow.' },
              { num: '03', icon: '🚀', title: 'Build', desc: 'Create responsive interfaces and useful application features.' },
              { num: '04', icon: '✨', title: 'Improve', desc: 'Test, debug, learn, and refine the experience.' },
            ].map(({ num, icon, title, desc }) => (
              <div key={num} className="about-meta-item flex flex-col group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[11px] text-teal">{num}</span>
                  <div className="w-8 h-8 rounded-lg border border-paper/10 flex items-center justify-center text-[13px] text-paper/80 group-hover:border-teal/40 group-hover:text-teal transition-colors duration-300">{icon}</div>
                </div>
                <strong className="font-body font-[500] text-[15px] text-paper mb-2">{title}</strong>
                <p className="font-body text-[13px] text-paper/62 leading-[1.6]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
