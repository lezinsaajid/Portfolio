// ============================================
// SECTION HEADER
// Standard section header with number and title
// ============================================

import { typography, spacing, colorOpacity } from '@/lib/design-tokens';

interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export function SectionHeader({ number, title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <span className={`${typography.sectionNumber} ${typography.fontFamily.serif} ${colorOpacity.muted}`}>
        {number}
      </span>
      <h2 className={`${typography.heading.h2} ${typography.fontFamily.serif} ${typography.lineHeight.normal} text-foreground`}>
        {title}
      </h2>
    </div>
  );
}
