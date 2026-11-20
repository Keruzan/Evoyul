'use client';

import dynamic from 'next/dynamic';
import { Component, ReactNode, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EvoScene = dynamic(() => import('./EvoScene'), { ssr: false });

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function HeroCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setMobile(window.innerWidth < 820);
    setReady(hasWebGL());
    const onResize = () => setMobile(window.innerWidth < 820);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el || !ready) return;
    gsap.registerPlugin(ScrollTrigger);
    const hero = el.parentElement ?? el;
    const st = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        progress.current = self.progress;
      },
    });
    const io = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => {
      st.kill();
      io.disconnect();
    };
  }, [ready]);

  return (
    <div ref={wrap} className="hero-canvas" aria-hidden="true">
      {ready && (
        <SceneBoundary>
          <EvoScene progress={progress} active={active} mobile={mobile} reduced={reduced} />
        </SceneBoundary>
      )}
    </div>
  );
}
