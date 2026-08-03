import safaricomBusinessHub from "@/assets/projects/safaricom-business-hub.webp";
import type { Project } from "./types";

/**
 * Deliberately short. Three considered projects read stronger than ten thin ones, and
 * every entry here is something that can actually be discussed in an interview.
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
      // The landing page specifically — it is the surface the performance work above refers to.
      alt: "The Safaricom Business Hub landing page, showing the corporate post-pay offer",
    },
  },
  {
    slug: "hoa-flow",
    name: "HOA Flow",
    context: "Independent project",
    status: "in-development",
    summary:
      "Recurring billing for homeowners' associations — dues generation, auto-pay and late fees on tokenized cards.",
    problem:
      "Self-managed associations still collect dues by cheque and bank transfer, then reconcile them in a spreadsheet once a month. Modern billing SaaS is almost universally built on Stripe, but associations — like universities, healthcare and government-adjacent buyers — are frequently mandated onto bank-backed processors such as CyberSource, where very little modern software exists.",
    approach:
      "Billing runs as a database-backed job queue drained by a daily cron rather than as ad-hoc scripts, which makes every step inspectable and re-runnable. Dues generation is idempotent on a period key; status transitions, late fees and auto-pay are separate jobs with a defined running order. Auto-pay claims an attempt counter before it charges and parks uncertain outcomes behind a pending-transaction guard, so a retry or an overlapping run cannot double-charge a resident. Cards are tokenized through CyberSource Flex, so card data never touches the application.",
    outcome:
      "In development, and honest about it: the billing engine, auto-pay, payment history and platform billing all run end to end against the CyberSource sandbox, covered by integration tests on a dedicated database. Multi-tenancy and role-based access were built in from the first migration rather than retrofitted.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "CyberSource",
      "Material UI",
      "Vitest",
    ],
    metrics: [
      { value: "46", label: "integration tests over the billing engine" },
      { value: "Zero", label: "PCI scope — cards tokenized, never stored" },
    ],
    links: [],
  },
  {
    slug: "barefoot-nomad",
    name: "Barefoot Nomad",
    context: "Andela · Team project",
    status: "archived",
    summary:
      "A corporate travel platform — staff raise trip requests, managers approve them, and travellers book accommodation.",
    problem:
      "Companies run staff travel through email chains and spreadsheets. Requests get lost between the traveller, the line manager and whoever actually books the hotel, and nobody can see where a request has got to.",
    approach:
      "Built with a team of fellow trainee developers over agile sprints, with regular demonstrations to stakeholders. An Express and Sequelize API over PostgreSQL models the whole domain — multi-city trip requests, approval chains, hotel and room inventory, bookings, comment threads and notifications — behind a multi-role permission model. Sessions are JWT with Google and Facebook sign-in and optional two-factor; the React and Redux client handles the booking and checkout journeys.",
    outcome:
      "Shipped and demonstrated, with a large backend test suite running on Travis CI alongside Coveralls coverage and automated review. No longer deployed — it went down with Heroku's free tier in 2022. This is early work and the code shows it in places, but the domain modelling and the review discipline hold up.",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Redux", "Jest"],
    metrics: [],
    links: [
      { label: "Backend on GitHub", href: "https://github.com/RaymondMwaura/My-BN-Copy-Backend" },
      { label: "Frontend on GitHub", href: "https://github.com/RaymondMwaura/My-BN-Copy-Frontend" },
    ],
  },
];
