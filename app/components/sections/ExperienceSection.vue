<script setup lang="ts">
const { slug, detailed = false } = defineProps<{
  slug: string
  /** Render all project highlights (used on the /work/:slug page). */
  detailed?: boolean
}>()

// Each section fetches its own data – fine with SSR because useFetch dedupes by key
// and the result is transferred to the client in the payload.
const { data: experience, status, error } = await useExperience(() => slug)
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
          v-for="project in experience.projects"
          :key="project.title"
          :project="project"
          :detailed="detailed"
        />
      </div>

      <NuxtLink
        v-if="!detailed"
        :to="`/work/${experience.slug}`"
        class="mt-6 inline-block font-medium text-brand-600 hover:underline dark:text-brand-400"
      >
        More about my time at {{ experience.company }} →
      </NuxtLink>
    </template>
  </section>
</template>
