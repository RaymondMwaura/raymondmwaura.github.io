import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

const COUNT_WORDS = ["No", "One", "Two", "Three", "Four", "Five"] as const;

const describeCount = (total: number): string => {
  const word = COUNT_WORDS[total] ?? String(total);

  return `${word} ${total === 1 ? "project" : "projects"}, in full`;
};

export const Work = () => (
  <section
    id="work"
    aria-labelledby="work-heading"
    className="scroll-mt-[70px] py-[clamp(48px,9vh,88px)]"
  >
    <SectionHeading
      id="work-heading"
      index="03"
      title="Selected work"
      note={describeCount(projects.length)}
    />

    <div className="flex flex-col gap-[clamp(20px,3vw,32px)]">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  </section>
);
