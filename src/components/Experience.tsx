import { SectionHeading } from "@/components/SectionHeading";
import { earlierRoles, positions, qualifications } from "@/content/experience";

export const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="scroll-mt-[70px] py-[clamp(48px,9vh,88px)]"
  >
    <SectionHeading id="experience-heading" index="02" title="Experience" note="2019 — Present" />

    <div className="flex flex-col gap-[clamp(32px,5vh,52px)]">
      {positions.map((position, positionIndex) => (
        <article
          key={position.company}
          className="flex flex-wrap gap-[clamp(20px,4vw,56px)] border-border border-t pt-6"
        >
          <div className="flex-[0_1_236px]">
            <h3 className="font-display font-medium text-[clamp(26px,2.6vw,32px)] text-ink leading-[1.1] tracking-[-0.014em]">
              {position.company}
            </h3>

            <p className="label mt-2.5 text-[11px] text-ink-muted leading-[1.5] tracking-[0.13em]">
              {position.period}
              <br />
              {position.location}
            </p>

            {position.blurb ? (
              <p className="mt-3.5 max-w-[32ch] text-[14.5px] text-ink-muted leading-[1.55]">
                {position.blurb}
              </p>
            ) : null}
          </div>

          <div className="flex flex-[1_1_460px] flex-col">
            {position.roles.map((role, roleIndex) => {
              // Only the very first role is "current" and earns the accent marker.
              const isCurrent = positionIndex === 0 && roleIndex === 0;
              const isLast = roleIndex === position.roles.length - 1;

              return (
                <div
                  key={role.title}
                  className={`relative border-border border-l pl-6 ${isLast ? "pb-1" : "pb-[30px]"}`}
                >
                  <span
                    className={`absolute top-[7px] left-[-4.5px] block size-2 rounded-full ${
                      isCurrent ? "bg-accent" : "bg-border"
                    }`}
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
                    <h4 className="font-semibold text-[17.5px] text-ink">{role.title}</h4>

                    <p className="label whitespace-nowrap text-[11px] text-ink-muted tracking-[0.11em]">
                      {role.period}
                    </p>
                  </div>

                  {role.note ? (
                    <p className="mt-1.5 text-[14px] text-ink-muted italic">{role.note}</p>
                  ) : null}

                  <ul className="mt-3 flex max-w-[66ch] flex-col gap-[9px] text-[15px] text-ink-muted leading-[1.55]">
                    {role.highlights.map((highlight) => (
                      <li key={highlight.slice(0, 48)} className="flex gap-[11px]">
                        <span
                          aria-hidden="true"
                          className={`flex-none font-mono text-[13px] leading-[1.65] ${
                            isCurrent ? "text-accent" : "text-ink-muted"
                          }`}
                        >
                          —
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </div>

    <div className="mt-[clamp(36px,6vh,56px)] flex flex-wrap gap-[clamp(24px,4vw,56px)]">
      <div className="flex-[1_1_380px]">
        <h3 className="label mb-1.5 border-border border-t pt-3.5 font-medium text-[10px] text-ink-muted tracking-[0.16em]">
          Earlier
        </h3>

        <ul>
          {earlierRoles.map((role) => (
            <li
              key={`${role.organisation}-${role.period}`}
              className="border-border border-b py-3.5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-[18px] gap-y-1.5">
                <span className="font-medium text-[15.5px] text-ink">{role.title}</span>

                <span className="flex-[1_1_160px] text-[14px] text-ink-muted">
                  {role.organisation}
                </span>

                <span className="label text-[11px] text-ink-muted tracking-[0.11em]">
                  {role.period}
                </span>
              </div>

              <p className="mt-1.5 max-w-[56ch] text-[14px] text-ink-muted leading-[1.6]">
                {role.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-[1_1_300px]">
        <h3 className="label mb-1.5 border-border border-t pt-3.5 font-medium text-[10px] text-ink-muted tracking-[0.16em]">
          Education & certification
        </h3>

        <ul>
          {qualifications.map((qualification) => (
            <li key={qualification.credential} className="border-border border-b py-3.5">
              <p className="font-medium text-[15.5px] text-ink">{qualification.credential}</p>

              <p className="text-[14px] text-ink-muted">
                {qualification.institution}
                <span className="mx-2">·</span>
                {qualification.period}
              </p>

              {qualification.distinction ? (
                <p className="label mt-1.5 text-[10px] text-accent tracking-[0.14em]">
                  {qualification.distinction}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
