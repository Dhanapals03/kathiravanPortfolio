import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClassName = align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl';

  return (
    <Reveal className={alignClassName}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy">{description}</p>
    </Reveal>
  );
}
