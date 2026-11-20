'use client';

import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

export default function LenisScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    if (document.documentElement.classList.contains('evo-loading')) lenis.stop();
    const onReady = () => lenis.start();
    window.addEventListener('evo:ready', onReady);

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener('evo:ready', onReady);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
