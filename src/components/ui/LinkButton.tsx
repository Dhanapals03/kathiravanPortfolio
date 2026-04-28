import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function LinkButton({
  children,
  className = '',
  href = '#',
  icon,
  target = '_self',
  rel,
  variant = 'primary',
  ...props
}: LinkButtonProps) {
  const baseClassName =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300';

  const variantClassName =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 text-slate-950 shadow-[0_16px_50px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 hover:brightness-110'
      : 'border border-white/10 bg-white/5 text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:border-cyan-300/[0.35] hover:bg-white/10 hover:text-white';

  const resolvedRel = target === '_blank' ? 'noreferrer noopener' : rel;

  return (
    <a
      className={`${baseClassName} ${variantClassName} ${className}`}
      href={href}
      rel={resolvedRel}
      target={target}
      {...props}
    >
      <span>{children}</span>
      {icon ?? <ArrowUpRight className="h-4 w-4" />}
    </a>
  );
}
