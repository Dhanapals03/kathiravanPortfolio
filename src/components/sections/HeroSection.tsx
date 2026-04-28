import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Activity, ArrowDownRight, CloudCog, Linkedin, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { lazy, Suspense, useRef } from 'react';
import type { PortfolioData } from '../../data/portfolio';
import { GlassPanel } from '../ui/GlassPanel';
import { LinkButton } from '../ui/LinkButton';

type HeroSectionProps = {
  profile: PortfolioData['profile'];
  heroStats: PortfolioData['heroStats'];
  tickerItems: string[];
};

const HeroScene = lazy(async () => {
  const module = await import('../scene/HeroScene');

  return { default: module.HeroScene };
});

const signalCards = [
  {
    icon: ShieldCheck,
    label: 'Posture',
    value: 'Release reliability through automation',
  },
  {
    icon: Zap,
    label: 'Automation',
    value: 'Pipelines, IaC, and container workflows',
  },
  {
    icon: Activity,
    label: 'Visibility',
    value: 'Operational feedback with observability',
  },
] as const;

export function HeroSection({ profile, heroStats, tickerItems }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 72]);

  return (
    <section className="section-shell pt-8 sm:pt-12 lg:pt-16" id="hero" ref={sectionRef}>
      <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(6,12,28,0.82),rgba(4,8,20,0.72))] px-5 py-6 shadow-[0_30px_120px_rgba(2,12,34,0.55)] sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.12),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.12),transparent_24%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
        <div className="absolute -right-28 top-10 h-52 w-52 rounded-full border border-cyan-200/10 bg-cyan-300/5 blur-3xl" />
        <div className="absolute bottom-0 left-[-4rem] h-56 w-56 rounded-full bg-violet-400/[0.08] blur-[120px]" />

        <div className="relative grid gap-12 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          <motion.div style={reduceMotion ? undefined : { y: copyY }}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Premium DevOps Portfolio
              </span>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <span className="font-medium text-white">{profile.company}</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="mono-label">Azure DevOps Engineer / Cloud Infrastructure / Automation</p>
              <h1 className="hero-title mt-4 text-balance">
                Kathiravan <span className="gradient-text">Thangavel</span>
                <span className="mt-3 block text-[0.52em] font-medium tracking-[-0.05em] text-slate-200">
                  ships cloud systems with calm, repeatable delivery.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300 sm:text-2xl">{profile.tagline}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">{profile.summary}</p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={profile.linkedin} icon={<Linkedin className="h-4 w-4" />} target="_blank">
                View LinkedIn
              </LinkButton>
              <LinkButton href="#projects" icon={<ArrowDownRight className="h-4 w-4" />} variant="secondary">
                Explore Projects
              </LinkButton>
            </div>

            <div className="mt-10 grid min-w-0 gap-4 2xl:grid-cols-[1.06fr_0.94fr]">
              <GlassPanel className="relative min-w-0 overflow-hidden p-6 sm:p-7">
                <div className="section-divider" />
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="mono-label">Profile Summary</div>
                    <h2 className="mt-3 break-words text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      Cloud delivery, platform calm, and automation-first execution.
                    </h2>
                  </div>
                  <div className="hidden shrink-0 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-cyan-200 sm:block">
                    <CloudCog className="h-8 w-8" />
                  </div>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300">
                  Kathiravan works across Azure administration, Linux operations, CI/CD workflows, containers, infrastructure as code, and observability to make delivery systems more resilient and easier to operate.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Azure DevOps', 'Terraform', 'Docker', 'Kubernetes', 'Prometheus'].map((item) => (
                    <span className="tag-pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </GlassPanel>

              <div className="grid min-w-0 gap-4 sm:grid-cols-2 2xl:grid-cols-1">
                {heroStats.map((stat, index) => (
                  <motion.div
                    className={`metric-slab ${index === 0 ? 'sm:col-span-2 2xl:col-span-1' : ''}`}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
                    key={stat.label}
                    transition={{ duration: 0.55, delay: 0.12 + index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  >
                    <div className="mono-label">{stat.label}</div>
                    <div className="mt-3 break-words text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                      {stat.value}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{stat.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="relative xl:pl-4" style={reduceMotion ? undefined : { y: sceneY }}>
            <div className="relative">
              <GlassPanel className="hero-glow animated-border scanline grid-panel overflow-hidden p-3 sm:p-4">
                <Suspense
                  fallback={
                    <div className="flex h-[440px] items-center justify-center rounded-[30px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,rgba(8,17,33,0.9),rgba(4,9,22,0.88))] font-mono text-[0.72rem] uppercase tracking-[0.32em] text-cyan-100/80 sm:h-[580px]">
                      Loading cloud scene
                    </div>
                  }
                >
                  <HeroScene />
                </Suspense>
              </GlassPanel>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                className="orbital-chip left-4 top-6 max-w-[15rem]"
                transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="mono-label text-cyan-200/80">Automation Surface</div>
                <div className="mt-2 text-sm font-semibold text-white">CI/CD • IaC • Release Choreography</div>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
                className="orbital-chip right-3 top-[38%] max-w-[14rem]"
                transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="mono-label text-violet-200/80">Runtime Layer</div>
                <div className="mt-2 text-sm font-semibold text-white">Containers • Linux • Kubernetes</div>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                className="orbital-chip bottom-6 left-10 max-w-[16rem] xl:hidden 2xl:block"
                transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="mono-label text-sky-200/80">Signals</div>
                <div className="mt-2 text-sm font-semibold text-white">Prometheus • Grafana • Observability</div>
              </motion.div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {signalCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    className={`glass-card-soft rounded-[28px] p-5 ${index === signalCards.length - 1 ? 'md:col-span-2 2xl:col-span-1' : ''}`}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
                    key={card.label}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={reduceMotion ? undefined : { y: -6 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  >
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="mono-label">{card.label}</div>
                        </div>
                        <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-200">{card.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="relative mt-10 border-t border-white/10 pt-6">
          <div className="mono-label mb-4">Core Toolchain</div>
          <div className="marquee-shell">
            <div className="marquee-track">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <div className="marquee-item" key={`${item}-${index}`}>
                  <span className="marquee-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
