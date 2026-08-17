export default function Contact() {
  const onEmailClick = () => {
    if (navigator.clipboard) navigator.clipboard.writeText('nishantsahu258@gmail.com').catch(() => {});
  };

  return (
    <section id="contact" className="relative flex flex-col items-center justify-center pt-[150px] pb-[40px] px-[var(--edge)] bg-ink min-h-screen">
      
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(50% 40% at 50% 20%, rgba(55,214,196,.06), transparent 70%)' }}
      />

      {/* Header */}
      <div className="idx-head flex items-center gap-5 w-full mb-[clamp(56px,8vw,110px)] relative z-10">
        <span className="idx-num font-mono text-[13px] text-teal tracking-[.06em] shrink-0">04</span>
        <span className="idx-rule flex-1 h-px bg-paper/12 max-w-[90px]" />
        <span className="idx-label font-mono text-[12.5px] tracking-[.14em] uppercase text-paper/62 shrink-0">Get In Touch</span>
      </div>

      {/* Main Heading */}
      <h2 className="relative z-[1] font-display font-[480] text-center text-paper leading-[1.05] mb-8" style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}>
        Let's build something<br />
        that <span className="text-teal italic font-display">feels</span> right.
      </h2>

      {/* Divider */}
      <div className="relative z-[1] flex items-center justify-center gap-3 mb-8 opacity-60">
        <div className="h-px bg-teal w-12 opacity-50"></div>
        <div className="w-[5px] h-[5px] rounded-full bg-teal"></div>
        <div className="h-px bg-teal w-12 opacity-50"></div>
      </div>

      {/* Paragraph */}
      <p className="relative z-[1] font-body text-[15px] text-paper/62 text-center max-w-[480px] mb-16 leading-[1.6]">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
      </p>

      {/* Cards Grid */}
      <div className="relative z-[1] grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px] mb-12">
        
        {/* Email Card */}
        <a href="mailto:nishantsahu258@gmail.com" onClick={onEmailClick} className="group flex flex-col justify-between bg-[#0e1114] border border-white/5 rounded-[20px] p-6 sm:p-8 hover:border-teal/30 hover:bg-[#12161a] transition-all duration-500">
          <div className="flex items-center gap-5 mb-12">
            <div className="w-[52px] h-[52px] rounded-full bg-ink flex items-center justify-center border border-white/5 relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-teal/20 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 text-paper relative z-10" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] text-teal tracking-[0.1em] uppercase mb-1.5">Email</p>
              <p className="font-body text-[14px] sm:text-[15px] font-[500] text-paper truncate">nishantsahu258@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5 group-hover:border-teal/20 transition-colors duration-500">
            <span className="font-body text-[12px] sm:text-[13px] text-paper/62 group-hover:text-paper/90 transition-colors">Send me a message</span>
            <svg className="w-4 h-4 text-teal transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
          </div>
        </a>

        {/* GitHub Card */}
        <a href="https://github.com/nishantsahu258-afk" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between bg-[#0e1114] border border-white/5 rounded-[20px] p-6 sm:p-8 hover:border-teal/30 hover:bg-[#12161a] transition-all duration-500">
          <div className="flex items-center gap-5 mb-12">
            <div className="w-[52px] h-[52px] rounded-full bg-ink flex items-center justify-center border border-white/5 relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-teal/20 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 text-paper relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] text-teal tracking-[0.1em] uppercase mb-1.5">GitHub</p>
              <p className="font-body text-[14px] sm:text-[15px] font-[500] text-paper truncate">nishantsahu258-afk</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5 group-hover:border-teal/20 transition-colors duration-500">
            <span className="font-body text-[12px] sm:text-[13px] text-paper/62 group-hover:text-paper/90 transition-colors">Check out my repositories</span>
            <svg className="w-4 h-4 text-teal transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a href="https://www.linkedin.com/in/nishant-sahu-9183693b5" target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between bg-[#0e1114] border border-white/5 rounded-[20px] p-6 sm:p-8 hover:border-teal/30 hover:bg-[#12161a] transition-all duration-500">
          <div className="flex items-center gap-5 mb-12">
            <div className="w-[52px] h-[52px] rounded-full bg-ink flex items-center justify-center border border-white/5 relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-teal/20 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <svg className="w-5 h-5 text-paper relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div className="min-w-0">
              <p className="font-mono text-[10px] text-teal tracking-[0.1em] uppercase mb-1.5">LinkedIn</p>
              <p className="font-body text-[14px] sm:text-[15px] font-[500] text-paper truncate">nishant-sahu-9183693b5</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5 group-hover:border-teal/20 transition-colors duration-500">
            <span className="font-body text-[12px] sm:text-[13px] text-paper/62 group-hover:text-paper/90 transition-colors">Let's connect</span>
            <svg className="w-4 h-4 text-teal transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
          </div>
        </a>
      </div>

      {/* Available pill */}
      <div className="relative z-[1] inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-[#0e1114] mb-20 hover:border-teal/30 hover:bg-[#12161a] transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_rgba(55,214,196,0.6)]"></span>
        <span className="font-body text-[13px] font-[500] text-paper/80">Available for opportunities</span>
      </div>

      {/* Footer */}
      <div className="relative z-[1] w-full flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 mt-auto font-body text-[11px] sm:text-[12px] text-paper/40 gap-4 md:gap-0">
        <p className="w-full md:w-1/3 text-center md:text-left">© 2026 Nishant Sahu. All rights reserved.</p>
        <p className="w-full md:w-1/3 text-center">Crafting <span className="text-teal">clean UI</span> & meaningful experiences</p>
        <p className="w-full md:w-1/3 text-center md:text-right">Made with 💚 and React</p>
      </div>

    </section>
  );
}
