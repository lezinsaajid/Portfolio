// ============================================
// SPLIT LAYOUT
// Standard 12-column split layout with sticky sidebar
// ============================================

import { spacing, grid, sticky } from '@/lib/design-tokens';

interface SplitLayoutProps {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
  leftWidth?: 'narrow' | 'medium';
  className?: string;
}

export function SplitLayout({ 
  leftColumn, 
  rightColumn, 
  leftWidth = 'narrow',
  className = '' 
}: SplitLayoutProps) {
  const leftColClass = leftWidth === 'narrow' ? grid.split.narrow : grid.split.medium;
  const rightColClass = leftWidth === 'narrow' ? grid.split.wider : grid.split.wide;

  return (
    <div className={`grid grid-cols-12 ${spacing.grid.normal} ${className}`}>
      {/* Left column - sticky on desktop */}
      <div className={`${leftColClass} ${sticky.enabled} h-fit mb-8 md:mb-0`}>
        {leftColumn}
      </div>

      {/* Right column */}
      <div className={rightColClass}>
        {rightColumn}
      </div>
    </div>
  );
}
