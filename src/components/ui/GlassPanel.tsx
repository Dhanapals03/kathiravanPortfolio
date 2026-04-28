import type { ReactNode } from 'react';

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  soft?: boolean;
};

export function GlassPanel({ children, className = '', soft = false }: GlassPanelProps) {
  const surfaceClass = soft ? 'glass-card-soft' : 'glass-card';

  return <div className={`${surfaceClass} noise-overlay rounded-[32px] ${className}`}>{children}</div>;
}
