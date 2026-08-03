import safaricomBusinessHub from "@/assets/projects/safaricom-business-hub.webp";
import type { Project } from "./types";

/**
 * Deliberately short. Three considered projects read stronger than ten thin ones, and
 * every entry here is something that can actually be discussed in an interview.
 *
 * NOTE: the Barefoot Nomad and HOA Flow entries contain placeholder copy marked TODO.
 * Replace them before publishing — do not ship invented detail.
 */
export const projects: readonly Project[] = [
  {
    slug: "safaricom-business-hub",
    name: "Business Hub",
    context: "Safaricom PLC · Enterprise self-service portal",
    status: "live",
    summary:
      "The portal where businesses across Kenya buy connectivity, settle invoices and raise support with Safaricom.",
    problem:
      "A monolithic Next.js application was re-authenticating against Amazon Cognito every three seconds per active user, saturating the auth path and destabilising the frontend. Releases required downtime, and the landing page was scoring around 50% on desktop performance.",
    approach:
      "Reworked the token lifecycle so authentication resolves once per hour per active user instead of continuously. Decomposed the monolith into micro-frontends to support a blue-green pipeline, and attacked the landing page through code splitting, asset optimisation and Core Web Vitals work. Built the payment layer end to end — M-Pesa STK Push, card via CyberSource and ABSA, and offline channels — behind a reusable Card Payment component.",
    outcome:
      "Roughly a 1,200x reduction in authentication traffic and a materially more stable frontend. Performance score lifted past 85%. The blue-green pipeline was Safaricom's first, enabling zero-downtime releases, and the Card Payment V2 component was adopted across the Domains, Business Fibre, 4G and 5G buy journeys.",
    stack: ["Next.js", "React", "TypeScript", "Material UI", "AWS Cognito", "Micro-frontends"],
    metrics: [
      { value: "1,200x", label: "reduction in auth API load" },
      // Kept terse so all three metrics stay on one line and the row aligns.
      { value: "50→85", label: "desktop performance score" },
      { value: "First", label: "blue-green pipeline at Safaricom" },
    ],
    links: [{ label: "Visit Business Hub", href: "https://www.business.safaricom.co.ke/" }],
    image: {
      src: safaricomBusinessHub,
      alt: "The Safaricom Business Hub enterprise self-service portal",
    },
  },
  {
    slug: "hoa-flow",
    name: "HOA Flow",
    context: "Independent project",
    status: "in-development",
    // TODO(raymond): replace this block with the real description before publishing.
    summary: "TODO — one line on what HOA Flow does and who it is for.",
    problem: "TODO — what is broken about how homeowners' associations handle this today?",
    approach: "TODO — the build: architecture, notable decisions, what you deliberately left out.",
    outcome:
      "TODO — while in development, describe current state honestly (what works today) rather than projected results.",
    stack: ["TODO — confirm stack"],
    metrics: [],
    links: [],
  },
  {
    slug: "barefoot-nomad",
    name: "Barefoot Nomad",
    context: "Andela · Team project",
    status: "archived",
    // TODO(raymond): confirm the product description and add the GitHub repo link.
    summary:
      "TODO — confirm: a travel and accommodation request platform built with a team of fellow trainee developers.",
    problem: "TODO — the problem the product set out to solve.",
    approach:
      "Built as a full-stack JavaScript application with a team of trainee developers, working to agile sprints with regular demonstrations to stakeholders.",
    outcome:
      "TODO — what shipped, and your specific contribution. Worth stating plainly that this is early work and no longer deployed.",
    stack: ["Node.js", "Express", "PostgreSQL", "React", "Redux"],
    metrics: [],
    links: [],
  },
];
