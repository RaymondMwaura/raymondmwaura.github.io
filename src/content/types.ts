/**
 * Shapes for every piece of copy on the site. Content lives as typed data rather than
 * inside JSX so that editing the site is a one-line data change, and so the compiler
 * catches a half-finished entry before it ships.
 */

/** Drives how a project card renders: not every project has a live URL to link to. */
export type ProjectStatus = "live" | "in-development" | "archived";

export type ProjectLink = {
  readonly label: string;
  readonly href: string;
};

/** A headline number worth pulling out of the prose, e.g. "1,200x" / "auth load reduction". */
export type Metric = {
  readonly value: string;
  readonly label: string;
};

export type Project = {
  readonly slug: string;
  readonly name: string;
  readonly context: string;
  readonly status: ProjectStatus;
  /** One line answering "what is this?" before the reader commits to the detail. */
  readonly summary: string;
  readonly problem: string;
  readonly approach: string;
  readonly outcome: string;
  readonly stack: readonly string[];
  readonly metrics: readonly Metric[];
  readonly links: readonly ProjectLink[];
  readonly image?: {
    readonly src: string;
    readonly alt: string;
  };
};

export type Role = {
  readonly title: string;
  readonly period: string;
  readonly note?: string;
  readonly highlights: readonly string[];
};

export type Position = {
  readonly company: string;
  readonly location: string;
  readonly period: string;
  /** One line on what the company or product actually is, shown beside the roles. */
  readonly blurb?: string;
  readonly roles: readonly Role[];
};

/** Pre-2019 history, kept to one line each so it doesn't crowd the recent work. */
export type EarlierRole = {
  readonly title: string;
  readonly organisation: string;
  readonly period: string;
  readonly description: string;
};

export type Qualification = {
  readonly credential: string;
  readonly institution: string;
  readonly period: string;
  readonly distinction?: string;
};

/** Grouped capability lists. Deliberately no proficiency scores — see README. */
export type SkillGroup = {
  readonly category: string;
  readonly skills: readonly string[];
};

export type SocialLink = {
  readonly label: string;
  readonly href: string;
};
