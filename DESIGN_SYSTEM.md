# Design System Documentation

## Overview
This portfolio uses a centralized design system for consistency, maintainability, and scalability. All visual decisions originate from reusable design tokens.

## Design Tokens (`/src/lib/design-tokens.ts`)

### Typography Scale
- **Display**: Massive editorial headlines (hero, section)
- **Heading**: Section titles (h1-h4)
- **Body**: Content text (large, base, small, xsmall)
- **Label**: Small uppercase text with tracking
- **Section Number**: Large editorial numbering

### Spacing Scale
- **Section**: Vertical and horizontal padding for sections
- **Section Bottom**: Consistent bottom margins between sections
- **Grid**: Gap values for grid layouts
- **Content**: Vertical spacing between content items
- **Element**: Gap values between inline elements

### Container Widths
- **Full**: `max-w-[1600px]` - Main page container
- **Wide**: `max-w-4xl` - Wide content areas
- **Normal**: `max-w-3xl` - Standard content
- **Narrow**: `max-w-2xl` - Focused content
- **Reading**: `max-w-xl` - Optimal reading width

### Opacity Levels
- **Subtle**: 0.04 - Background typography
- **Muted**: 0.20 - Section numbers
- **Light**: 0.30 - Subtle backgrounds
- **Medium**: 0.40 - Card backgrounds
- **Strong**: 0.50 - Borders
- **Foreground**: 0.70 - Secondary text

### Border Radius
- **None**: No radius
- **Sm**: Small radius (default)
- **Md**: Medium radius
- **Lg**: Large radius
- **Full**: Pill shape

### Motion Tokens
- **Durations**: fast (0.8s), normal (1s), slow (1.2s), slower (1.5s)
- **Delays**: none (0), short (0.1), medium (0.2), long (0.4)
- **Easing**: easeOut (consistent)
- **Viewport**: { once: true, margin: "-100px" }
- **Hover**: 700ms transition

### Grid Column Distribution
- **Narrow**: 2 columns (sidebar)
- **Medium**: 3 columns (wider sidebar)
- **Wide**: 5 columns (content)
- **Wider**: 7 columns (content)
- **Widest**: 9 columns (content)
- **Full**: 12 columns

## Layout Primitives (`/src/components/layout/`)

### PageContainer
Main container with `max-w-[1600px]` and centered layout.

```tsx
<PageContainer>
  {/* content */}
</PageContainer>
```

### Section
Standard section wrapper with consistent padding.

```tsx
<Section id="about">
  {/* content */}
</Section>
```

### SplitLayout
12-column split layout with sticky sidebar.

```tsx
<SplitLayout leftWidth="narrow" leftColumn={...} rightColumn={...}>
```

### SectionHeader
Standard section header with number and title.

```tsx
<SectionHeader number="01" title="How I Think" />
```

### CenteredHeader
Centered section header with optional subtitle.

```tsx
<CenteredHeader title="Resume" subtitle="A comprehensive overview" />
```

## Motion Primitives (`/src/lib/motion.ts`)

### fadeInUp
Standard entrance animation - fade up from below.

### staggeredFadeInUp(delayMultiplier)
Staggered entrance for lists with customizable delay.

### fadeInLeft
Fade in from left side.

### fadeInScale
Fade in with scale effect.

### Reduced Motion Support
All animations respect `prefers-reduced-motion` media query.

## Color Palette (`/src/app/globals.css`)

### Light Mode
- Background: #F8F2EC
- Foreground: #241D1A
- Accent: #59171B
- Accent Light: #8A3C41
- Muted: #F0EBE5
- Muted Foreground: #7C6E66
- Border: #E3D7CF
- Card: #FFF9F5

### Dark Mode
Automatically applied via `@media (prefers-color-scheme: dark)`

## Typography System

### Font Families
- **Serif**: Cormorant Garamond (display, headings)
- **Sans**: Geist Sans (body, labels)
- **Mono**: Geist Mono (code)

### Font Weights
- Light: For body text and elegance
- Normal: Standard weight
- Medium: For emphasis

### Line Heights
- Tight: 0.85 (display typography)
- Normal: leading-tight (headings)
- Relaxed: leading-relaxed (body text)

## Component Guidelines

### When to Use SplitLayout
- Sections with sidebar navigation
- Content that benefits from sticky positioning
- Editorial split-column layouts

### When to Use CenteredHeader
- Full-width sections
- Hero statements
- Centered content areas

### Animation Best Practices
- Use motion primitives, not custom animations
- Respect reduced motion preferences
- Keep durations under 1.5s
- Use consistent easing (easeOut)

## Responsive Philosophy

### Breakpoints
- Mobile: Default (no prefix)
- Small: `sm:` (640px+)
- Medium: `md:` (768px+)
- Large: `lg:` (1024px+)
- Extra Large: `xl:` (1280px+)

### Spacing Scaling
- Vertical spacing scales with breakpoints
- Horizontal padding scales with breakpoints
- Grid gaps scale with breakpoints

### Typography Scaling
- All typography scales responsively
- Use design token scales, not arbitrary values
- Maintain visual hierarchy across breakpoints

## Future Scalability

The current architecture supports:
- Adding new sections with consistent design
- Expanding content without breaking layout
- Adding new design tokens without refactoring
- Supporting additional pages with shared primitives
- Easy theme updates via CSS variables

## Maintenance

### Adding a New Section
1. Use `Section` and `PageContainer` wrappers
2. Choose appropriate layout primitive (SplitLayout, CenteredHeader)
3. Apply design tokens for all visual values
4. Use motion primitives for animations
5. Follow existing naming conventions

### Updating Design Tokens
1. Edit `/src/lib/design-tokens.ts`
2. Changes propagate automatically
3. Test across all components
4. Update documentation

### Adding New Layout Primitives
1. Create in `/src/components/layout/`
2. Export from `/src/components/layout/index.ts`
3. Document usage
4. Follow existing patterns
