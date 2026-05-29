import ProjectCard from "@/components/ProjectCard";
import { ArrowLeftIcon } from "@/components/Icons";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pt-16">
      <a
        href="/"
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors hover:text-teal-300"
        aria-label="Back to home"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back
      </a>

      <header className="mt-10 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-300/80">
          Archive
        </p>
        <h1 className="mt-2 bg-gradient-to-br from-slate-50 via-slate-200 to-slate-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Every project, one place.
        </h1>
        <p className="mt-4 text-balance leading-relaxed text-slate-400">
          From FreeCodeCamp practice apps to recent AI-native side
          projects. The featured ones live on the home page.
        </p>
      </header>

      <section
        className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="All projects"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} showFeaturedBadge />
        ))}
      </section>
    </div>
  );
}
