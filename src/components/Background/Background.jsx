const stats = [
  { icon: '</>', label: 'Projects Built', target: 2, prefix: '' },
  { icon: '⚡', label: 'Technologies Learned', target: 13, prefix: '+' },
  { icon: '🎖', label: 'Oracle Certification', target: 1, prefix: '' },
  { icon: '📅', label: 'Frontend Journey', target: null, prefix: '' },
];

const timeline = [
  {
    year: '2025',
    title: 'Academic Foundation',
    subtitle: 'Started Bachelor of Computer Applications at Shri Shankaracharya Professional University, Bhilai, Chhattisgarh.',
    icon: '🎓'
  },
  {
    year: 'February 2026',
    title: 'Frontend Fundamentals',
    subtitle: 'Started learning HTML, CSS, and JavaScript through daily practice, project building, and hands-on development.',
    icon: '</>'
  },
  {
    year: 'July 2026',
    title: 'Modern React Ecosystem',
    subtitle: 'Expanded into React, Tailwind CSS, React Router, REST APIs, Context API, Git, GitHub, npm, Vite, and modern frontend development practices.',
    icon: '⚛️'
  },
  {
    year: '2026',
    title: 'First Production-Style Project',
    subtitle: 'E-Commerce Web Application',
    desc: 'Built a responsive e-commerce application featuring:',
    bullets: [
      'Product Listing', 'Search Functionality', 'Shopping Cart', 'Login Flow',
      'Checkout Experience', 'Local Storage Integration', 'Order Confirmation System', 'Responsive Design'
    ],
    icon: '🛒'
  },
  {
    year: '2026',
    title: 'AI Exploration',
    subtitle: 'Aura AI',
    desc: 'Built a Gemini-powered chatbot featuring:',
    bullets: [
      'Real-time AI Responses', 'Prompt Engineering', 'Custom Sarcastic AI Personality',
      'Conversational UX Design', 'Responsive Chat Interface'
    ],
    icon: '💬',
    isAi: true
  },

  {
    year: 'Next Chapter',
    title: 'Next.js & Full-Stack Development',
    subtitle: 'Taking the next step from React into Next.js, modern backend integration, and production-grade web application development.',
    icon: '🚀',
    isGoal: true
  }
];

export default function Background() {
  return (
    <section id="background" className="relative py-[min(14vw,150px)] px-[var(--edge)] bg-ink min-h-screen overflow-hidden">
      
      {/* Header */}
      <div className="idx-head flex items-center gap-5 mb-[clamp(40px,6vw,80px)] relative z-10">
        <span className="idx-num font-mono text-[13px] text-teal tracking-[.06em] shrink-0">03</span>
        <span className="idx-rule flex-1 h-px bg-paper/12 max-w-[90px]" />
        <span className="idx-label font-mono text-[12.5px] tracking-[.14em] uppercase text-paper/62 shrink-0">Background</span>
      </div>

      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <h2 className="font-display font-[500] text-paper leading-[1.1] mb-6" style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
          My <span className="text-teal relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-teal">Learning</span> Journey
        </h2>
        <p className="font-body text-[15px] text-paper/62 max-w-[600px] leading-[1.6]">
          A timeline of my academic path, technical growth, projects, certifications, and continuous learning.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-[1000px] mx-auto mb-32 p-6 rounded-[24px] border border-white/5 bg-[#0e1114] relative z-10">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-teal/10 text-teal flex items-center justify-center text-[18px] mb-3">
              {s.icon}
            </div>
            {s.target !== null ? (
              <div className="font-display text-[28px] text-paper mb-1 flex items-center h-[34px]">
                <span data-stat-target={s.target}>0</span>
                <span>{s.prefix}</span>
              </div>
            ) : (
              <div className="font-body font-[500] text-[13px] text-paper mb-1 flex items-center h-[34px]">
                Since 2026
              </div>
            )}
            <div className="font-mono text-[10px] text-paper/40 uppercase tracking-[0.1em] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-[900px] mx-auto mb-32 z-10">
        {/* The line */}
        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
          <div className="timeline-progress w-full h-0 bg-teal shadow-[0_0_12px_rgba(55,214,196,0.6)]"></div>
        </div>

        {timeline.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 md:mb-24 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} opacity-0 translate-y-10 blur-[4px]`}>
              
              {/* Center Node */}
              <div className="timeline-node absolute left-[30px] md:left-1/2 w-[34px] h-[34px] -translate-x-1/2 rounded-full bg-[#0e1114] border border-white/10 flex items-center justify-center z-10 transition-colors duration-500">
                <div className="timeline-node-inner w-[10px] h-[10px] rounded-full bg-paper/20 transition-all duration-300"></div>
              </div>

              {/* Date (Desktop only) */}
              <div className={`hidden md:block w-5/12 font-mono text-[14px] text-teal ${isEven ? 'text-right pr-16' : 'text-left pl-16'}`}>
                {item.year}
              </div>

              {/* Card */}
              <div className="w-full md:w-5/12 pl-[70px] md:pl-0">
                <div className={`group relative bg-[#0e1114] border rounded-[20px] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${item.isMajor ? 'border-teal/30 hover:border-teal hover:shadow-[0_0_30px_rgba(55,214,196,0.15)] overflow-hidden' : item.isAi ? 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] overflow-hidden' : item.isGoal ? 'border-dashed border-white/20 hover:border-teal/50 bg-transparent' : 'border-white/5 hover:border-teal/30'}`}>
                  
                  {item.isMajor && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  )}
                  {item.isMajor && (
                    <div className="shine-sweep absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 pointer-events-none"></div>
                  )}
                  {item.isAi && (
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  )}

                  <div className="md:hidden font-mono text-[12px] text-teal mb-4">{item.year}</div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors duration-500 ${item.isAi ? 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20' : item.isGoal ? 'bg-transparent border-white/10 text-paper/60 group-hover:text-teal group-hover:border-teal/30' : 'bg-[#161b21] border-white/10 text-paper group-hover:border-teal/30 group-hover:text-teal'}`}>
                      <span className="text-[18px]">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className={`font-display text-[20px] font-[500] leading-[1.2] mb-1 transition-colors duration-500 ${item.isMajor ? 'text-teal' : item.isAi ? 'text-paper group-hover:text-purple-400' : 'text-paper group-hover:text-teal'}`}>
                        {item.title}
                      </h3>
                      <p className="font-body text-[14px] text-paper/80 font-[500] mb-2">{item.subtitle}</p>
                      
                      {item.score && (
                        <div className="flex gap-3 mt-3 mb-1 font-mono text-[10px] uppercase border border-white/5 rounded-md px-3 py-2 bg-[#161b21] w-max">
                          <span className="text-teal">Score: <span className="text-[12px]">{item.score}</span></span>
                          <span className="w-px bg-white/10"></span>
                          <span className="text-paper/40">Passing: {item.passing}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {item.desc && <p className="font-body text-[14px] text-paper/60 leading-[1.6] mb-4 mt-2">{item.desc}</p>}
                  
                  {item.bullets && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mt-5">
                      {item.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-body text-[13px] text-paper/60">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 transition-colors duration-500 ${item.isAi ? 'bg-purple-500/50 group-hover:bg-purple-400' : 'bg-teal/50 group-hover:bg-teal'}`}></span> 
                          <span className="group-hover:text-paper/80 transition-colors">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Grid: Education & Certification */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
        
        {/* Education */}
        <div className="edu-card opacity-0 translate-y-10 blur-[4px] relative bg-[#0e1114] border border-white/5 rounded-[24px] p-8 hover:border-teal/30 transition-all duration-500 flex flex-col h-full group hover:-translate-y-1">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em] text-teal mb-8 uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            Education
          </div>
          <h3 className="font-display text-[24px] font-[500] text-paper mb-2 leading-[1.2]">Bachelor of Computer Applications</h3>
          <p className="font-body text-[14px] text-paper/60 mb-8">Shri Shankaracharya Professional University<br/>Bhilai, Chhattisgarh</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-paper/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal"></span> 2025 – 2028 (Expected)
            </span>
            <span className="font-mono text-[10px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-paper/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 3rd Semester
            </span>
          </div>

          <p className="font-body text-[14px] text-paper/50 leading-[1.6] mt-auto border-t border-white/5 pt-6 group-hover:text-paper/70 transition-colors">
            Pursuing a Bachelor of Computer Applications while actively building real-world frontend applications, exploring modern web technologies, and developing practical problem-solving skills through project-based learning.
          </p>
        </div>

        {/* Certification */}
        <div className="cert-card opacity-0 translate-y-10 blur-[4px] relative bg-[#0e1114] border border-teal/20 rounded-[24px] p-8 hover:border-teal/50 hover:shadow-[0_0_40px_rgba(55,214,196,0.15)] transition-all duration-500 flex flex-col h-full group hover:-translate-y-1 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-bl-full blur-[20px] pointer-events-none group-hover:bg-teal/15 transition-colors duration-500"></div>
          <div className="shine-sweep absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 pointer-events-none"></div>

          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.1em] text-teal mb-8 uppercase">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            Certification
          </div>
          
          <a 
            href="/Oracle_AI_Certificate_Nishant_Sahu.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-4 mb-8 group/link cursor-pointer"
            data-hover
            data-cursor-text="View PDF"
          >
            <div className="w-[84px] h-[60px] bg-white rounded-[8px] flex items-center justify-center shrink-0 border border-white/20 shadow-lg group-hover/link:border-teal/50 transition-colors duration-300 overflow-hidden">
              <img src="/oracle_cert_thumb.png" alt="Oracle Certificate Thumbnail" className="w-full h-full object-cover" />
            </div>
            <div className="pt-0.5">
              <h3 className="font-display text-[22px] font-[500] text-paper mb-1 leading-[1.2] group-hover/link:text-teal transition-colors duration-300">Agentic AI Foundations Associate</h3>
              <p className="font-body text-[14px] text-paper/60 flex items-center gap-2">
                Oracle University
                <span className="inline-flex items-center text-teal text-[12px] opacity-0 group-hover/link:opacity-100 transition-opacity duration-300">
                  Open <i className="not-italic ml-1">↗</i>
                </span>
              </p>
            </div>
          </a>
          
          <div className="flex gap-4 mb-8 font-mono text-[10px] uppercase">
             <div className="flex flex-col gap-1">
               <span className="text-paper/40">Score</span>
               <span className="text-teal text-[15px] font-bold">90%</span>
             </div>
             <div className="w-px bg-white/10"></div>
             <div className="flex flex-col gap-1">
               <span className="text-paper/40">Passing</span>
               <span className="text-paper/80 text-[15px]">65%</span>
             </div>
             <div className="w-px bg-white/10"></div>
             <div className="flex flex-col gap-1">
               <span className="text-paper/40">Issued</span>
               <span className="text-paper/80 text-[15px]">Aug 2026</span>
             </div>
          </div>

          <p className="font-body text-[14px] text-paper/50 leading-[1.6] mt-auto border-t border-white/5 pt-6 group-hover:text-paper/70 transition-colors">
            Successfully earned Oracle AI certification demonstrating foundational knowledge of Agentic AI systems, AI concepts, prompt engineering, MCP fundamentals, and modern AI technologies.
          </p>
        </div>

      </div>
    </section>
  );
}
