// ============================================
// SECTION
// Standard section wrapper with consistent padding
// ============================================

import { spacing } from '@/lib/design-tokens';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`${spacing.section.py} ${className}`}
    >
      {children}
    </section>
  );
}
