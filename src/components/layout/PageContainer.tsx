// ============================================
// PAGE CONTAINER
// ============================================

import { container } from "@/lib/design-tokens";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div className={`${container.full} ${className}`}>
      {children}
    </div>
  );
}