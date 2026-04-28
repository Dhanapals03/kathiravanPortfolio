import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ContactLink, PortfolioData } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { LinkButton } from '../ui/LinkButton';
import { SectionHeading } from '../ui/SectionHeading';

type ContactSectionProps = {
  contactLinks: PortfolioData['contactLinks'];
};

const iconMap: Record<ContactLink['kind'], LucideIcon> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

export function ContactSection({ contactLinks }: ContactSectionProps) {
  const primaryLink = contactLinks[0];

  return (
    <section className="section-shell pb-24 sm:pb-28" id="contact">
      <SectionHeading
        align="center"
        description="Use LinkedIn immediately, then replace the placeholder email and GitHub values in the central data file when those channels are ready to go live."
        eyebrow="Contact"
        title="Let’s build cloud delivery systems that feel precise, stable, and invisible"
      />

      <GlassPanel className="relative mt-14 overflow-hidden p-7 sm:p-9 lg:p-10 xl:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.1),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)]" />
        <div className="relative grid gap-10 xl:grid-cols-[0.98fr_1.02fr]">
          <div>
            <div className="mono-label">Open for conversations</div>
            <h3 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl">
              DevOps, cloud infrastructure, automation, and platform-focused collaboration.
            </h3>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              This portfolio is designed as a premium engineering identity layer. The contact section keeps that same tone: direct, minimal, and oriented around real delivery work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={primaryLink.href} target="_blank">
                Connect on LinkedIn
              </LinkButton>
              <LinkButton href="#hero" variant="secondary">
                Back to Top
              </LinkButton>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-2">
            {contactLinks.map((link, index) => {
              const Icon = iconMap[link.kind];
              const wideClassName = index === 0 ? 'md:col-span-2' : '';

              return (
                <a
                  className={`glass-card-soft group relative min-w-0 overflow-hidden rounded-[30px] p-6 text-left transition duration-300 hover:-translate-y-1 ${wideClassName}`}
                  href={link.href}
                  key={link.label}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-200/0 via-cyan-200/70 to-violet-200/0" />
                  <div className="flex items-start justify-between gap-3">
                    <div className="rounded-[22px] border border-white/10 bg-white/5 p-3 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:text-cyan-100" />
                  </div>

                  <div className="mt-8">
                    <div className="mono-label">{index === 0 ? 'Primary Channel' : 'Secondary Channel'}</div>
                    <h3 className="mt-3 break-words text-2xl font-semibold tracking-[-0.04em] text-white">{link.label}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{link.note}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
