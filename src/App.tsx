import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Work } from "@/components/Work";

export const App = () => (
  <div id="top">
    <a
      href="#main"
      className="label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[2px] focus:bg-accent focus:px-4 focus:py-2.5 focus:text-canvas"
    >
      Skip to content
    </a>

    <SiteHeader />

    <main id="main" className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,64px)]">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>

    <SiteFooter />
  </div>
);
