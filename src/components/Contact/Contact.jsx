export default function Contact() {
  const onEmailClick = () => {
    if (navigator.clipboard) navigator.clipboard.writeText('nishantsahu258@gmail.com').catch(() => {});
  };

  return (
    <section id="contact" className="relative text-center py-[min(14vw,150px)] px-[var(--edge)] pb-[min(16vw,180px)] overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(60% 50% at 50% 30%, rgba(55,214,196,.10), transparent 70%)' }}
      />

      <div className="idx-head relative z-[1] flex items-center justify-center gap-5 mb-[clamp(56px,8vw,110px)]">
        <span className="idx-num font-mono text-[13px] text-teal tracking-[.06em] shrink-0">04</span>
        <span className="idx-rule w-10 h-px bg-paper/12 shrink-0" />
        <span className="idx-label font-mono text-[12.5px] tracking-[.14em] uppercase text-paper/62 shrink-0">Get in touch</span>
      </div>

      <h2
        id="contactTitle"
        className="contact__title relative z-[1] font-display font-[480] leading-[1.04] mb-[46px] text-paper"
        style={{ fontSize: 'clamp(38px,6.6vw,88px)' }}
      >
        Let's build something<br />that feels right.
      </h2>

      <a
        href="mailto:nishantsahu258@gmail.com"
        className="contact-email relative z-[1] inline-block font-display text-paper border-b border-paper/12 pb-[10px] transition-[border-color,color] duration-300 hover:text-teal hover:border-teal"
        style={{ fontSize: 'clamp(22px,3vw,34px)' }}
        data-hover
        data-magnetic
        data-cursor-text="Copy"
        onClick={onEmailClick}
      >
       nishantsahu258@gmail.com
      </a>

      <div className="contact-socials relative z-[1] flex gap-[30px] justify-center mt-[46px] font-mono text-[13px] text-paper/34">
        {[
          { label: 'GitHub', url: 'https://github.com/nishantsahu258-afk' },
          { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nishant-sahu-9183693b5' }
        ].map((s) => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-[250ms] hover:text-teal" data-hover>{s.label}</a>
        ))}
      </div>
    </section>
  );
}
