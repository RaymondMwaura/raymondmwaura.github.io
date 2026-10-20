import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;

/**
 * Smoke tests run against the production build rather than the dev server, so what is
 * checked is what ships — including the files copied in from public/, which the dev
 * server would serve whether or not they made it into dist/.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  // No retries: a static page has nothing to be flaky about, so a retry would only hide a real failure.
  retries: 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // The Vite build takes under a second, so rebuild every run rather than risk testing a stale dist/.
    command: `npx vite build && npx vite preview --port ${PORT} --strictPort`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !process.env.CI,
  },
});
