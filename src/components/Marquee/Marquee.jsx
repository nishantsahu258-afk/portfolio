const skills = ['React','·','TypeScript','·','Next.js','·','Tailwind CSS','·','Framer Motion','·','GSAP','·','REST / API Integration','·','Node.js','·'];

export default function Marquee() {
  return (
    <div className="border-y border-paper/12 overflow-hidden py-5 bg-ink-soft" aria-hidden="true">
      <div
        className="marquee-track flex gap-[22px] whitespace-nowrap w-max"
        style={{ animation: 'marquee 32s linear infinite' }}
      >
        {[...skills, ...skills].map((s, i) => (
          <span key={i} className="font-mono text-sm text-paper/34 tracking-[.03em]">{s}</span>
        ))}
      </div>
    </div>
  );
}
