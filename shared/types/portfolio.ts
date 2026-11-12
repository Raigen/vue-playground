// Types in `shared/` are usable from both app/ and server/ code.
// Nuxt 4 auto-imports everything in shared/types and shared/utils.

export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  role: string
  location: string
  tagline: string
  /** Paragraphs for the about section. */
  bio: string[]
  skills: string[]
  links: SocialLink[]
}

export interface Project {
  title: string
  summary: string
  highlights: string[]
  tech: string[]
}

export interface Experience {
  /** URL-safe identifier, used in /work/:slug and /api/experiences/:slug */
  slug: string
  company: string
  companyUrl: string
  role: string
  /** ISO month, e.g. "2021-04" */
  start: string
  /** ISO month or null when this is the current position */
  end: string | null
  location: string
  summary: string
  projects: Project[]
}

/** Lightweight list item returned by GET /api/experiences */
export type ExperienceSummary = Pick<
  Experience,
  'slug' | 'company' | 'role' | 'start' | 'end' | 'summary'
>
