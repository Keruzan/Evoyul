'use client';

import Lenis from 'lenis'
import { useEffect } from 'react';
import '../components/lenisscroll.module.css'

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (lenis) => {
      console.log({
        scroll: lenis.scroll,
        limit: lenis.limit,
        velocity: lenis.velocity,
        direction: lenis.direction,
        progress: lenis.progress,
      });
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
