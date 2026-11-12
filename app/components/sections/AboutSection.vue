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

    <dl class="mt-8 grid gap-4 sm:grid-cols-2">
      <div
        v-for="fact in profile.facts"
        :key="fact.label"
      >
        <dt class="text-sm font-medium text-slate-500">
          {{ fact.label }}
        </dt>
        <dd class="mt-1">
          {{ fact.value }}
        </dd>
      </div>
    </dl>

    <div
      v-if="profile.sideProjects.length"
      class="mt-10"
    >
      <h2 class="mb-4 text-sm font-medium uppercase tracking-wider text-slate-500">
        Side projects
      </h2>
      <div class="grid gap-6">
        <SectionsProjectCard
          v-for="project in profile.sideProjects"
          :key="project.title"
          :project="project"
          detailed
        />
      </div>
    </div>

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
