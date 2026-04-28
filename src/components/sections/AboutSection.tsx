import type { PortfolioData } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

type AboutSectionProps = {
  about: PortfolioData['about'];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="section-shell" id="about">
      <SectionHeading
        description="A profile shaped around resilient cloud environments, consistent release systems, and automation that removes operational noise instead of adding more of it."
        eyebrow="About"
        title="An infrastructure engineer focused on reliability, speed, and repeatable cloud operations"
      />

      <div className="mt-14 grid min-w-0 gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="min-w-0">
          <GlassPanel className="relative h-full min-w-0 overflow-hidden p-7 sm:p-9 lg:p-10">
            <div className="section-divider" />
            <div className="grid min-w-0 gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="min-w-0">
                <div className="mono-label">Operating Model</div>
                <div className="mt-6 space-y-3">
                  {['Azure administration', 'Linux operations', 'Automation systems', 'Observability loops'].map((item) => (
                    <div className="flex items-center gap-3" key={item}>
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
                      <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="break-words text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                  “Automation is the baseline. Calm, traceable delivery is the result.”
                </h3>
                <p className="mt-6 text-base leading-8 text-slate-300">{about.description}</p>

                <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-3">
                  <div className="glass-card-soft min-w-0 rounded-[26px] p-4 sm:p-5">
                    <div className="mono-label">Focus</div>
                    <div className="mt-3 break-words text-balance text-base font-semibold leading-snug text-white sm:text-lg">
                      Cloud + DevOps
                    </div>
                  </div>
                  <div className="glass-card-soft min-w-0 rounded-[26px] p-4 sm:p-5">
                    <div className="mono-label">Execution</div>
                    <div className="mt-3 break-words text-balance text-base font-semibold leading-snug text-white sm:text-lg">
                      CI/CD + Containers
                    </div>
                  </div>
                  <div className="glass-card-soft min-w-0 rounded-[26px] p-4 sm:p-5">
                    <div className="mono-label">Control</div>
                    <div className="mt-3 break-words text-balance text-base font-semibold leading-snug text-white sm:text-lg">
                      Monitoring + IaC
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>
        </Reveal>

        <div className="grid min-w-0 gap-4">
          {about.highlights.map((highlight, index) => (
            <Reveal delay={index * 0.07} key={highlight.title}>
              <GlassPanel className="relative h-full overflow-hidden p-6 sm:p-7" soft>
                <div className="absolute right-5 top-5 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-600">
                  0{index + 1}
                </div>
                <div className="mono-label">Capability</div>
                <h3 className="mt-4 break-words text-2xl font-semibold tracking-[-0.04em] text-white">{highlight.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{highlight.description}</p>
              </GlassPanel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
