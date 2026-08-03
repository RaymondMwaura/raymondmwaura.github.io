import type { EarlierRole, Position, Qualification } from "./types";

export const positions: readonly Position[] = [
  {
    company: "Safaricom PLC",
    location: "Nairobi, Kenya",
    period: "Jul 2021 — Present",
    blurb:
      "Business Hub — the enterprise self-service portal for connectivity, invoices and support across Kenya.",
    roles: [
      {
        title: "Frontend Web Developer — Business Hub, Enterprise IT",
        period: "2022 — Present",
        highlights: [
          "Cut Amazon Cognito authentication calls from one every three seconds to one per hour per active user — roughly a 1,200x reduction in auth traffic that materially stabilised the Business Hub frontend.",
          "Raised the landing page performance score from about 50% to over 85% on desktop through code splitting, asset optimisation and Core Web Vitals work.",
          "Helped deliver Safaricom's first blue-green deployment pipeline, decomposing a monolithic Next.js application into micro-frontends to enable zero-downtime releases.",
          "Built end-to-end payment journeys across M-Pesa STK Push, card (CyberSource, ABSA) and offline channels, including a reusable Card Payment V2 component adopted across the Domains, Business Fibre, 4G and 5G buy journeys.",
          "Delivered billing and invoicing end to end — invoices, receipts, dispute reporting and admin finance views — plus support ticketing with CRM and WDE integration.",
          "Remediated Veracode-flagged security vulnerabilities and upgraded core dependencies across the self-service portal.",
        ],
      },
      {
        title: "Temporary Assignment — MyCounty RMS, Technology Enterprise Solutions",
        period: "2026",
        note: "Selected across Enterprise Business squads under Safaricom's liquid workforce model",
        highlights: [
          "Accelerated delivery on MyCounty RMS, a multi-tenant revenue management platform digitising revenue collection for Kenyan county governments against a compressed deadline. The team delivered.",
          "Built revenue and payment reconciliation dashboard components in React, Recharts and Material UI, including custom SVG chart rendering and responsive layout work.",
          "Consolidated fragmented Postman API collections into a single standardised suite, resolving base-URL and header inconsistencies that were breaking integration calls across the team.",
        ],
      },
      {
        title: "Software Engineer in Test — Quality Engineering",
        period: "Jul 2021 — 2022",
        highlights: [
          "Owned end-to-end system and user acceptance testing for enterprise platforms, tracking defects to resolution and reporting progress to stakeholders.",
          "Managed test activities for a new National Destination Code mobile number range, subsequently used in the Results Transmission and Presentation kits for the 2022 Kenyan General Election.",
          "Led test teams across concurrent projects, driving zero defect leakage to production within planned timelines and scope.",
        ],
      },
    ],
  },
  {
    company: "Techsavanna Company Ltd",
    location: "Nairobi, Kenya",
    period: "Oct 2020 — Jun 2021",
    roles: [
      {
        title: "Quality Assurance Engineer",
        period: "Oct 2020 — Jun 2021",
        note: "Contracted to Safaricom PLC",
        highlights: [
          "Executed functional, regression and user acceptance testing across enterprise systems, managing defect lifecycles in HP ALM and Jira.",
          "Produced test progress and coverage reporting for delivery stakeholders across concurrent releases.",
        ],
      },
    ],
  },
  {
    company: "Freelance",
    location: "Nairobi, Kenya",
    period: "Apr 2020 — Sep 2020",
    roles: [
      {
        title: "Software Developer",
        period: "Apr 2020 — Sep 2020",
        highlights: [
          "Delivered full-stack web applications for clients using Node, Express, GraphQL, React, Bootstrap and Material UI.",
          "Handled deployment and CI/CD across Heroku, AWS, cPanel and GitHub.",
        ],
      },
    ],
  },
  {
    company: "Andela Rwanda Ltd",
    location: "Kigali, Rwanda",
    period: "Oct 2019 — Mar 2020",
    roles: [
      {
        title: "Trainee Software Developer",
        period: "Oct 2019 — Mar 2020",
        highlights: [
          "Built features and resolved defects on production codebases as a full-stack JavaScript developer (Node, Express, PostgreSQL, React, Redux).",
          "Led agile sprints, ran project demonstrations and managed stakeholder relationships.",
        ],
      },
    ],
  },
];

export const earlierRoles: readonly EarlierRole[] = [
  {
    title: "ICT Assistant",
    organisation: "Pacific Insurance Brokers (E.A.) Ltd",
    period: "2019",
    description: "Systems access control, requirements analysis and ICT support.",
  },
  {
    title: "Software Engineering Intern",
    organisation: "Wavuh Limited",
    period: "2017 — 2018",
    description:
      "Full-stack development (PHP, MySQL, JavaScript, DHTMLX), ERP customisation, client implementation and end-user training.",
  },
  {
    title: "Accountant",
    organisation: "NW Realite Limited",
    period: "2013 — 2016",
    description:
      "Bank reconciliations, supplier aging analysis, tenant invoicing, payroll posting, monthly VAT / PAYE / withholding tax returns and annual audit support. Supervised junior staff.",
  },
];

export const qualifications: readonly Qualification[] = [
  {
    credential: "Bachelor of Business Information Technology (BBIT)",
    institution: "Strathmore University, Nairobi",
    period: "2019",
    distinction: "First Class Honours",
  },
  {
    credential: "Association of Chartered Certified Accountants (ACCA)",
    institution: "Strathmore University",
    period: "Completed December 2012",
  },
];
