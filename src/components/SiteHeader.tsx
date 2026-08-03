import { profile } from "@/content/profile";
import { useActiveSection } from "@/lib/useActiveSection";
import { useTheme } from "@/lib/useTheme";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const SiteHeader = () => {
  const activeId = useActiveSection(SECTION_IDS);
  const { theme, toggleTheme } = useTheme();

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="sticky top-0 z-30 border-border border-b bg-canvas">
      <div className="mx-auto flex h-[58px] max-w-[1200px] items-center justify-between gap-5 px-[clamp(20px,5vw,64px)]">
        <a href="#top" className="label font-medium text-[11.5px] text-ink tracking-[0.16em]">
          R.Mwaura
          <span className="ml-3 hidden text-ink-muted sm:inline">/ {profile.title}</span>
        </a>

        <div className="flex items-center gap-[clamp(16px,2.4vw,30px)]">
          {/* Hidden on narrow screens, matching the design — the sections are a short scroll. */}
          <nav
            aria-label="Sections"
            className="hidden items-center gap-[clamp(16px,2.4vw,30px)] md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`label text-[11px] transition-colors hover:text-ink ${
                  activeId === item.id ? "text-ink" : "text-ink-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            className="label flex items-center gap-2 rounded-[2px] border border-border py-1.5 pr-2.5 pl-2 text-[10.5px] text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
          >
            <span className="block size-[9px] rounded-full bg-accent" />
            {nextTheme}
          </button>
        </div>
      </div>
    </header>
  );
};
