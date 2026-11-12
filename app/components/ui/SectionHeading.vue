<script setup lang="ts">
// Type-based props: the Vue equivalent of `function Comp(props: Props)`.
const { eyebrow, as = 'h2' } = defineProps<{
  eyebrow?: string
  as?: 'h1' | 'h2' | 'h3'
}>()
</script>

<template>
  <div class="mb-8">
    <p
      v-if="eyebrow"
      class="mb-2 text-sm font-medium uppercase tracking-wider text-brand-600 dark:text-brand-400"
    >
      {{ eyebrow }}
    </p>
    <component
      :is="as"
      class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white"
    >
      <!-- Default slot ≈ React `children` -->
      <slot />
    </component>
    <!-- Named slot ≈ a render prop -->
    <div
      v-if="$slots.description"
      class="mt-3 max-w-2xl text-slate-600 dark:text-slate-400"
    >
      <slot name="description" />
    </div>
  </div>
</template>
