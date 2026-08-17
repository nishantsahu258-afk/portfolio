import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
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
        className="nav fixed top-6 left-1/2 -translate-x-1/2 z-[500] flex items-center gap-[clamp(24px,4vw,48px)] p-2 font-body font-[500] text-[14px] transition-[transform,background,backdrop-filter,border-color] duration-500 bg-[#161616] rounded-full border border-white/10 shadow-2xl"
      >
        <a
          href="#top"
          className="flex items-center text-paper pl-3 hover:opacity-80 transition-opacity"
          onClick={(e) => { e.preventDefault(); scrollTo('top'); }}
          aria-label="Home"
        >
          <svg width="34" height="29" viewBox="0 0 28 24" fill="none" className="text-paper">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 6 16 V 8 L 11 16 V 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 18 8 H 13 V 12 H 18 V 16 H 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="25" cy="18" r="1.5" fill="currentColor" />
          </svg>
        </a>

        <nav className="nav-desktop flex items-center gap-[28px]">
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
          className="nav-contact flex items-center justify-center bg-paper px-[20px] py-[9px] rounded-full transition-transform duration-300 hover:scale-[1.03] font-body font-[500] text-[14px]"
          style={{ color: '#000000' }}
          data-hover
          onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
        >
          Say hello
        </a>

        <button
          className="nav-burger hidden flex-col justify-center items-center gap-[5px] w-[36px] h-[36px] rounded-full bg-white/5 relative z-[510] mr-1"
          id="navBurger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="h-[1.5px] bg-paper block w-[16px] transition-transform duration-300 origin-center" style={{ transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none' }} />
          <span className="h-[1.5px] bg-paper block w-[16px] transition-transform duration-300 origin-center" style={{ transform: menuOpen ? 'translateY(-3.5px) rotate(-45deg)' : 'none' }} />
        </button>
      </header>

      <div
        className="mobile-menu fixed inset-0 z-[490] bg-ink flex flex-col items-start justify-center gap-[22px] px-[var(--edge)] transition-transform duration-500"
        id="mobileMenu"
        style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        {[...links, ['contact', 'Contact']].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className="font-display text-[38px] text-paper"
            data-hover
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
