import BentoCard from "@/components/BentoCard";
import Nav from "@/components/Nav";
import Pill from "@/components/Pill";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/Icons";
import { PROJECTS, SKILL_GROUPS, SOCIALS } from "@/lib/constants";

export default function Home() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <>
      <Nav />

      <a
        href="#about"
        className="absolute left-4 top-4 z-50 -translate-y-20 rounded bg-teal-300 px-3 py-2 text-sm font-medium text-slate-900 transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        {/* HERO */}
        <section className="relative flex min-h-[92vh] flex-col items-center justify-center pt-24 text-center">
          <h1 className="bg-gradient-to-br from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Tze Chong
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-slate-300 sm:text-xl">
            Full-stack developer with a builder&apos;s bias. I like starting
            things <span className="text-slate-50">from scratch</span>,
            launching fast, and owning the outcome end to end. Self-taught by
            habit, building whatever is interesting.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/20 transition-all hover:shadow-xl hover:shadow-teal-500/30"
            >
              See my work
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={SOCIALS.email}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/15 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-slate-200/30 hover:text-teal-300"
            >
              <MailIcon className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <ul className="mt-10 flex items-center gap-5" aria-label="Social media">
            <li>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="text-slate-400 transition-colors hover:text-teal-300"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="text-slate-400 transition-colors hover:text-teal-300"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </li>
          </ul>

          {/* scroll hint */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600 animate-fade-in">
            ↓ Scroll
          </div>
        </section>

        {/* ABOUT - bento grid */}
        <section
          id="about"
          className="scroll-mt-24 py-20 md:py-28"
          aria-label="About"
        >
          <SectionLabel eyebrow="01" title="About" />

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(0,1fr)]">
            <BentoCard className="md:col-span-4 md:row-span-2">
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                The Story
              </p>
              <div className="mt-3 space-y-3 leading-relaxed text-slate-300">
                <p>
                  I made the jump into tech in 2023, after a few years in
                  product management and bootstrapping small businesses. What
                  carried over is the way I like to work:{" "}
                  <span className="text-slate-50">
                    build from scratch, launch fast, own the outcome
                  </span>
                  .
                </p>
                <p>
                  Mostly self-taught, my downtime goes into fundamentals and
                  side projects. Lately I&apos;ve been going deep on{" "}
                  <span className="text-slate-50">machine learning</span>, and
                  the slow battle with my own attention span. 🙊
                </p>
                <p className="text-slate-400">
                  When I&apos;m not coding I work on my jab and cross on the
                  punching bag, run zone-2, do calisthenics, and throw the
                  occasional pot from clay. 🥊
                </p>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                Now
              </p>
              <p className="mt-3 text-slate-100">
                Senior Software Developer at{" "}
                <span className="font-semibold">Synapxe</span>, building
                HealthHub Plus.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Teaching myself ML, plus a steady stream of side projects.
              </p>
            </BentoCard>

            <BentoCard className="md:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                Stack of the moment
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <Pill>Next.js</Pill>
                <Pill>TypeScript</Pill>
                <Pill>FastAPI</Pill>
                <Pill>OpenAI</Pill>
                <Pill>Postgres</Pill>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                By the numbers
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                <Stat value="3+" label="yrs coding" />
                <Stat value="10+" label="shipped" />
                <Stat value="S$100k+" label="earned from my projects" />
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                Certifications
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li className="flex items-baseline gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                  AWS Certified Solutions Architect{" "}
                  <span className="text-slate-500">– Associate</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300/80" />
                  AWS Certified Developer{" "}
                  <span className="text-slate-500">– Associate</span>
                </li>
              </ul>
            </BentoCard>
          </div>
        </section>

        {/* WORK - vertical timeline */}
        <section
          id="work"
          className="scroll-mt-24 py-20 md:py-28"
          aria-label="Work experience"
        >
          <SectionLabel eyebrow="02" title="Where I've worked" />
          <div className="mt-12">
            <Timeline />
          </div>
          <div className="mt-8 text-center">
            <a
              className="group/link inline-flex items-baseline text-sm font-semibold text-slate-200 transition-colors hover:text-teal-300"
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Full Résumé
              <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          </div>
        </section>

        {/* PROJECTS - alternating large showcases */}
        <section
          id="projects"
          className="scroll-mt-24 py-20 md:py-28"
          aria-label="Featured projects"
        >
          <SectionLabel eyebrow="03" title="Selected projects" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200/15 bg-slate-900/40 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-slate-200/30 hover:text-teal-300"
            >
              View all projects
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-teal-300"
              href="https://docs.google.com/presentation/d/1LV6sdOZSVhhbIhoP_yB4Od1rXmF9GHdorraG27eoR0Y/edit?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                Past non-software work
              </span>
              <ArrowUpRightIcon className="ml-1 h-3.5 w-3.5 translate-y-px" />
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="scroll-mt-24 py-20 md:py-28"
          aria-label="Skills"
        >
          <SectionLabel eyebrow="04" title="The toolbox" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <BentoCard key={group.label}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                  {group.label}
                </p>
                <ul
                  className="mt-3 flex flex-wrap gap-1.5"
                  aria-label={group.label}
                >
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <Pill>{skill}</Pill>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="scroll-mt-24 py-20 md:py-32"
          aria-label="Contact"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/20 p-10 text-center backdrop-blur-sm md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(700px at 50% 0%, rgba(45, 212, 191, 0.15), transparent 60%), radial-gradient(500px at 50% 100%, rgba(99, 102, 241, 0.10), transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                05 · Contact
              </p>
              <h2 className="mt-3 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl">
                Let&apos;s build something good.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-balance text-slate-400">
                Always up for conversations with builders, founders, and
                anyone with interesting problems to solve.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={SOCIALS.email}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-teal-500/20 transition-all hover:shadow-xl hover:shadow-teal-500/30"
                >
                  <MailIcon className="h-4 w-4" />
                  Say hi
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/15 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-slate-200/30 hover:text-teal-300"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-12 text-center text-xs text-slate-500">
          <p>
            Built with Next.js 16, React 19, Tailwind. Deployed on Vercel.
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Tze Chong. Made in Singapore.
          </p>
        </footer>
      </div>
    </>
  );
}

function SectionLabel({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-slate-200/5 pb-4">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-300/80">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-slate-200/5 bg-slate-950/40 px-2 py-3">
      <div className="bg-gradient-to-br from-teal-300 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}
