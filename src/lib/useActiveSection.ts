import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the nav can mark it as current.
 * Uses IntersectionObserver rather than scroll maths so it stays cheap on the main thread.
 */
export const useActiveSection = (sectionIds: readonly string[]) => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        const topmost = visible[0];

        if (topmost) setActiveId(topmost.target.id);
      },
      // A band across the upper-middle of the viewport: a section counts as "active"
      // once its content is where the reader is actually looking.
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};
