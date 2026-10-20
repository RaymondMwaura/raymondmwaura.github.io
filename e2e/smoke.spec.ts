import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

/**
 * A deliberately small suite. The copy is typed data, so the compiler already catches a
 * half-finished entry; these cover what it can't — files that are referenced but missing,
 * accessibility regressions, and the page's few moving parts.
 */

/** Meta tags must use absolute URLs, so they name the live origin rather than this build. */
const SITE_ORIGIN = "https://raymondmwaura.github.io";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

// Pin the starting theme: otherwise the pre-paint script follows the machine's preference.
test.use({ colorScheme: "dark" });

/** Every value of `attribute` across the elements matching `selector`. */
const collectAttribute = async (
  page: Page,
  selector: string,
  attribute: string,
): Promise<string[]> => {
  const elements = await page.locator(selector).all();

  const values = await Promise.all(elements.map((element) => element.getAttribute(attribute)));

  return values.filter((value): value is string => value !== null);
};

test("loads without console errors or failed requests", async ({ page }) => {
  const problems: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`uncaught: ${error.message}`));
  page.on("requestfailed", (request) => problems.push(`failed: ${request.url()}`));
  page.on("response", (response) => {
    if (response.status() >= 400) problems.push(`${response.status()}: ${response.url()}`);
  });

  await page.goto("/", { waitUntil: "networkidle" });

  expect(problems).toEqual([]);
});

test("every image, icon and preview card the page references resolves", async ({
  page,
  request,
}) => {
  await page.goto("/");

  const references = [
    // Project screenshots load lazily, so a page load alone would never request them.
    ...(await collectAttribute(page, "img", "src")),
    ...(await collectAttribute(page, 'link[rel="icon"]', "href")),
    // Only crawlers fetch these, so a missing file never shows on the page itself.
    ...(await collectAttribute(page, 'meta[property="og:image"]', "content")),
  ];

  expect(references.length).toBeGreaterThan(0);

  for (const reference of references) {
    const response = await request.get(reference.replace(SITE_ORIGIN, ""));

    expect.soft(response.status(), reference).toBe(200);
  }
});

test("every in-page link points at an element that exists", async ({ page }) => {
  await page.goto("/");

  const fragments = await collectAttribute(page, 'a[href^="#"]', "href");

  expect(fragments.length).toBeGreaterThan(0);

  for (const fragment of fragments) {
    await expect.soft(page.locator(fragment), `${fragment} has no target`).toHaveCount(1);
  }
});

test("the theme toggle switches theme and survives a reload", async ({ page }) => {
  await page.goto("/");

  const root = page.locator("html");

  await expect(root).toHaveAttribute("data-theme", "dark");

  await page.getByRole("button", { name: "Switch to light theme" }).click();

  await expect(root).toHaveAttribute("data-theme", "light");

  await page.reload();

  await expect(root).toHaveAttribute("data-theme", "light");
  await expect(page.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
});

for (const colorScheme of ["dark", "light"] as const) {
  test(`has no WCAG A or AA violations in the ${colorScheme} theme`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    await page.goto("/");

    const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze();

    // Summarised: Tailwind's arbitrary-value classes make axe's selectors enormous, so the
    // raw objects bury the rule name. A few sample targets are enough to find the rest.
    const violations = results.violations.map((violation) => {
      const samples = violation.nodes.slice(0, 3).map((node) => node.target.join(" "));

      return `${violation.id} (${violation.impact}) on ${violation.nodes.length} elements: ${violation.help} — e.g. ${samples.join(" | ")}`;
    });

    expect(violations).toEqual([]);
  });
}
