// ============================================
// DESIGN TOKENS
// Centralized design system for consistency
// ============================================

/**
 * TYPOGRAPHY SCALE
 * Based on a modular scale for harmonious sizing
 */
export const typography = {
  // Display typography - massive editorial headlines
  display: {
    hero: 'text-5xl md:text-7xl lg:text-8xl',
    section: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
  },
  
  // Heading typography - section titles
  heading: {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-2xl sm:text-3xl md:text-4xl',
    h3: 'text-xl sm:text-2xl md:text-3xl',
    h4: 'text-lg sm:text-xl md:text-2xl',
  },
  
  // Body typography
  body: {
    large: 'text-lg sm:text-xl md:text-2xl',
    base: 'text-base sm:text-lg md:text-xl',
    small: 'text-sm sm:text-base md:text-lg',
    xsmall: 'text-xs sm:text-sm md:text-base',
  },
  
  // Label typography
  label: {
    base: 'text-[10px] sm:text-xs tracking-[0.2em] uppercase',
    tracking: 'tracking-[0.3em]',
  },
  
  // Section numbers
  sectionNumber: 'text-5xl sm:text-6xl md:text-7xl',
  
  // Font families
  fontFamily: {
    serif: 'font-serif',
    sans: 'font-sans',
    mono: 'font-mono',
  },
  
  // Font weights
  fontWeight: {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
  },
  
  // Line heights
  lineHeight: {
    tight: 'leading-[0.85]',
    normal: 'leading-tight',
    relaxed: 'leading-relaxed',
  },
} as const;

/**
 * SPACING SCALE
 * Consistent spacing system
 */
export const spacing = {
  // Section padding — horizontal gutters live on PageContainer only
  section: {
    py: 'py-20 md:py-28 lg:py-32',
  },
  
  // Section bottom margin
  sectionBottom: {
    none: '',
    small: 'mb-8 md:mb-12',
    medium: 'mb-12 md:mb-16 lg:mb-20',
    large: 'mb-16 md:mb-20 lg:mb-24 xl:mb-32',
    xl: 'mb-16 md:mb-20 lg:mb-32 xl:mb-48',
  },
  
  // Grid gaps
  grid: {
    tight: 'gap-4 sm:gap-6 md:gap-8 lg:gap-12',
    normal: 'gap-6 md:gap-8 lg:gap-16',
    loose: 'gap-8 md:gap-12 lg:gap-16 xl:gap-20',
    xl: 'gap-12 md:gap-16 lg:gap-24',
  },
  
  // Content spacing
  content: {
    tight: 'space-y-4 sm:space-y-6',
    normal: 'space-y-6 sm:space-y-8 md:space-y-12',
    loose: 'space-y-8 md:space-y-12 lg:space-y-16',
    xl: 'space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24',
  },
  
  // Element spacing
  element: {
    xs: 'gap-2 sm:gap-3',
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
  },
} as const;

/**
 * CONTAINER WIDTHS
 * Consistent max-widths
 */
export const container = {
  /** Applied via .page-container in globals.css */
  full: 'page-container',
  wide: 'max-w-5xl',
  normal: 'max-w-4xl',
  narrow: 'max-w-3xl',
  reading: 'max-w-2xl',
} as const;

/**
 * OPACITY LEVELS
 * Consistent opacity values
 */
export const opacity = {
  subtle: 'opacity-0.04',
  muted: 'opacity-0.20',
  light: 'opacity-0.30',
  medium: 'opacity-0.40',
  strong: 'opacity-0.50',
  foreground: 'opacity-0.70',
} as const;

/**
 * BORDER RADIUS
 * Consistent border radius values
 */
export const radius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const;

/**
 * MOTION TOKENS
 * Standardized animation values
 */
export const motion = {
  // Durations
  duration: {
    fast: 0.8,
    normal: 1,
    slow: 1.2,
    slower: 1.5,
  },
  
  // Delays
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },
  
  // Easing
  easing: 'easeOut' as const,
  
  // Viewport settings
  viewport: {
    once: true,
    margin: '-100px',
  },
  
  // Hover transition duration
  hover: 'duration-700',
} as const;

/**
 * STICKY POSITIONING
 * Consistent sticky values
 */
export const sticky = {
  enabled: 'md:sticky md:top-32',
  offset: 'top-32',
} as const;

/**
 * GRID COLUMN DISTRIBUTION
 * Common grid patterns - columns always sum to 12
 */
export const grid = {
  // Split layouts — columns always sum to 12
  split: {
    narrow: 'col-span-12 md:col-span-3 lg:col-span-3',
    medium: 'col-span-12 md:col-span-4 lg:col-span-4',
    wide: 'col-span-12 md:col-span-8 lg:col-span-8',
    wider: 'col-span-12 md:col-span-9 lg:col-span-9',
    widest: 'col-span-12 md:col-span-9 lg:col-span-9',
    full: 'col-span-12',
  },
} as const;

/**
 * COLOR OPACITY MODIFIERS
 * Consistent color opacity values
 */
export const colorOpacity = {
  muted: 'text-muted-foreground/30',
  subtle: 'text-muted-foreground/20',
  accent: 'text-accent/30',
} as const;
