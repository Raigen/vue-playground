<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
    {{ label }}
  </span>
</template>
