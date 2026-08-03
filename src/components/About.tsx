import profileImage from "@/assets/profile.webp";
import { SectionHeading } from "@/components/SectionHeading";
import { profile, skillGroups } from "@/content/profile";

export const About = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="scroll-mt-[70px] py-[clamp(48px,9vh,88px)]"
  >
    <SectionHeading id="about-heading" index="01" title="About" note="Ledgers → production" />

    <div className="flex flex-wrap items-start gap-[clamp(32px,5vw,72px)]">
      <div className="flex flex-[1_1_480px] flex-col gap-5">
        <p className="max-w-[34ch] font-display text-[clamp(21px,2.2vw,27px)] text-ink leading-[1.35] tracking-[-0.011em]">
          {profile.pullQuote}
        </p>

        {profile.about.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="max-w-[60ch] text-[16px] text-ink-muted leading-[1.62]"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <figure className="flex flex-[0_1_320px] flex-col gap-2.5">
        <img
          src={profileImage}
          alt={`Portrait of ${profile.name}`}
          width={655}
          height={829}
          loading="lazy"
          decoding="async"
          className="h-[400px] w-full border border-border object-cover"
        />

        <figcaption className="label text-[10px] text-ink-muted leading-[1.5] tracking-[0.13em]">
          {profile.name}, {profile.location}
        </figcaption>
      </figure>
    </div>

    <div className="hairline-grid mt-[clamp(40px,6vh,64px)] grid-cols-[repeat(auto-fit,minmax(min(100%,196px),1fr))]">
      {skillGroups.map((group) => (
        <div key={group.category} className="bg-canvas px-5 pt-5 pb-6">
          <h3 className="label mb-3.5 font-medium text-[10px] text-accent tracking-[0.16em]">
            {group.category}
          </h3>

          <ul className="flex flex-col gap-1.5 text-[14.5px] text-ink">
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
