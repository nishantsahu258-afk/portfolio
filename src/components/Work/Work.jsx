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
    name: 'Business Analytics Dashboard',
    tag: 'Dashboard · Data Visualization',
    reverse: true,
    desc: 'An interactive admin dashboard for tracking leads, quotations, deals, orders, and revenue. KPI cards, charts, filters, and structured data views help make business performance easier to scan.',
    tools: ['React', 'JavaScript', 'Charts', 'Dashboard UI', 'Vercel'],
    href: 'https://business-performance-revenue-analyt-tawny.vercel.app/',
    repo: 'https://github.com/nishantsahu258-afk/business-performance-revenue-analytics-dashboard',
    visual: true,
    alt: 'Illustrative preview of the business performance analytics dashboard',
  },
  {
    num: '03',
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

function DashboardPreview() {
  return (
    <div className="aspect-[16/10] w-full bg-[#0d1418] p-4 sm:p-6 text-left">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.12em] text-teal">Business overview</p>
          <p className="font-display text-xl sm:text-2xl text-paper mt-1">Revenue dashboard</p>
        </div>
        <span className="rounded-full border border-teal/30 px-3 py-1 font-mono text-[10px] text-teal">Analytics</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-4">
        {[
          ['Leads', '1,248'],
          ['Quotations', '384'],
          ['Orders', '216'],
          ['Revenue', '₹8.4L'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[.03] p-3">
            <p className="font-mono text-[9px] sm:text-[10px] text-paper/45">{label}</p>
            <p className="font-display text-lg sm:text-2xl text-paper mt-2">{value}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[1.3fr_.7fr] gap-3 mt-3">
        <div className="rounded-lg border border-white/10 bg-white/[.025] p-3">
          <p className="font-mono text-[10px] text-paper/50 mb-4">Revenue trend</p>
          <div className="flex items-end gap-2 h-20 sm:h-28">
            {[38, 55, 45, 73, 62, 88, 70, 96, 76, 100, 83, 112].map((height, i) => (
              <span key={i} className="flex-1 rounded-t-sm bg-teal/70" style={{ height: `${height / 1.15}%` }} />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[.025] p-3">
          <p className="font-mono text-[10px] text-paper/50 mb-3">Pipeline</p>
          <div className="space-y-3">
            {[
              ['Leads', '80%'],
              ['Deals', '58%'],
              ['Orders', '36%'],
            ].map(([label, width]) => (
              <div key={label}>
                <div className="flex justify-between font-mono text-[9px] text-paper/50 mb-1"><span>{label}</span><span>{width}</span></div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-teal rounded-full" style={{ width }} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="font-mono text-[9px] sm:text-[10px] text-paper/30 mt-3">Illustrative preview · open the live project to explore</p>
    </div>
  );
}

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
