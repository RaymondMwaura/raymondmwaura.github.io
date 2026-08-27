import barefootNomad from "@/assets/projects/barefoot-nomad.webp";
import hoaFlow from "@/assets/projects/hoa-flow.webp";
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
    status: "live",
    summary:
      "Recurring billing for homeowners' associations — dues generation, auto-pay and late fees on tokenized cards.",
    problem:
      "Self-managed associations still collect dues by cheque and bank transfer, then reconcile them in a spreadsheet once a month. Modern billing SaaS is almost universally built on Stripe, but associations — like universities, healthcare and government-adjacent buyers — are frequently mandated onto bank-backed processors such as CyberSource, where very little modern software exists.",
    approach:
      "Billing runs as a database-backed job queue drained by a daily cron rather than as ad-hoc scripts, which makes every step inspectable and re-runnable. Dues generation is idempotent on a period key; status transitions, late fees and auto-pay are separate jobs with a defined running order. Auto-pay claims an attempt counter before it charges and parks uncertain outcomes behind a pending-transaction guard, so a retry or an overlapping run cannot double-charge a resident. Cards are tokenized through CyberSource Flex, so card data never touches the application.",
    outcome:
      "Live at hoaflow.co.ke: the billing engine, auto-pay, payment history and platform billing run end to end in production, generating real dues and clearing real CyberSource transactions, all covered by integration tests on a dedicated database. Multi-tenancy and role-based access were built in from the first migration rather than retrofitted.",
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
    links: [{ label: "Visit HOA Flow", href: "https://www.hoaflow.co.ke/" }],
    image: {
      src: hoaFlow,
      alt: "The HoaFlow landing page, showing the 'Collect dues. Keep the peace.' hero and the units, assessments and payments feature cards",
    },
  },
  {
    slug: "barefoot-nomad",
    name: "Barefoot Nomad",
    context: "Independent rebuild of an Andela team project",
    status: "live",
    summary:
      "A corporate travel platform — staff raise trip requests, managers approve them, and travellers book accommodation.",
    problem:
      "Companies run staff travel through email chains and spreadsheets. Requests get lost between the traveller, the line manager and whoever actually books the hotel, and nobody can see where a request has got to.",
    approach:
      "The original was built in 2019 with a team of fellow trainees — an Express and Sequelize API behind a React and Redux client — and went down with Heroku's free tier in 2022. This is a rebuild from the archived copies: the domain model carried over, the implementation did not. It is now a single Next.js application on the App Router with React Server Components, Drizzle over Neon Postgres, and Auth.js for Google sign-in, credentials and two-factor. Multi-city requests, approval chains, hotel and room inventory, bookings, documents, team chat and travel statistics all sit behind the same role-scoped permission model, derived from the session rather than passed in as a filter so a missing check fails closed.",
    outcome:
      "Live at barefootnomad.co.ke, and open to anyone: three one-click demo accounts sign you in as a requester, a line manager or a travel administrator, so the same data can be seen from each side without registering. Payments clear real Stripe transactions in test mode, documents upload straight to blob storage, and the demo data resets nightly. Every screen is covered by end-to-end tests against a database branch per pull request, which is what makes the suite a gate rather than a formality.",
    stack: [
      "Next.js",
      "TypeScript",
      "React Server Components",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth.js",
      "MUI",
      "Stripe",
      "Playwright",
    ],
    metrics: [],
    links: [{ label: "Visit Barefoot Nomad", href: "https://www.barefootnomad.co.ke/" }],
    image: {
      src: barefootNomad,
      alt: "The Barefoot Nomad landing page, showing the 'Request a trip. Get an answer. Have somewhere to sleep.' hero beside three one-click demo sign-in cards for the requester, line manager and travel administrator roles",
    },
  },
];
