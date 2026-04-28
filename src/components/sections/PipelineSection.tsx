import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Cpu, GitBranch, Rocket, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { PipelineStepKey, PortfolioData } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeading } from '../ui/SectionHeading';

type PipelineSectionProps = {
  steps: PortfolioData['pipelineSteps'];
};

const iconMap: Record<PipelineStepKey, LucideIcon> = {
  build: Cpu,
  deploy: Rocket,
  govern: ShieldCheck,
  observe: BarChart3,
  version: GitBranch,
};

export function PipelineSection({ steps }: PipelineSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-shell" id="pipeline">
      <SectionHeading
        align="center"
        description="This section turns the DevOps story into a visual control path: source intent, validation, rollout, governance, and observability stitched together as one operating system."
        eyebrow="Pipeline"
        title="From code change to live telemetry in a single premium workflow canvas"
      />

      <GlassPanel className="relative mt-14 overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_28%)]" />
        <div className="relative grid gap-10 xl:grid-cols-[0.34fr_0.66fr]">
          <div>
            <div className="mono-label">Workflow Topology</div>
            <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl">
              Delivery is strongest when build, release, policy, and signals move as one.
            </h3>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
              The visual language here mirrors Kathiravan’s operating space: Git-driven change, container pipelines, infrastructure consistency, and monitoring that closes the feedback loop.
            </p>

            <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {[
                { label: 'Stages', value: '05' },
                { label: 'Operating Mode', value: 'Automation-first' },
                { label: 'Feedback', value: 'Metrics-driven' },
              ].map((item) => (
                <div className="glass-card-soft min-w-0 rounded-[26px] p-4" key={item.label}>
                  <div className="mono-label">{item.label}</div>
                  <div className="mt-3 break-words text-balance text-lg font-semibold leading-snug text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 right-8 top-10 hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-200/[0.55] to-violet-300/0 lg:block" />
            <motion.div
              animate={reduceMotion ? undefined : { x: ['-10%', '100%'] }}
              className="absolute top-[34px] hidden h-4 w-28 rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-200/80 to-cyan-300/0 blur-md lg:block"
              transition={{ duration: 6.5, ease: 'linear', repeat: Infinity }}
            />

            <div className="grid gap-4 lg:grid-cols-5">
              {steps.map((step, index) => {
                const Icon = iconMap[step.key];

                return (
                  <motion.div
                    className="min-w-0"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                    key={step.title}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={reduceMotion ? undefined : { y: -8 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  >
                    <div className="glass-card-soft relative h-full min-w-0 rounded-[28px] p-5">
                      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-cyan-200/0 via-cyan-200/70 to-violet-200/0" />
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/5 text-cyan-100">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-slate-500">0{index + 1}</div>
                      </div>

                      <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/80">{step.caption}</p>
                      <h3 className="mt-3 break-words text-xl font-semibold tracking-[-0.04em] text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}
