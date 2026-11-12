<script setup lang="ts">
const { project, detailed = false } = defineProps<{
  project: Project
  detailed?: boolean
}>()

// computed ≈ useMemo, but dependencies are tracked automatically.
const visibleHighlights = computed(() =>
  detailed ? project.highlights : project.highlights.slice(0, 2),
)
</script>

<template>
  <article class="rounded-xl border border-slate-200 p-6 transition-shadow hover:shadow-md dark:border-slate-800">
    <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
      {{ project.title }}
    </h3>
    <p class="mt-2">
      {{ project.summary }}
    </p>

    <ul
      v-if="visibleHighlights.length"
      class="mt-4 list-disc space-y-1 pl-5"
    >
      <li
        v-for="highlight in visibleHighlights"
        :key="highlight"
      >
        {{ highlight }}
      </li>
    </ul>

    <ul
      class="mt-4 flex flex-wrap gap-2"
      aria-label="Technologies"
    >
      <li
        v-for="tech in project.tech"
        :key="tech"
      >
        <UiTechBadge :label="tech" />
      </li>
    </ul>
  </article>
</template>
