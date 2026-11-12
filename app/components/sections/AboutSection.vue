<script setup lang="ts">
defineProps<{ profile: Profile }>()
</script>

<template>
  <section
    id="about"
    class="py-20"
  >
    <UiSectionHeading
      as="h1"
      eyebrow="About me"
    >
      Hi, I'm {{ profile.name }}.
      <template #description>
        {{ profile.role }} based in {{ profile.location }}. {{ profile.tagline }}
      </template>
    </UiSectionHeading>

    <div class="space-y-4 text-lg leading-relaxed">
      <p
        v-for="(paragraph, index) in profile.bio"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>

    <ul
      class="mt-8 flex flex-wrap gap-2"
      aria-label="Skills"
    >
      <li
        v-for="skill in profile.skills"
        :key="skill"
      >
        <UiTechBadge :label="skill" />
      </li>
    </ul>

    <ul class="mt-8 flex gap-4">
      <li
        v-for="link in profile.links"
        :key="link.url"
      >
        <a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="font-medium text-brand-600 hover:underline dark:text-brand-400"
        >
          {{ link.label }} ↗
        </a>
      </li>
    </ul>
  </section>
</template>
