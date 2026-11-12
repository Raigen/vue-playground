import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@vueuse/nuxt', '@nuxt/test-utils/module'],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  css: ['~/assets/css/main.css'],

  // Values here can be overridden at runtime via NUXT_PUBLIC_* env vars.
  runtimeConfig: {
    public: {
      siteUrl: 'http://localhost:3000',
    },
  },

  // Pre-render the landing page at build time; API routes stay dynamic.
  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-11-01',

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
    typeCheck: false, // run `pnpm typecheck` explicitly (and in CI) instead of on every dev build
  },

  eslint: {
    config: {
      stylistic: true, // ESLint handles formatting too – no Prettier needed
    },
  },
})
