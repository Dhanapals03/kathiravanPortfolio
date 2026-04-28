import { BriefcaseBusiness, CheckCircle2 } from 'lucide-react';
import type { PortfolioData } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

type ExperienceSectionProps = {
  experience: PortfolioData['experience'];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  const metrics = [
    { label: 'Current Role', value: '01' },
    { label: 'Tooling Surface', value: `0${experience.toolkit.length}` },
    { label: 'Focus Areas', value: `0${experience.highlights.length}` },
  ];

  return (
    <section className="section-shell" id="experience">
      <SectionHeading
        description="The experience section shifts from tools to operating responsibility: the actual environment where cloud administration, delivery automation, and observability come together."
        eyebrow="Experience"
        title="Production-oriented delivery work at vThink Global Technologies"
      />

      <Reveal className="mt-14">
        <GlassPanel className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%)]" />
          <div className="relative grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <BriefcaseBusiness className="h-4 w-4 text-cyan-200" />
                <span>{experience.period}</span>
              </div>

              <h3 className="mt-6 break-words text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{experience.role}</h3>
              <p className="mt-3 text-lg text-cyan-100">{experience.company}</p>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">{experience.summary}</p>

              <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div className="glass-card-soft min-w-0 rounded-[24px] p-4" key={metric.label}>
                    <div className="mono-label">{metric.label}</div>
                    <div className="mt-3 break-words text-2xl font-semibold text-white">{metric.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.toolkit.map((tool) => (
                  <span className="tag-pill" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative pl-0 xl:pl-8">
              <div className="absolute bottom-0 left-2 top-0 hidden w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/30 to-violet-200/0 xl:block" />
              <div className="grid gap-4">
                {experience.highlights.map((item, index) => (
                  <Reveal delay={index * 0.05} key={item}>
                    <div className="glass-card-soft relative rounded-[28px] px-5 py-5 xl:ml-6">
                      <div className="absolute left-[-2.1rem] top-6 hidden h-4 w-4 rounded-full border border-cyan-300/30 bg-cyan-300/20 shadow-[0_0_25px_rgba(34,211,238,0.8)] xl:block" />
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-100">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mono-label">Workstream 0{index + 1}</div>
                          <p className="mt-3 break-words text-sm leading-8 text-slate-200">{item}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </GlassPanel>
      </Reveal>
    </section>
  );
}
