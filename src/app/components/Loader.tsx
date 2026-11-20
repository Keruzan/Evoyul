'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const R = 70;
const C = 2 * Math.PI * R;

export default function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MIN = reduced ? 300 : 1800;
    const start = performance.now();
    let loaded = document.readyState === 'complete';
    const onLoad = () => {
      loaded = true;
    };
    window.addEventListener('load', onLoad);

    const html = document.documentElement;
    const finish = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          html.classList.remove('evo-loading');
          window.dispatchEvent(new Event('evo:ready'));
          setGone(true);
        },
      });
      if (reduced) {
        tl.to(root.current, { opacity: 0, duration: 0.3 });
      } else {
        tl.to('.evo-loader__meta, .evo-loader__tag', { opacity: 0, y: 10, duration: 0.35, ease: 'power2.in' })
          .to('.evo-loader__mark', { scale: 0.86, duration: 0.45, ease: 'power3.in' }, '<')
          .to(root.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '>-0.05');
      }
    };

    let p = 0;
    let raf = 0;
    let done = false;
    const tick = () => {
      const el = performance.now() - start;
      const target = (loaded && el >= MIN) || el > 8000 ? 100 : Math.min(90, (el / MIN) * 90);
      p += (target - p) * 0.12;
      if (target === 100 && p > 99.4) p = 100;
      if (count.current) count.current.textContent = String(Math.round(p)).padStart(3, '0');
      if (ring.current) ring.current.style.strokeDashoffset = String(C * (1 - p / 100));
      if (p >= 100 && !done) {
        done = true;
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (gone) return null;

  return (
    <div ref={root} className="evo-loader" role="status" aria-live="polite" aria-label="Loading Evoyul">
      <div className="evo-loader__mark">
        <svg viewBox="0 0 160 160" width="168" height="168" aria-hidden="true">
          <circle cx="80" cy="80" r={R} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
          <circle
            ref={ring}
            cx="80"
            cy="80"
            r={R}
            fill="none"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C}
            transform="rotate(-90 80 80)"
          />
        </svg>
        <Image src="/images/evo.png" alt="Evoyul" width={104} height={104} priority className="evo-loader__logo" />
      </div>
      <div className="evo-loader__meta">
        <span>EVOYUL</span>
        <span ref={count}>000</span>
      </div>
      <p className="evo-loader__tag">Build the future of your business</p>
    </div>
  );
}
