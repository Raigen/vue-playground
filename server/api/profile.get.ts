import { profile } from '../data/profile'

// The `.get` suffix restricts this handler to GET requests.
// Return type is inferred, so `useFetch('/api/profile')` is fully typed on the client.
export default defineEventHandler(() => profile)
