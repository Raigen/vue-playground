import { experiences } from '../data/experiences'

// Files in server/utils are auto-imported in all server routes.
// Keeping data access here means the API handlers don't care whether the data
// comes from a TS file (today), a CMS or a database (tomorrow).

export function listExperiences(): ExperienceSummary[] {
  return experiences.map(({ slug, company, role, start, end, summary }) => ({
    slug, company, role, start, end, summary,
  }))
}

export function findExperience(slug: string): Experience | undefined {
  return experiences.find(experience => experience.slug === slug)
}
