<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useHead({
  titleTemplate: title => (title ? `${title} · Portfolio` : 'Portfolio'),
  link: [{ rel: 'canonical', href: siteUrl }],
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
