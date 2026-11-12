<script setup lang="ts">
// Validate the route param before the page renders; returning false yields a 404.
definePageMeta({
  validate: route => typeof route.params.slug === 'string' && /^[a-z0-9-]+$/.test(route.params.slug),
})

const route = useRoute()
// Safe: `validate` above guarantees a single string segment.
const slug = computed(() => route.params.slug as string)

const { data: experience, error } = await useExperience(slug)

if (error.value) {
  // Bubble the API's 404 up to app/error.vue.
  throw createError({ statusCode: error.value.statusCode ?? 500, statusMessage: error.value.statusMessage, fatal: true })
}

useSeoMeta({
  title: () => experience.value?.company,
  description: () => experience.value?.summary,
})
</script>

<template>
  <div>
    <NuxtLink
      to="/"
      class="mt-8 inline-block text-sm text-slate-500 hover:text-brand-600"
    >
      ← Back to overview
    </NuxtLink>
    <SectionsExperienceSection
      :slug="slug"
      detailed
    />
  </div>
</template>
