import { JOBS } from "@/lib/constants";
import Pill from "./Pill";
import { ArrowUpRightIcon } from "./Icons";

export default function Timeline() {
  return (
    <ol className="relative">
      <div
        aria-hidden
        className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/40 via-slate-700 to-transparent md:left-1/2 md:-translate-x-1/2"
      />
      {JOBS.map((job, i) => {
        const left = i % 2 === 0;
        return (
          <li
            key={job.id}
            className="relative mb-12 pl-10 md:mb-16 md:pl-0"
          >
            {/* dot */}
            <span
              aria-hidden
              className="absolute left-2 top-2 -translate-x-1/2 md:left-1/2"
            >
              <span className="block h-3 w-3 rounded-full bg-teal-300 ring-4 ring-teal-300/15 shadow-[0_0_12px_rgba(45,212,191,0.6)]" />
            </span>

            <div
              className={`md:grid md:grid-cols-2 md:gap-12 ${
                left ? "" : "md:[direction:rtl]"
              }`}
            >
              <div
                className={`group relative rounded-2xl border border-slate-200/10 bg-slate-900/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200/20 hover:bg-slate-900/60 md:[direction:ltr] ${
                  left ? "md:col-start-1" : "md:col-start-2"
                }`}
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300/80">
                  {job.date}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-50">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-teal-300"
                    >
                      <span>
                        {job.role}{" "}
                        <span className="text-slate-400">·</span>{" "}
                        {job.company}
                      </span>
                      <ArrowUpRightIcon className="inline-block h-4 w-4 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : (
                    <span>
                      {job.role}{" "}
                      <span className="text-slate-400">·</span>{" "}
                      {job.company}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {job.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {job.skills.map((s) => (
                    <li key={s}>
                      <Pill>{s}</Pill>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
