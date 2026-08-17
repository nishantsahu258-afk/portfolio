const skills = ['HTML', '·', 'CSS', '·', 'JavaScript', '·', 'React', '·', 'Tailwind CSS', '·', 'React Router', '·', 'REST APIs', '·', 'Context API', '·', 'Local Storage', '·', 'Git', '·', 'GitHub', '·', 'npm', '·', 'Vite', '·', 'Vercel', '·'];

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
