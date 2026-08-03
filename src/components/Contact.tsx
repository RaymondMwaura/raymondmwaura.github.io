import { SectionHeading } from "@/components/SectionHeading";
import { profile, socialLinks } from "@/content/profile";

/**
 * Deliberately a direct mailto rather than a form: a form on a static site needs a
 * third-party POST endpoint, and the old site's Formspree hook had long gone stale.
 */
export const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="scroll-mt-[70px] pt-[clamp(48px,9vh,88px)] pb-[clamp(56px,10vh,104px)]"
  >
    <SectionHeading id="contact-heading" index="04" title="Contact" note="Open to remote roles" />

    <div className="flex flex-wrap items-end gap-[clamp(28px,5vw,72px)]">
      <div className="flex-[1_1_460px]">
        <p className="mb-[clamp(22px,4vh,34px)] max-w-[46ch] text-[17px] text-ink-muted leading-[1.55]">
          If you are building something where the numbers have to be right, write to me. I reply to
          everything specific.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block break-all border-accent border-b-2 pb-1 font-display font-medium text-[clamp(26px,4.4vw,52px)] text-ink leading-[1.05] tracking-[-0.02em] transition-colors hover:text-accent"
        >
          {profile.email}
        </a>
      </div>

      <div className="flex flex-[0_1_200px] flex-col gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="label inline-flex items-center justify-between gap-3 border-border border-t pt-3 font-medium text-[11px] text-ink-muted transition-colors hover:text-ink"
          >
            {link.label}
            <span aria-hidden="true" className="text-[13px]">
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
