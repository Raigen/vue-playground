import { z } from 'zod'

const paramsSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/, 'Invalid slug'),
})

export default defineEventHandler(async (event) => {
  // Validates route params; throws a 400 with details if invalid.
  const { slug } = await getValidatedRouterParams(event, paramsSchema.parse)

  const experience = findExperience(slug)
  if (!experience) {
    throw createError({ statusCode: 404, statusMessage: `No experience found for "${slug}"` })
  }

  return experience
})
