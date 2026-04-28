import { motion, useReducedMotion } from 'framer-motion';
import { Activity, Bot, Boxes, Cloud, Network, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { PortfolioData, SkillCategoryKey } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeading } from '../ui/SectionHeading';

type SkillsSectionProps = {
  categories: PortfolioData['skillCategories'];
};

const iconMap: Record<SkillCategoryKey, LucideIcon> = {
  basics: Network,
  cloud: Cloud,
  containers: Boxes,
  devops: Workflow,
  iac: Bot,
  monitoring: Activity,
};

const layoutMap: Record<SkillCategoryKey, string> = {
  basics: 'md:col-span-7 xl:col-span-5',
  cloud: 'md:col-span-12 xl:col-span-5',
  containers: 'md:col-span-5 xl:col-span-3',
  devops: 'md:col-span-7 xl:col-span-4',
  iac: 'md:col-span-5 xl:col-span-4',
  monitoring: 'md:col-span-4 xl:col-span-3',
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell" id="skills">
      <SectionHeading
        description="The stack is arranged as a platform matrix: cloud, delivery, orchestration, automation, and visibility working together rather than as disconnected tools."
        eyebrow="Skills"
        title="A layered DevOps capability map with depth, not just a checklist"
      />

      <div className="mt-14 grid min-w-0 gap-5 md:grid-cols-12">
        {categories.map((category, index) => {
          const Icon = iconMap[category.key];

          return (
            <motion.article
              className={`min-w-0 ${layoutMap[category.key]}`}
              initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
              key={category.title}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={reduceMotion ? undefined : { y: -8, rotateX: 1.6, rotateY: index % 2 === 0 ? -1.6 : 1.6 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <GlassPanel className="relative h-full overflow-hidden p-6 sm:p-7 lg:p-8">
                <div className="section-divider" />
                <div className="absolute -right-4 top-4 font-display text-6xl text-white/[0.05] sm:text-7xl">
                  0{index + 1}
                </div>

                <div className="relative flex h-full min-w-0 flex-col">
                  <div className="flex items-start gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="mono-label">{category.title}</div>
                      <h3 className="mt-3 break-words text-[2rem] font-semibold tracking-[-0.05em] text-white">{category.title}</h3>
                    </div>
                    <div className="shrink-0 rounded-[22px] border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-100">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-8 text-slate-300">{category.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        className="tag-pill"
                        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
                        key={skill}
                        transition={{ duration: 0.32, delay: 0.12 + skillIndex * 0.04 }}
                        viewport={{ once: true }}
                        whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="h-px bg-gradient-to-r from-cyan-200/20 via-cyan-200/45 to-transparent" />
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="mono-label">Skill Count</div>
                      <div className="text-lg font-semibold tabular-nums text-white">0{category.skills.length}</div>
                    </div>
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
