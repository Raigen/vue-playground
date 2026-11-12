/**
 * Tracks which page section (by element id) is currently in view – used to
 * highlight the matching nav link. Composables are Vue's equivalent of custom
 * React hooks, but they run once per component setup, not on every render.
 */
export function useActiveSection(ids: MaybeRefOrGetter<string[]>) {
  const activeId = ref<string | null>(null)

  // useIntersectionObserver is auto-imported from @vueuse/nuxt and cleans up on unmount.
  // Targets are resolved after mount, so this is SSR-safe.
  const targets = computed(() =>
    import.meta.client
      ? toValue(ids).map(id => document.getElementById(id)).filter(el => el !== null)
      : [],
  )

  const visible = new Set<string>()

  onMounted(() => {
    useIntersectionObserver(
      targets,
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // First id (in document order) that is visible wins.
        activeId.value = toValue(ids).find(id => visible.has(id)) ?? activeId.value
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
  })

  return { activeId: readonly(activeId) }
}
