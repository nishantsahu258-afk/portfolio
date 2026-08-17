import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import RippleCanvas from '../RippleCanvas/RippleCanvas';

const TITLES = [
  { lines: ["Nishant", "Sahu"], className: "font-['Playfair_Display'] italic tracking-tight text-[1.2em]" },
  { lines: ["Frontend", "Developer"], className: "font-['Oswald'] uppercase tracking-normal text-[1em]" },
  { lines: ["UI/UX", "Designer"], className: "font-['VT323'] tracking-widest lowercase text-[1.45em] leading-[0.75]" },
  { lines: ["React", "Developer"], className: "font-['Dancing_Script'] tracking-normal lowercase text-[1.6em] leading-[0.8]" },
  { lines: ["CREATIVE", "DESIGNER"], className: "font-['Monoton'] uppercase tracking-normal text-[0.85em] leading-[1.1]" }
];

export default function Hero({ gsapReady }) {
  const timeRef = useRef(null);
  const titleContainerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      if (timeRef.current)
        timeRef.current.textContent = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!gsapReady || !titleContainerRef.current) return;

    const blocks = titleContainerRef.current.children;
    
    // Hide all lines initially
    Array.from(blocks).forEach(block => {
      gsap.set(block.children, { opacity: 0, y: 50, filter: 'blur(12px)' });
    });

    // Reveal the first block's lines instantly
    gsap.set(blocks[0].children, { opacity: 1, y: 0, filter: 'blur(0px)' });

    let currentIndex = 0;

    const playNext = () => {
      if (!titleContainerRef.current) return;
      
      const currentLines = blocks[currentIndex].children;
      currentIndex = (currentIndex + 1) % blocks.length;
      const nextLines = blocks[currentIndex].children;

      // Fade out current with stagger
      gsap.to(currentLines, {
        opacity: 0,
        y: -50,
        filter: 'blur(12px)',
        duration: 1.2,
        ease: 'power3.inOut',
        stagger: 0.1
      });

      // Fade in next with stagger, delayed to prevent messy mixing
      gsap.fromTo(nextLines,
        { opacity: 0, y: 50, filter: 'blur(12px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.inOut', stagger: 0.1, delay: 0.6 }
      );

      animRef.current = gsap.delayedCall(4, playNext);
    };

    // Start cycle after initial pause
    animRef.current = gsap.delayedCall(2.5, playNext);

    return () => {
      if (animRef.current) animRef.current.kill();
      Array.from(blocks).forEach(block => gsap.killTweensOf(block.children));
    };
  }, [gsapReady]);

  return (
    <section
      id="hero"
      className="relative h-svh min-h-[640px] p-0 flex flex-col justify-between overflow-hidden"
    >
      <RippleCanvas />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(120% 90% at 50% 100%, rgba(10,13,16,0) 0%, rgba(10,13,16,.9) 78%),
            linear-gradient(180deg, rgba(10,13,16,.55) 0%, rgba(10,13,16,0) 30%, rgba(10,13,16,0) 60%, rgba(10,13,16,.75) 100%)
          `,
        }}
      />

      <div className="hero-rows relative z-[2] flex items-end justify-between px-[var(--edge)] pt-[110px] font-mono text-[12.5px] text-paper/62">
        <p className="flex items-center gap-[10px] tracking-[.05em]">
          <span className="w-[7px] h-[7px] rounded-full bg-teal shadow-[0_0_0_4px_rgba(55,214,196,.18)]" />
          Frontend Developer — React / JavaScript
        </p>
        <p>Available for work · IN <span ref={timeRef} id="localTime">--:--</span></p>
      </div>

      <div className="hero-title relative z-[2] w-full flex-1 flex items-center justify-center">
        <h1
          className="relative text-center px-[var(--edge)] font-display font-[520] leading-[.92] tracking-[-0.02em] w-full"
          style={{ fontSize: 'clamp(64px, 15vw, 210px)' }}
        >
          {/* Dummy element to preserve exact height of the 2 lines based on Frontend Developer */}
          <div className="invisible pointer-events-none flex flex-col items-center w-full font-['Oswald'] uppercase text-[1em]">
            <span className="hero__title-line block">Frontend</span>
            <span className="hero__title-line block">Developer</span>
          </div>

          <div ref={titleContainerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {TITLES.map((title, i) => (
              <div key={i} className={`absolute flex flex-col items-center w-full ${title.className}`}>
                <span className="hero__title-line block text-paper">{title.lines[0]}</span>
                <span className="hero__title-line hero-outline block">{title.lines[1]}</span>
              </div>
            ))}
          </div>
        </h1>
      </div>

      <div className="hero-rows relative z-[2] flex items-end justify-between px-[var(--edge)] pb-[46px] font-mono text-[12.5px] text-paper/62">
        <p className="max-w-[340px] font-body text-[14.5px] text-paper/62 leading-[1.55]">
          I craft responsive web experiences where thoughtful UI meets solid React and JavaScript engineering.
        </p>
        <div className="flex flex-col items-center gap-[10px] uppercase tracking-[.14em] text-paper/62" data-hover>
          <span>Scroll</span>
          <div className="w-px h-[54px] bg-paper/12 overflow-hidden">
            <i className="block w-full h-[22px] bg-teal not-italic" style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
