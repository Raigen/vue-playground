/**
 * Fetches one experience by slug. `useFetch` runs on the server during SSR,
 * serialises the result into the HTML payload and re-uses it on hydration –
 * no double fetch, unlike a naive useEffect in React.
 */
export function useExperience(slug: MaybeRefOrGetter<string>) {
  return useFetch(() => `/api/experiences/${toValue(slug)}`, {
    key: `experience-${toValue(slug)}`,
  })
}
