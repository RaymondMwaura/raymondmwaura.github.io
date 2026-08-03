type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  note: string;
};

/**
 * The numbered rule that opens every section — "01 — ABOUT" on the left, a mono aside on
 * the right, over a full-width ink rule. Deliberately heavier than the hairlines used
 * elsewhere, so section boundaries outrank the internal grid lines.
 */
export const SectionHeading = ({ id, index, title, note }: SectionHeadingProps) => (
  <div className="mb-[clamp(32px,5vh,52px)] flex items-baseline justify-between gap-6 border-ink border-t pt-3.5">
    <h2 id={id} className="label font-medium text-[11.5px] text-ink tracking-[0.18em]">
      {index}
      <span className="mx-2">—</span>
      {title}
    </h2>

    <p className="label hidden text-[11.5px] text-ink-muted sm:block">{note}</p>
  </div>
);
