<script setup lang="ts">
import type { NuxtError } from '#app'

const { error } = defineProps<{ error: NuxtError }>()

useHead({ title: `${error.statusCode}` })
</script>

<template>
  <NuxtLayout>
    <div class="py-32 text-center">
      <p class="text-6xl font-bold text-brand-500">
        {{ error.statusCode }}
      </p>
      <p class="mt-4 text-lg">
        {{ error.statusCode === 404 ? 'This page does not exist.' : error.statusMessage || 'Something went wrong.' }}
      </p>
      <button
        class="mt-8 rounded-lg bg-brand-500 px-5 py-2 font-medium text-white hover:bg-brand-600"
        @click="clearError({ redirect: '/' })"
      >
        Back home
      </button>
    </div>
  </NuxtLayout>
</template>
