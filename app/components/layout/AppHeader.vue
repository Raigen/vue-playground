<script setup lang="ts">
const { nav } = useAppConfig()
const route = useRoute()

const { activeId } = useActiveSection(() => nav.map(item => item.id))
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header class="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
    <nav
      class="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      aria-label="Main"
    >
      <NuxtLink
        to="/"
        class="font-semibold text-slate-900 dark:text-white"
      >
        <span class="text-brand-500">~/</span>portfolio
      </NuxtLink>

      <ul class="flex gap-1 overflow-x-auto text-sm">
        <li
          v-for="item in nav"
          :key="item.id"
        >
          <NuxtLink
            :to="{ path: '/', hash: `#${item.id}` }"
            class="block rounded-md px-3 py-1.5 transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            :class="isHome && activeId === item.id
              ? 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400'
              : ''"
            :aria-current="isHome && activeId === item.id ? 'location' : undefined"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
