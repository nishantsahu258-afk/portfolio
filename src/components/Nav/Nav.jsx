import { useEffect } from 'react';

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    ['work',       'Work'],
    ['background', 'Background'],
    ['about',      'About'],
  ];

  return (
    <>
      <header
        id="navHeader"
        className="nav fixed top-4 sm:top-6 left-0 right-0 mx-auto z-[500] flex items-center justify-between gap-[clamp(8px,1.5vw,48px)] p-1.5 sm:p-2 font-body font-[500] text-[11px] sm:text-[14px] transition-all duration-[400ms] ease-out bg-[#161616] rounded-full border border-white/10 shadow-2xl w-fit max-w-[calc(100vw-24px)]"
      >
        <a
          href="#top"
          className="flex items-center text-paper pl-2 sm:pl-3 hover:opacity-80 transition-opacity shrink-0"
          onClick={(e) => { e.preventDefault(); scrollTo('top'); }}
          aria-label="Home"
        >
          <svg viewBox="0 0 28 24" fill="none" className="text-paper w-[32px] h-[28px] sm:w-[44px] sm:h-[38px]">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 6 16 V 8 L 11 16 V 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 18 8 H 13 V 12 H 18 V 16 H 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="25" cy="18" r="1.5" fill="currentColor" />
          </svg>
        </a>

        <nav className="nav-desktop flex items-center gap-[12px] sm:gap-[28px]">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link text-paper/62 hover:text-paper transition-colors duration-[250ms]"
              data-hover
              onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="nav-contact flex items-center justify-center bg-paper px-[14px] py-[7px] sm:px-[20px] sm:py-[9px] rounded-full transition-transform duration-300 hover:scale-[1.03] font-body font-[500] text-[11px] sm:text-[14px] shrink-0 whitespace-nowrap"
          style={{ color: '#000000' }}
          data-hover
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
        >
          Say hello
        </a>

      </header>
    </>
  );
}
