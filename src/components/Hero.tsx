import { heroFacts, profile } from "@/content/profile";

export const Hero = () => (
  <section className="pt-[clamp(56px,11vh,104px)] pb-[clamp(40px,7vh,64px)]">
    <p className="label mb-[clamp(26px,5vh,44px)] text-[11.5px] text-ink-muted tracking-[0.2em]">
      {profile.location}
      <span className="mx-2">·</span>
      {profile.timezone}
      <span className="mx-2">·</span>
      {profile.availability}
    </p>

    <h1 className="mb-[clamp(26px,4.5vh,40px)] font-display font-medium text-[clamp(52px,10.5vw,132px)] text-ink leading-[0.92] tracking-[-0.022em]">
      Raymond
      <br />
      Mwaura
    </h1>

    <div className="flex flex-wrap items-start gap-[clamp(28px,5vw,72px)] border-border border-t pt-[clamp(24px,4vh,36px)]">
      <p className="max-w-[60ch] flex-[1_1_460px] text-[clamp(17px,1.5vw,21px)] text-ink leading-[1.5]">
        Frontend engineer on payments, billing and deployment infrastructure at{" "}
        <span className="text-accent">Safaricom</span> — the enterprise portal where businesses
        across Kenya buy connectivity and settle invoices. I qualified as an accountant first, which
        is why I treat a mismatched total as a defect rather than a rounding question.
      </p>

      <p className="max-w-[44ch] flex-[0_1_300px] text-[15px] text-ink-muted leading-[1.6]">
        {profile.taglineAside}
      </p>
    </div>

    <dl className="hairline-grid mt-[clamp(36px,6vh,56px)] grid-cols-[repeat(auto-fit,minmax(min(100%,205px),1fr))]">
      {heroFacts.map((fact) => (
        <div key={fact.label} className="bg-canvas px-[18px] pt-4 pb-[18px]">
          <dt className="label mb-2.5 text-[10px] text-ink-muted tracking-[0.16em]">
            {fact.label}
          </dt>

          <dd className="text-[15px] text-ink">
            {fact.value}
            <br />
            <span className="text-ink-muted">{fact.detail}</span>
          </dd>
        </div>
      ))}
    </dl>
  </section>
);
