<script setup lang="ts">
const { slug, detailed = false } = defineProps<{
  slug: string
  /** Render all project highlights (used on the /work/:slug page). */
  detailed?: boolean
}>()

// Each section fetches its own data – fine with SSR because useFetch dedupes by key
// and the result is transferred to the client in the payload.
const { data: experience, status, error } = await useExperience(() => slug)

const OVERVIEW_PROJECT_COUNT = 3
const visibleProjects = computed(() => {
  const projects = experience.value?.projects ?? []
  return detailed ? projects : projects.slice(0, OVERVIEW_PROJECT_COUNT)
})
</script>

<template>
  <section
    :id="slug"
    class="border-t border-slate-200 py-20 dark:border-slate-800"
    :aria-busy="status === 'pending'"
  >
    <p
      v-if="error"
      role="alert"
      class="text-red-600"
    >
      Could not load this section: {{ error.statusMessage ?? error.message }}
    </p>

    <template v-else-if="experience">
      <UiSectionHeading :eyebrow="formatPeriod(experience.start, experience.end)">
        {{ experience.role }} at
        <a
          :href="experience.companyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-brand-600 hover:underline dark:text-brand-400"
        >{{ experience.company }}</a>
        <template #description>
          {{ experience.summary }}
        </template>
      </UiSectionHeading>

      <div class="grid gap-6">
        <SectionsProjectCard
          v-for="project in visibleProjects"
          :key="project.title"
          :project="project"
          :detailed="detailed"
        />
      </div>

      <div
        v-if="detailed && experience.challenges?.length"
        class="mt-12"
      >
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
          Key challenges solved
        </h3>
        <ul class="mt-4 list-disc space-y-2 pl-5">
          <li
            v-for="challenge in experience.challenges"
            :key="challenge"
          >
            {{ challenge }}
          </li>
        </ul>
      </div>

      <NuxtLink
        v-if="!detailed"
        :to="`/work/${experience.slug}`"
        class="mt-6 inline-block font-medium text-brand-600 hover:underline dark:text-brand-400"
      >
        All {{ experience.projects.length }} highlights from my time at {{ experience.company }} →
      </NuxtLink>
    </template>
  </section>
</template>
