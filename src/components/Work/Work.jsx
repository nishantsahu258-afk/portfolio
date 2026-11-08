const projects = [
  {
    num: '01',
    name: 'Aura AI',
    tag: 'AI Chat Application',
    reverse: false,
    desc: 'A Gemini-powered conversational app with a custom personality and a chat experience designed for real use. The project explores the connection between a React client and a Node.js/Express API, including streamed responses.',
    tools: ['React', 'Node.js', 'Express.js', 'Gemini API', 'SSE'],
    href: 'https://aura-ai-lemon-zeta.vercel.app/',
    repo: 'https://github.com/nishantsahu258-afk/Aura-AI',
    img: '/aura_ai_preview.png',
    alt: 'Aura AI chat application preview',
  },
  {
    num: '02',
    name: 'ELUME',
    tag: 'E-commerce Experience',
    reverse: false,
    desc: 'A responsive storefront with product discovery, search, cart, wishlist, and checkout flows. Client-side persistence and reusable React state patterns help keep the shopping experience consistent as users move through the interface.',
    tools: ['React', 'Context API', 'Local Storage', 'Tailwind CSS'],
    href: 'https://elume-nine.vercel.app/',
    repo: 'https://github.com/nishantsahu258-afk/ELUME',
    img: '/elume_preview.png',
    alt: 'ELUME e-commerce interface preview',
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
        {projects.map((project) => (
          <article
            key={project.num}
            className={`work-row grid items-center gap-[clamp(32px,5vw,70px)] ${project.reverse ? 'work-row-reverse' : ''}`}
            style={{ gridTemplateColumns: project.reverse ? '.85fr 1.15fr' : '1.15fr .85fr' }}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              data-hover
              data-cursor-text="View site"
              aria-label={`Open ${project.name} live project`}
              className={`work-media relative rounded-[20px] overflow-hidden block ${project.reverse ? 'order-2' : ''}`}
            >
              <div className="work-mask overflow-hidden rounded-[20px] border border-paper/12 bg-black/20">
                {project.visual ? (
                  <DashboardPreview />
                ) : (
                  <img src={project.img} alt={project.alt} loading="lazy" className="work-img w-full h-auto transition-[transform,filter] duration-1000 origin-center" style={{ filter: 'grayscale(.2) brightness(.9)' }} />
                )}
              </div>
            </a>

            <div className={`work-meta flex flex-col gap-[14px] ${project.reverse ? 'order-1' : ''}`}>
              <span className="font-mono text-xs text-teal tracking-[.05em]">{project.num}</span>
              <h3 className="font-display font-[500] leading-[1.05] text-paper" style={{ fontSize: 'clamp(32px,3.6vw,50px)' }}>{project.name}</h3>
              <p className="font-mono text-xs uppercase tracking-[.09em] text-paper/34">{project.tag}</p>
              <p className="text-paper/62 leading-[1.65] max-w-[48ch] mt-1">{project.desc}</p>
              <ul className="flex gap-[9px] flex-wrap mt-1.5">
                {project.tools.map((tool) => (
                  <li key={tool} className="font-mono text-[11px] text-paper/62 border border-paper/12 px-3 py-[5px] rounded-full">{tool}</li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-5 mt-2.5">
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="work-link inline-flex items-center gap-[7px] font-mono text-[12.5px] text-paper w-fit pb-1 border-b border-paper/12 transition-[border-color,color] duration-300">
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[7px] font-mono text-[12.5px] text-paper/60 w-fit pb-1 border-b border-paper/12 hover:text-teal transition-colors">
                  Source Code <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
