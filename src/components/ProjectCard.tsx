import Image from "next/image";
import type { Project } from "@/lib/constants";
import Pill from "./Pill";
import { ArrowUpRightIcon } from "./Icons";

type Props = Project & { showFeaturedBadge?: boolean };

export default function ProjectCard({
  projectName,
  projectDescription,
  imageSource,
  skills,
  link,
  featured,
  year,
  showFeaturedBadge = false,
}: Props) {
  const hasLink = Boolean(link);

  const media = (
    <>
      <Image
        src={imageSource}
        alt={`${projectName} screenshot`}
        width={800}
        height={500}
        className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
      />
      {showFeaturedBadge && featured && (
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-teal-300/30 bg-slate-950/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-teal-300 backdrop-blur">
          Featured
        </span>
      )}
      {year && (
        <span className="absolute right-3 top-3 inline-flex items-center rounded-full border border-slate-200/10 bg-slate-950/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 backdrop-blur">
          {year}
        </span>
      )}
    </>
  );

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200/20 hover:bg-slate-900/60">
      {hasLink ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${projectName} (opens in a new tab)`}
          className="relative block overflow-hidden"
        >
          {media}
        </a>
      ) : (
        <div className="relative block overflow-hidden">{media}</div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-slate-50">
          {hasLink ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-flex items-baseline gap-1 transition-colors hover:text-teal-300"
            >
              {projectName}
              <ArrowUpRightIcon className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          ) : (
            projectName
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {projectDescription}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <li key={skill}>
              <Pill>{skill}</Pill>
            </li>
          ))}
        </ul>
        {!hasLink && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
            Private project
          </p>
        )}
      </div>
    </article>
  );
}
