<script setup lang="ts">
// Top-level await in <script setup> makes this an async component;
// Nuxt waits for it during SSR so the HTML arrives fully rendered.
const { data: profile } = await useFetch('/api/profile')

useSeoMeta({
  title: () => profile.value?.name,
  description: () => profile.value?.tagline,
  ogTitle: () => profile.value?.name,
  ogDescription: () => profile.value?.tagline,
})
</script>

<template>
  <div>
    <SectionsAboutSection
      v-if="profile"
      :profile="profile"
    />
    <SectionsExperienceSection slug="plancraft" />
    <SectionsExperienceSection slug="epages" />
    <SectionsContactSection />
  </div>
</template>
