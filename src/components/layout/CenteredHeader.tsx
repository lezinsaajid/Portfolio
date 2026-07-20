// ============================================
// CENTERED HEADER
// Standard centered section header
// ============================================

import { typography, spacing, container } from '@/lib/design-tokens';

interface CenteredHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function CenteredHeader({ title, subtitle, className = '' }: CenteredHeaderProps) {
  return (
    <div className={`text-center ${spacing.sectionBottom.large} ${className}`}>
      <h2 className={`${typography.display.section} ${typography.fontFamily.serif} text-foreground mb-4 sm:mb-6`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${typography.body.base} text-muted-foreground ${container.normal} mx-auto ${typography.fontWeight.light}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
