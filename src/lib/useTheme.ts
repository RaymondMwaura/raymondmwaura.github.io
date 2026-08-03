import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/** Reads whatever the pre-paint script in index.html already settled on. */
const readAppliedTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readAppliedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Private browsing can reject writes; the in-memory theme still applies.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
};
