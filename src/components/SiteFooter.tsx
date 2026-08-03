import { profile } from "@/content/profile";

export const SiteFooter = () => (
  <footer className="border-border border-t">
    <div className="label mx-auto flex max-w-[1200px] flex-wrap justify-between gap-x-7 gap-y-2.5 px-[clamp(20px,5vw,64px)] py-[22px] text-[10.5px] text-ink-muted leading-[1.6] tracking-[0.13em]">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>

      <p>React · TypeScript · Tailwind CSS v4 · Static on GitHub Pages</p>
    </div>
  </footer>
);
