import type { SkillGroup, SocialLink } from "./types";

export const profile = {
  name: "Raymond Mwaura",
  title: "Frontend Engineer",
  specialism: "React · TypeScript · Next.js",
  focus: "Enterprise & Fintech Platforms",
  location: "Nairobi, Kenya",
  timezone: "UTC+3",
  availability: "Working remotely",
  email: "raymwauradev@gmail.com",
  github: "https://github.com/RaymondMwaura",

  /** The hero's leading paragraph. The meta description in index.html is separate copy. */
  tagline:
    "Frontend engineer on payments, billing and deployment infrastructure at Safaricom — the enterprise portal where businesses across Kenya buy connectivity and settle invoices. I qualified as an accountant first, which is why I treat a mismatched total as a defect rather than a rounding question.",

  /** The phrase within the tagline set in the accent colour. Must appear in it verbatim. */
  taglineEmphasis: "Safaricom",

  /** The shorter counterweight sitting beside the tagline in the hero. */
  taglineAside:
    "Four years shipping React and TypeScript against real money and real invoices. Three years before engineering, reconciling them by hand.",

  /** The oversized serif line that opens the About section. */
  pullQuote:
    "Most engineers meet a billing system for the first time when they are asked to build one. I met mine with a bank statement in one hand.",

  about: [
    "I spent three years as an accountant after qualifying with ACCA — bank reconciliations, supplier aging, tenant invoicing, VAT and PAYE returns, audit support. The work rewarded one habit above all others: nothing is finished until it balances, and the difference is never “close enough”.",
    "I moved into engineering through an internship in 2017 and a developer traineeship at Andela in 2019, joining Safaricom in 2021 as a Software Engineer in Test before moving onto the Business Hub frontend. That habit shows up in the questions I ask before the code: what happens to a part-paid invoice, which side of midnight a transaction belongs to, what the customer sees when the payment gateway times out. On a portal where businesses settle real bills, those questions are the product.",
    "Today I work across the frontend and the pipeline that ships it — React and TypeScript in the browser, blue-green deployments and micro-frontends behind it. I like problems where correctness is measurable and the numbers are auditable.",
  ],
} as const;

/** The four-cell hairline grid closing the hero. */
export const heroFacts = [
  { label: "Current", value: "Safaricom PLC", detail: "Business Hub" },
  { label: "Focus", value: "Payments & billing", detail: "Deployment pipelines" },
  { label: "Stack", value: "React · TypeScript", detail: "Next.js · MUI · AWS" },
  { label: "Before this", value: "Qualified accountant", detail: "ACCA · 2013 — 2016" },
] as const;

export const socialLinks: readonly SocialLink[] = [
  { label: "GitHub", href: profile.github },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js App Router",
      "JavaScript (ES2022+)",
      "Redux",
      "Material UI",
      "Recharts",
      "Design systems",
      "Micro-frontends",
      "Core Web Vitals",
    ],
  },
  {
    category: "Testing & Quality",
    skills: [
      "Jest",
      "React Testing Library",
      "End-to-end testing",
      "User acceptance testing",
      "SonarQube",
      "Veracode",
      "Jira",
      "HP ALM · Octane",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Node.js",
      "Express",
      "GraphQL · Apollo Server",
      "REST integration",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Oracle",
    ],
  },
  {
    category: "Cloud & Tooling",
    skills: [
      "AWS EC2 · S3 · RDS · EBS",
      "CloudFront · Cognito",
      "Blue-green deployments",
      "CI/CD",
      "Git · GitHub · GitLab",
      "Postman",
      "Dynatrace",
    ],
  },
  {
    category: "Domain",
    skills: [
      "M-Pesa STK Push",
      "CyberSource · card",
      "Billing & invoicing",
      "Reconciliation",
      "Audit trails",
      "VAT & PAYE returns",
      "Statutory compliance",
    ],
  },
];
