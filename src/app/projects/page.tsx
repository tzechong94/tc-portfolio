import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/constants";
import React from "react";

const ProjectsPage = () => {
  const projects = PROJECTS;

  return (
    <div className="bg-gradient-to-r from-slate-900 to-gray-800 leading-relaxed text-slate-400 antialiased ">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 font-sans md:px-12  lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <main id="content" className="pt-24 lg:py-24">
            <div className="pb-0">
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                href="/"
                aria-label="Go back to portfolio"
              >
                <span>
                  <span className="inline-block">
                    Go back
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>

            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 py-8 sm:text-xl">
              All Projects
            </h2>

            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <ol className="projectList">
                {projects.map((project) => (
                  <li key={project.id} className="mb-12">
                    <ProjectCard
                      projectDescription={project.projectDescription}
                      projectName={project.projectName}
                      imageSource={project.imageSource}
                      skills={project.skills}
                      link={project.link}
                    />
                  </li>
                ))}
              </ol>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
