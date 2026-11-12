// Used by the Docker HEALTHCHECK and the reverse proxy.
export default defineEventHandler(() => ({ status: 'ok' }))
