import type { Project, ProjectStatus } from "@/content/types";

type StatusPresentation = {
  label: string;
  container: string;
  dot: string;
};

/**
 * Each status gets its own treatment so the state reads before the words do: a live
 * product is solid and verdigris, work in progress is solid sienna, and archived is a
 * dashed rule with a hollow marker — visibly quieter without looking broken.
 */
const STATUS_PRESENTATION: Record<ProjectStatus, StatusPresentation> = {
  live: {
    label: "Live",
    container: "border-solid border-live text-live",
    dot: "bg-live",
  },
  "in-development": {
    label: "In development",
    container: "border-solid border-accent text-accent",
    dot: "bg-accent",
  },
  archived: {
    label: "Archived",
    container: "border-dashed border-border text-ink-muted",
    dot: "border border-ink-muted",
  },
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const status = STATUS_PRESENTATION[project.status];

  const blocks = [
    { heading: "Problem", body: project.problem },
    { heading: "Approach", body: project.approach },
    { heading: "Outcome", body: project.outcome },
  ];

  return (
    <article className="border border-border bg-surface p-[clamp(22px,3.4vw,40px)]">
      <div className="flex flex-wrap items-start justify-between gap-x-7 gap-y-4 border-border border-b pb-[22px]">
        <div className="flex-[1_1_340px]">
          <p className="label mb-3 text-[10.5px] text-ink-muted tracking-[0.18em]">
            Project {String(index + 1).padStart(2, "0")}
            <span className="mx-2">·</span>
            {project.context}
          </p>

          <h3 className="font-display font-medium text-[clamp(30px,3.6vw,46px)] text-ink leading-[1.04] tracking-[-0.018em]">
            {project.name}
          </h3>

          <p className="mt-3 max-w-[52ch] text-[16.5px] text-ink-muted leading-[1.5]">
            {project.summary}
          </p>
        </div>

        <span
          className={`label inline-flex items-center gap-2 whitespace-nowrap rounded-[2px] border px-3 py-[7px] font-medium text-[10px] tracking-[0.16em] ${status.container}`}
        >
          <span className={`block size-[7px] rounded-full ${status.dot}`} />
          {status.label}
        </span>
      </div>

      {project.metrics.length > 0 ? (
        <dl className="mt-px grid grid-cols-[repeat(auto-fit,minmax(min(100%,210px),1fr))] gap-px bg-border">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-accent border-t-2 bg-surface px-5 pt-[22px] pb-6"
            >
              <dt className="sr-only">{metric.label}</dt>

              <dd>
                <p className="font-display font-medium text-[clamp(42px,5.2vw,62px)] text-ink leading-[0.94] tracking-[-0.026em] tabular-nums">
                  {metric.value}
                </p>

                <p
                  aria-hidden="true"
                  className="label mt-3 max-w-[22ch] text-[10.5px] text-ink-muted leading-[1.5] tracking-[0.13em]"
                >
                  {metric.label}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {project.image ? (
        <div className="mt-[clamp(22px,3vw,32px)] border border-border">
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            decoding="async"
            className="h-[clamp(240px,34vw,440px)] w-full object-cover object-top"
          />
        </div>
      ) : null}

      <div className="mt-[clamp(26px,3.4vw,38px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(20px,3vw,36px)]">
        {blocks.map((block) => (
          <div key={block.heading}>
            <h4 className="label mb-3 border-border border-t pt-3 font-medium text-[10px] text-accent tracking-[0.16em]">
              {block.heading}
            </h4>

            <p className="text-[15px] text-ink-muted leading-[1.6]">{block.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-[clamp(24px,3vw,34px)] flex flex-wrap items-center justify-between gap-x-7 gap-y-4 border-border border-t pt-5">
        <ul className="flex flex-wrap gap-[7px]">
          {project.stack.map((technology) => (
            <li
              key={technology}
              className="rounded-[2px] border border-border px-[9px] py-1.5 font-mono text-[11px] text-ink-muted tracking-[0.09em]"
            >
              {technology}
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="flex flex-wrap items-center gap-5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="label inline-flex items-center gap-2.5 border-border border-b pb-[5px] font-medium text-[11px] text-accent transition-colors hover:border-ink hover:text-ink"
              >
                {link.label}
                <span aria-hidden="true" className="text-[13px]">
                  ↗
                </span>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};
