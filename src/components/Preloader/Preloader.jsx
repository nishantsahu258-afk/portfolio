export default function Preloader() {
  return (
    <div
      id="preloader"
      className="preloader fixed inset-0 z-[9999] bg-ink flex flex-col items-center justify-center gap-[22px] transition-[opacity,visibility] duration-[800ms]"
    >
      <div className="font-display text-[15px] tracking-[.3em] text-paper/62">NS</div>

      <div className="w-[min(260px,60vw)] h-px bg-paper/12 relative overflow-hidden">
        <span id="preloaderFill" className="absolute inset-0 w-0 bg-teal block" />
      </div>

      <div id="preloaderCount" className="font-mono text-xs text-paper/34">0</div>
    </div>
  );
}
