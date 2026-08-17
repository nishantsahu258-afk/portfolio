export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="flex items-center justify-between px-[var(--edge)] py-[26px] border-t border-paper/12 font-mono text-xs text-paper/34">
      <p>© {new Date().getFullYear()} Nishant Sahu. Built with React, Tailwind CSS &amp; WebGL.</p>
      <a
        href="#top"
        className="transition-colors duration-[250ms] hover:text-teal"
        data-hover
        data-magnetic
        onClick={(e) => { e.preventDefault(); scrollTop(); }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}
