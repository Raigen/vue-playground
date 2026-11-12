<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
    © {{ year }} · Built with
    <a
      href="https://nuxt.com"
      class="text-brand-600 hover:underline dark:text-brand-400"
    >Nuxt</a>
    &amp;
    <a
      href="https://vuejs.org"
      class="text-brand-600 hover:underline dark:text-brand-400"
    >Vue</a>
  </footer>
</template>
