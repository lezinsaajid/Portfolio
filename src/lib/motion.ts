// ============================================
// MOTION PRIMITIVES
// Standardized animation patterns
// ============================================

import { motion as motionTokens } from './design-tokens';

/**
 * Check if user prefers reduced motion
 */
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Standard entrance animation - fade up
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: motionTokens.viewport,
  transition: prefersReducedMotion() 
    ? { duration: 0 }
    : { duration: motionTokens.duration.normal, ease: motionTokens.easing },
};

/**
 * Staggered entrance animation for lists
 */
export const staggeredFadeInUp = (delayMultiplier: number = 0.1) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: motionTokens.viewport,
  transition: prefersReducedMotion()
    ? { duration: 0 }
    : { duration: motionTokens.duration.fast, delay: delayMultiplier, ease: motionTokens.easing },
});

/**
 * Fade in from left
 */
export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: motionTokens.viewport,
  transition: prefersReducedMotion()
    ? { duration: 0 }
    : { duration: motionTokens.duration.normal, ease: motionTokens.easing },
};

/**
 * Fade in with scale
 */
export const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: motionTokens.viewport,
  transition: prefersReducedMotion()
    ? { duration: 0 }
    : { duration: motionTokens.duration.normal, ease: motionTokens.easing },
};

/**
 * Hover transition
 */
export const hoverTransition = {
  transition: { duration: motionTokens.hover },
};
