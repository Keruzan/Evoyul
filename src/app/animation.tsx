'use client';

import React, { useEffect, useRef, useState } from 'react';

// Animation types
export type AnimationType = 
  | 'fadeIn' 
  | 'fadeOut' 
  | 'fadeFromRight' 
  | 'fadeFromLeft' 
  | 'fadeFromTop' 
  | 'fadeFromBottom'
  | 'slideFromRight'
  | 'slideFromLeft'
  | 'slideFromTop'
  | 'slideFromBottom'
  | 'scaleIn'
  | 'scaleOut';

// Duration presets
export type AnimationDuration = 'fast' | 'normal' | 'slow' | 'slower';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  duration?: AnimationDuration | string;
  delay?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fadeIn',
  duration = 'normal',
  delay = '0ms',
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
  className = '',
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // Duration mapping
  const getDurationValue = (dur: AnimationDuration | string): string => {
    if (typeof dur === 'string' && !['fast', 'normal', 'slow', 'slower'].includes(dur)) {
      return dur;
    }
    
    const durations = {
      fast: '300ms',
      normal: '600ms',
      slow: '900ms',
      slower: '1200ms'
    };
    
    return durations[dur as AnimationDuration] || durations.normal;
  };

  // Get animation styles
  const getAnimationStyles = (): React.CSSProperties => {
    const durationValue = getDurationValue(duration);
    
    const baseStyles: React.CSSProperties = {
      transition: `all ${durationValue} cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      transitionDelay: delay,
    };

    // Initial states (before animation)
    const initialStates: Record<AnimationType, React.CSSProperties> = {
      fadeIn: {
        opacity: 0,
      },
      fadeOut: {
        opacity: 1,
      },
      fadeFromRight: {
        opacity: 0,
        transform: 'translateX(50px)',
      },
      fadeFromLeft: {
        opacity: 0,
        transform: 'translateX(-50px)',
      },
      fadeFromTop: {
        opacity: 0,
        transform: 'translateY(-50px)',
      },
      fadeFromBottom: {
        opacity: 0,
        transform: 'translateY(50px)',
      },
      slideFromRight: {
        opacity: 0,
        transform: 'translateX(100px)',
      },
      slideFromLeft: {
        opacity: 0,
        transform: 'translateX(-100px)',
      },
      slideFromTop: {
        opacity: 0,
        transform: 'translateY(-100px)',
      },
      slideFromBottom: {
        opacity: 0,
        transform: 'translateY(100px)',
      },
      scaleIn: {
        opacity: 0,
        transform: 'scale(0.8)',
      },
      scaleOut: {
        opacity: 1,
        transform: 'scale(1)',
      },
    };

    // Final states (after animation)
    const finalStates: Record<AnimationType, React.CSSProperties> = {
      fadeIn: {
        opacity: 1,
      },
      fadeOut: {
        opacity: 0,
      },
      fadeFromRight: {
        opacity: 1,
        transform: 'translateX(0)',
      },
      fadeFromLeft: {
        opacity: 1,
        transform: 'translateX(0)',
      },
      fadeFromTop: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      fadeFromBottom: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      slideFromRight: {
        opacity: 1,
        transform: 'translateX(0)',
      },
      slideFromLeft: {
        opacity: 1,
        transform: 'translateX(0)',
      },
      slideFromTop: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      slideFromBottom: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      scaleIn: {
        opacity: 1,
        transform: 'scale(1)',
      },
      scaleOut: {
        opacity: 0,
        transform: 'scale(0.8)',
      },
    };

    const currentState = isVisible ? finalStates[animation] : initialStates[animation];
    
    return {
      ...baseStyles,
      ...currentState,
      ...style,
    };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          } else if (!triggerOnce && hasTriggered) {
            setIsVisible(false);
          }
        });
      },
      { 
        threshold,
        rootMargin 
      }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return (
    <div
      ref={domRef}
      className={`animated-section ${className}`}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

// Convenience components for specific animations
export const FadeIn: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="fadeIn" />
);

export const FadeOut: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="fadeOut" />
);

export const FadeFromRight: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="fadeFromRight" />
);

export const FadeFromLeft: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="fadeFromLeft" />
);

export const FadeFromTop: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="fadeFromTop" />
);

export const FadeFromBottom: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="fadeFromBottom" />
);

export const SlideFromRight: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="slideFromRight" />
);

export const SlideFromLeft: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="slideFromLeft" />
);

export const SlideFromTop: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="slideFromTop" />
);

export const SlideFromBottom: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="slideFromBottom" />
);

export const ScaleIn: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="scaleIn" />
);

export const ScaleOut: React.FC<Omit<AnimatedSectionProps, 'animation'>> = (props) => (
  <AnimatedSection {...props} animation="scaleOut" />
);

// Hook for programmatic control
export const useAnimatedSection = (
  animation: AnimationType = 'fadeIn',
  options: {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
  } = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              setHasTriggered(true);
            }
          } else if (!triggerOnce && hasTriggered) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { ref, isVisible, hasTriggered, animation};
};