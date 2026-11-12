<script setup lang="ts">
type Status = 'idle' | 'sending' | 'sent' | 'error'

// reactive() for a form object; no setState – you mutate and Vue tracks it.
const form = reactive({ name: '', email: '', message: '' })
const status = ref<Status>('idle')

async function submit() {
  status.value = 'sending'
  try {
    // $fetch is for event-driven requests; useFetch is for data needed at render time.
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'sent'
    Object.assign(form, { name: '', email: '', message: '' })
  }
  catch {
    status.value = 'error'
  }
}

const inputClass = 'mt-1 block w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700'
</script>

<template>
  <section
    id="contact"
    class="border-t border-slate-200 py-20 dark:border-slate-800"
  >
    <UiSectionHeading eyebrow="Contact">
      Let's talk
      <template #description>
        Questions, ideas or opportunities – drop me a line.
      </template>
    </UiSectionHeading>

    <form
      class="grid max-w-xl gap-4"
      @submit.prevent="submit"
    >
      <label class="block">
        <span class="text-sm font-medium">Name</span>
        <input
          v-model.trim="form.name"
          name="name"
          required
          autocomplete="name"
          :class="inputClass"
        >
      </label>
      <label class="block">
        <span class="text-sm font-medium">Email</span>
        <input
          v-model.trim="form.email"
          name="email"
          type="email"
          required
          autocomplete="email"
          :class="inputClass"
        >
      </label>
      <label class="block">
        <span class="text-sm font-medium">Message</span>
        <textarea
          v-model="form.message"
          name="message"
          rows="5"
          required
          minlength="10"
          :class="inputClass"
        />
      </label>

      <div class="flex items-center gap-4">
        <button
          type="submit"
          :disabled="status === 'sending'"
          class="rounded-lg bg-brand-500 px-5 py-2 font-medium text-white transition-colors hover:bg-brand-600 disabled:opacity-60"
        >
          {{ status === 'sending' ? 'Sending…' : 'Send message' }}
        </button>
        <p
          aria-live="polite"
          class="text-sm"
        >
          <span
            v-if="status === 'sent'"
            class="text-brand-600"
          >Thanks! I'll get back to you soon.</span>
          <span
            v-else-if="status === 'error'"
            class="text-red-600"
          >Something went wrong. Please try again.</span>
        </p>
      </div>
    </form>
  </section>
</template>
