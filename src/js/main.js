import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function initPreloader(onDone) {
  const ref = document.getElementById('preloader');
  const fillRef = document.getElementById('preloaderFill');
  const countRef = document.getElementById('preloaderCount');
  if (!ref) return () => {};

  document.body.style.overflow = 'hidden';
  let pct = 0;
  const timer = setInterval(() => {
    pct += Math.random() * 18;
    if (pct >= 100) {
      pct = 100;
      clearInterval(timer);
      setTimeout(() => {
        ref.classList.add('is-done');
        document.body.style.overflow = '';
        if (onDone) onDone();
      }, 260);
    }
    if (fillRef) fillRef.style.width = pct + '%';
    if (countRef) countRef.textContent = Math.floor(pct);
  }, 140);

  return () => clearInterval(timer);
}

export function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return () => {};

  const dot = cursor.querySelector('.cursor__dot');
  const ring = cursor.querySelector('.cursor__ring');
  const label = cursor.querySelector('.cursor__label');

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let rafId;

  const onMove = (e) => { mx = e.clientX; my = e.clientY; };
  window.addEventListener('pointermove', onMove);

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function rafCursor() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    if (dot) dot.style.transform = `translate(${mx}px, ${my}px)`;
    if (ring) ring.style.transform = `translate(${rx}px, ${ry}px)`;
    rafId = requestAnimationFrame(rafCursor);
  }
  if (!prefersReduced) rafId = requestAnimationFrame(rafCursor);

  const hoverEls = document.querySelectorAll('[data-hover]');
  const handlers = [];
  hoverEls.forEach((el) => {
    const enter = () => {
      cursor.classList.add('is-hover');
      const text = el.getAttribute('data-cursor-text');
      if (text && label) { cursor.classList.add('is-text'); label.textContent = text; }
    };
    const leave = () => { cursor.classList.remove('is-hover', 'is-text'); if(label) label.textContent = ''; };
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointerleave', leave);
    handlers.push({ el, enter, leave });
  });

  const invertEls = document.querySelectorAll('[data-cursor-invert]');
  const invertHandlers = [];
  invertEls.forEach((el) => {
    const enter = () => cursor.classList.add('is-invert');
    const leave = () => cursor.classList.remove('is-invert');
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointerleave', leave);
    invertHandlers.push({ el, enter, leave });
  });

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('pointermove', onMove);
    handlers.forEach(({ el, enter, leave }) => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointerleave', leave);
    });
    invertHandlers.forEach(({ el, enter, leave }) => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointerleave', leave);
    });
  };
}

export function initNav() {
  const nav = document.getElementById('navHeader');
  if (!nav) return () => {};

  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    if (y > lastScroll && y > 200) nav.classList.add('is-hidden');
    else nav.classList.remove('is-hidden');
    lastScroll = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  const els = document.querySelectorAll('[data-magnetic]');
  const magHandlers = [];
  els.forEach(el => {
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.28}px, ${(e.clientY - (r.top + r.height / 2)) * 0.35}px)`;
    };
    const onLeave = () => { el.style.transform = 'translate(0,0)'; };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    magHandlers.push({ el, onMove, onLeave });
  });

  const sideNav = document.getElementById('sideNav');
  let io;
  if (sideNav) {
    const links = sideNav.querySelectorAll('.side-nav-link');
    const targets = Array.from(links).map((a) => document.getElementById(a.getAttribute('data-target')));
    io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = targets.indexOf(entry.target);
        if (idx === -1 || !entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove('is-active'));
        links[idx].classList.add('is-active');
      });
    }, { threshold: 0.5 });
    targets.forEach((t) => t && io.observe(t));
  }

  return () => {
    window.removeEventListener('scroll', onScroll);
    magHandlers.forEach(({ el, onMove, onLeave }) => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    });
    if (io) io.disconnect();
  };
}

export function initAnimations() {
  // Hero content intro
  gsap.set('.hero-rows', { opacity: 0, y: 15 });
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.to('.hero-rows', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, "-=0.6");

  // Hero parallax
  gsap.to('.hero__canvas', {
    yPercent: 12, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6 }
  });

  // Common idx-heads
  document.querySelectorAll('.idx-head').forEach(head => {
    const rule = head.querySelector('.idx-rule');
    const num = head.querySelector('.idx-num');
    const lbl = head.querySelector('.idx-label');
    gsap.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'power3.out', transformOrigin: 'left center', scrollTrigger: { trigger: head, start: 'top 88%' } });
    gsap.fromTo([num, lbl], { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: head, start: 'top 88%' } });
  });

  // About masks
  document.querySelectorAll('#about .line-inner').forEach(el => {
    gsap.to(el, { y: '0%', duration: 1, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 92%' } });
  });
  const portrait = document.querySelector('.about-portrait');
  if (portrait) {
    gsap.fromTo(portrait, { opacity: 0, y: 40, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: portrait, start: 'top 85%' } });
  }

  // Word coloring
  const textEl = document.getElementById('aboutText');
  if (textEl && !textEl.dataset.initialized) {
    textEl.dataset.initialized = 'true';
    const text = textEl.textContent.trim().replace(/\s+/g, ' ');
    textEl.innerHTML = text.split(' ').map((w) => `<span class="word">${w}</span>`).join(' ');
    gsap.to(textEl.querySelectorAll('.word'), {
      color: '#F3F1EA', stagger: 0.02, ease: 'none',
      scrollTrigger: { trigger: textEl, start: 'top 82%', end: 'bottom 55%', scrub: 0.4 }
    });
  }

  // Count up
  const countEl = document.querySelector('[data-count-to]');
  if (countEl) {
    const target = parseFloat(countEl.getAttribute('data-count-to'));
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target, duration: 1.1, ease: 'power2.out',
      scrollTrigger: { trigger: countEl, start: 'top 92%', once: true },
      onUpdate: () => { countEl.textContent = Math.floor(obj.val); },
      onComplete: () => { countEl.textContent = target; }
    });
  }

  // About meta items
  gsap.fromTo(document.querySelectorAll('.about-meta-item'), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.about-meta-item', start: 'top 90%' } });

  // Work rows
  document.querySelectorAll('.work-row').forEach(row => {
    const mask = row.querySelector('.work-mask');
    const meta = row.querySelectorAll('.work-meta > *');
    gsap.fromTo(mask, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.inOut', scrollTrigger: { trigger: row, start: 'top 80%' } });
    gsap.fromTo(meta, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 78%' } });
  });

  // Ledgers
  document.querySelectorAll('.ledger').forEach(ledger => {
    gsap.fromTo(ledger.querySelectorAll('.ledger__row'), { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: ledger, start: 'top 85%' } });
  });

  // Contact
  gsap.fromTo('.contact__title', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '.contact__title', start: 'top 85%' } });
  gsap.fromTo('.contact-email, .contact-socials', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '#contact', start: 'top 80%' } });

  // Contact letter repel
  const titleEl = document.getElementById('contactTitle');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rafId;
  if (titleEl && !prefersReduced && !titleEl.dataset.initialized) {
    titleEl.dataset.initialized = 'true';
    const walk = (node, out) => {
      node.childNodes.forEach((child) => {
        if (child.nodeType === 3) {
          child.textContent.split('').forEach((ch) => {
            if (ch === ' ') { out.appendChild(document.createTextNode('\u00A0')); return; }
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = ch;
            out.appendChild(span);
          });
        } else if (child.tagName === 'BR') {
          out.appendChild(document.createElement('br'));
        } else { walk(child, out); }
      });
    };
    const frag = document.createDocumentFragment();
    walk(titleEl, frag);
    titleEl.innerHTML = '';
    titleEl.appendChild(frag);
    const letters = titleEl.querySelectorAll('.letter');

    let tmx = -9999, tmy = -9999;
    titleEl.addEventListener('pointermove', (e) => { tmx = e.clientX; tmy = e.clientY; });
    titleEl.addEventListener('pointerleave', () => { tmx = -9999; tmy = -9999; });

    const loop = () => {
      letters.forEach((l) => {
        const r = l.getBoundingClientRect();
        const dx = (r.left + r.width / 2) - tmx, dy = (r.top + r.height / 2) - tmy;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          const power = 1 - dist / 120;
          const push  = power * 18;
          const angle = Math.atan2(dy, dx);
          l.style.transform = `translate(${Math.cos(angle)*push}px, ${Math.sin(angle)*push}px) scale(${1+power*0.25})`;
          l.style.color = '#37D6C4';
        } else { l.style.transform = ''; l.style.color = ''; }
      });
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
  }

  return () => {
    ScrollTrigger.getAll().forEach(st => st.kill());
    if (rafId) cancelAnimationFrame(rafId);
  };
}
