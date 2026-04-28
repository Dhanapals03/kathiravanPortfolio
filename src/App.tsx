import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { ArrowUpRight, Orbit } from 'lucide-react';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { PipelineSection } from './components/sections/PipelineSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { portfolioData } from './data/portfolio';

function App() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const tickerItems = portfolioData.skillCategories.flatMap((category) => category.skills);

  return (
    <div className="relative overflow-x-clip">
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_28px_rgba(56,189,248,0.6)]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="ambient-bg">
          <div className="ambient-bg__mesh" />
          <div className="ambient-bg__beam" />
          <div className="ambient-bg__grain" />
        </div>

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 42, -18, 0],
                  y: [0, -28, 22, 0],
                  scale: [1, 1.09, 0.96, 1],
                }
          }
          className="absolute left-[-9rem] top-28 h-72 w-72 rounded-full bg-cyan-400/[0.14] blur-[120px]"
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -36, 24, 0],
                  y: [0, 34, -16, 0],
                  scale: [1, 1.06, 1.03, 1],
                }
          }
          className="absolute right-[-8rem] top-[18rem] h-80 w-80 rounded-full bg-sky-500/[0.11] blur-[140px]"
          transition={{ duration: 31, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 28, -22, 0],
                  y: [0, -24, 18, 0],
                  scale: [1, 1.08, 1, 1],
                }
          }
          className="absolute bottom-[12rem] left-[18%] h-72 w-72 rounded-full bg-violet-500/[0.1] blur-[140px]"
          transition={{ duration: 23, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="glass-card-soft mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
          <a className="flex min-w-0 items-center gap-3" href="#hero">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-violet-400 text-sm font-bold text-slate-950">
              KT
            </span>
            <div className="min-w-0">
              <div className="truncate font-display text-base font-semibold tracking-[-0.03em] text-white">Kathiravan Thangavel</div>
              <div className="mono-label mt-0.5 hidden sm:block">Azure DevOps Engineer</div>
            </div>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {portfolioData.nav.map((item) => (
              <a
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-cyan-300/[0.15]"
            href={portfolioData.profile.linkedin}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Orbit className="h-4 w-4" />
            <span className="hidden sm:inline">Connect</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <HeroSection
          heroStats={portfolioData.heroStats}
          profile={portfolioData.profile}
          tickerItems={tickerItems}
        />
        <AboutSection about={portfolioData.about} />
        <SkillsSection categories={portfolioData.skillCategories} />
        <PipelineSection steps={portfolioData.pipelineSteps} />
        <ProjectsSection projects={portfolioData.projects} />
        <ExperienceSection experience={portfolioData.experience} />
        <ContactSection contactLinks={portfolioData.contactLinks} />
      </main>

      <footer className="relative z-10 px-4 pb-8 pt-4 sm:px-6 sm:pb-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/[0.06] pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">
            Crafted as a premium cloud engineering portfolio using React, Vite, TypeScript, Tailwind CSS, React Three Fiber, and Framer Motion.
          </p>
          <a
            className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
            href={portfolioData.profile.linkedin}
            rel="noreferrer noopener"
            target="_blank"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
