import { profile } from "@/content/profile";

/**
 * Stands in for a portrait. Set in the site's own display face rather than shipped as an
 * image: it stays crisp at any zoom, re-colours with the theme for free, and costs no
 * bytes. Swap in a bespoke mark later by replacing the contents of the bordered box.
 */
export const Monogram = () => (
  <div
    aria-hidden="true"
    className="flex aspect-4/5 w-full flex-col items-center justify-center gap-5 border border-border bg-surface px-6"
  >
    <p className="font-display font-medium text-[clamp(44px,6vw,68px)] text-ink leading-none tracking-[0.06em]">
      RWM
    </p>

    <span className="h-px w-10 bg-accent" />

    <p className="label text-center text-[9.5px] text-ink-muted leading-[1.7] tracking-[0.2em]">
      {profile.title}
      <br />
      {profile.location}
    </p>
  </div>
);
