const sections = [
  ['hero',       '00'],
  ['about',      '01'],
  ['work',       '02'],
  ['background', '03'],
  ['contact',    '04'],
];

export default function SideNav() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <nav
      id="sideNav"
      className="side-nav fixed right-[34px] top-1/2 -translate-y-1/2 z-[400] flex flex-col items-center gap-0.5 mix-blend-difference"
      aria-label="Section index"
    >
      {sections.map(([id, num]) => (
        <a
          key={id}
          href={`#${id}`}
          className="side-nav-link relative flex items-center justify-center w-[30px] h-[30px]"
          data-hover
          data-target={id}
          onClick={(e) => { e.preventDefault(); scrollTo(id); }}
        >
          <em className="not-italic font-mono text-[11px] text-paper/34 transition-colors duration-300 hover:text-paper">
            {num}
          </em>
        </a>
      ))}
    </nav>
  );
}
