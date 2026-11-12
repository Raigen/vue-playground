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

  // Server-render pages on demand and cache the result for 10 minutes
  // (stale-while-revalidate). Unlike `prerender`, this picks up runtime env
  // vars such as NUXT_PUBLIC_SITE_URL from the container.
  routeRules: {
    '/': { swr: 600 },
    '/work/**': { swr: 600 },
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
