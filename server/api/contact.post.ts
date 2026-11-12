import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.email(),
  message: z.string().trim().min(10).max(2000),
})

export type ContactPayload = z.infer<typeof contactSchema>

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, contactSchema.parse)

  // TODO: forward to an email provider (Resend, Postmark, ...) or store it.
  // Secrets go into runtimeConfig (private keys) and are set via NUXT_* env vars.
  console.info('[contact] new message from', body.email)

  setResponseStatus(event, 201)
  return { ok: true }
})
