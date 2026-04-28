import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import type { PortfolioData } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeading } from '../ui/SectionHeading';

type ProjectsSectionProps = {
  projects: PortfolioData['projects'];
};

const layoutClasses = ['xl:col-span-7', 'xl:col-span-5', 'xl:col-span-12'] as const;
const accentClasses = [
  'from-cyan-300/20 via-sky-400/10 to-transparent',
  'from-violet-300/20 via-cyan-300/10 to-transparent',
  'from-sky-300/20 via-violet-300/10 to-transparent',
] as const;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell" id="projects">
      <SectionHeading
        description="Each project surface is designed like a premium deployment dashboard: clear purpose, defined tech stack, and concise operational highlights."
        eyebrow="Projects"
        title="Selected delivery environments presented as high-end infrastructure cards"
      />

      <div className="mt-14 grid gap-6 xl:grid-cols-12">
        {projects.map((project, index) => {
          const wideLayout = index !== 1;
          const layoutClassName = layoutClasses[index] ?? 'xl:col-span-12';
          const accentClassName = accentClasses[index] ?? accentClasses[0];

          return (
            <motion.article
              className={`min-w-0 ${layoutClassName}`}
              initial={reduceMotion ? undefined : { opacity: 0, y: 30 }}
              key={project.title}
              transition={{ duration: 0.62, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.18 }}
              whileHover={reduceMotion ? undefined : { y: -10, rotateX: 1.5, rotateY: index === 1 ? 1.5 : -1.5 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <GlassPanel className="project-spotlight relative h-full overflow-hidden p-6 sm:p-8">
                <div className="absolute -right-5 top-0 font-display text-[6rem] leading-none text-white/[0.05] sm:text-[8rem]">
                  0{index + 1}
                </div>
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accentClassName}`} />

                  <div className={`relative grid h-full min-w-0 gap-8 ${wideLayout ? 'lg:grid-cols-[0.82fr_1.18fr]' : ''}`}>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <div className="rounded-[22px] border border-cyan-300/[0.18] bg-cyan-300/10 p-3 text-cyan-100">
                        <Layers3 className="h-6 w-6" />
                      </div>
                      <div className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">Project 0{index + 1}</div>
                    </div>

                    <div className="mt-7">
                      <div className="mono-label">Delivery Focus</div>
                      <h3 className="mt-3 break-words text-3xl font-semibold tracking-[-0.05em] text-white">{project.title}</h3>
                      <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">{project.description}</p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tag) => (
                        <span className="tag-pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                      <span>Infrastructure support with delivery discipline</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className={`grid min-w-0 gap-4 ${wideLayout ? 'sm:grid-cols-3 lg:grid-cols-1' : ''}`}>
                    {project.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        className="glass-card-soft min-w-0 rounded-[26px] p-5"
                        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                        key={highlight}
                        transition={{ duration: 0.42, delay: 0.18 + highlightIndex * 0.06 }}
                        viewport={{ once: true }}
                        whileHover={reduceMotion ? undefined : { y: -4 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      >
                        <div className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-100/75">
                          0{highlightIndex + 1}
                        </div>
                        <p className="mt-3 break-words text-sm leading-7 text-slate-200">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
