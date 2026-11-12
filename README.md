# Portfolio · Vue/Nuxt playground

My personal showcase site, and the project I'm using to learn Vue coming from React.

**Stack:** Nuxt 4 · Vue 3.5 (`<script setup>` + TypeScript) · Nitro server routes · Zod · Tailwind CSS v4 · VueUse · Vitest + `@nuxt/test-utils` · ESLint (flat config, stylistic rules instead of Prettier)

## Getting started

```bash
corepack enable   # uses the pnpm version pinned in package.json
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `pnpm dev` | Dev server with HMR + Nuxt DevTools (press `Shift+Alt+D` in the browser) |
| `pnpm build` / `pnpm preview` | Production build (SSR + Nitro server) and local preview |
| `pnpm generate` | Fully static build, e.g. for GitHub Pages / Netlify |
| `pnpm lint` / `pnpm lint:fix` | ESLint, incl. formatting |
| `pnpm typecheck` | `vue-tsc` over app, server and shared code |
| `pnpm test` / `pnpm test:watch` | Vitest (`unit` + `nuxt` projects) |

Editor: VS Code with the recommended extensions (`.vscode/extensions.json`), most importantly **Vue – Official**.

## Where things live

```
app/                      # Everything that runs in the browser (and during SSR)
  app.vue                 # Root component (≈ React's <App/>)
  app.config.ts           # Public, reactive app config (nav items)
  error.vue               # Global error page (404/500)
  layouts/default.vue     # Wraps every page – header, <slot/>, footer
  pages/                  # File-based routing
    index.vue             #   /
    work/[slug].vue       #   /work/plancraft, /work/epages
  components/             # Auto-imported; folder becomes a prefix:
    layout/AppHeader.vue  #   <LayoutAppHeader/>
    sections/…            #   <SectionsAboutSection/>, <SectionsExperienceSection/>, …
    ui/…                  #   <UiSectionHeading/>, <UiTechBadge/>
  composables/            # Auto-imported `useXxx()` functions (≈ custom hooks)
server/                   # Nitro backend – runs only on the server
  api/                    # File-based API routes, e.g. api/experiences/[slug].get.ts
  data/                   # ⬅ Your content lives here – edit these files
  utils/                  # Auto-imported server helpers
shared/                   # Code + types used by BOTH app/ and server/ (auto-imported)
tests/
  unit/                   # Plain Vitest, node env
  nuxt/                   # Vitest with the Nuxt runtime (mountSuspended, registerEndpoint)
```

### Data flow

`server/data/*.ts` → `server/api/*` (typed, validated with Zod) → `useFetch('/api/…')` in pages/components.
During SSR the API is called **in-process** (no HTTP round trip), the result is serialised into the HTML, and the client hydrates without fetching again. Return types flow end-to-end, so `data` from `useFetch` is fully typed with no manual generics.

### API

| Route | Description |
| --- | --- |
| `GET /api/profile` | About-me content |
| `GET /api/experiences` | List of positions (summary) |
| `GET /api/experiences/:slug` | One position incl. projects, `404` if unknown |
| `POST /api/contact` | Contact form, validated (`400` on invalid input) – wire up an email provider in the TODO |

## Making it yours

1. Fill in `server/data/profile.ts` and `server/data/experiences.ts` (all placeholders are marked `TODO`).
2. Adjust the brand colours in `app/assets/css/main.css` (`@theme`).
3. Set `NUXT_PUBLIC_SITE_URL` when deploying (see `.env.example`).

## React → Vue cheat sheet

| React | Vue / Nuxt | Example in this repo |
| --- | --- | --- |
| Function component + JSX | SFC: `<script setup>` + `<template>` | any `.vue` file |
| `props` / `interface Props` | `defineProps<{…}>()` (destructure with defaults) | `ui/SectionHeading.vue` |
| `children` | default `<slot />` | `ui/SectionHeading.vue` |
| render props | named slots `<template #description>` | `sections/AboutSection.vue` |
| `useState` | `ref()` (primitives) / `reactive()` (objects) – mutate directly | `sections/ContactSection.vue` |
| `useMemo` | `computed()` – dependencies tracked automatically | `sections/ProjectCard.vue` |
| `useEffect` | `watch` / `watchEffect` / `onMounted` – setup runs **once**, not per render | `composables/useActiveSection.ts` |
| Custom hooks | Composables (`useXxx`) | `composables/` |
| Controlled inputs (`value` + `onChange`) | `v-model` (with modifiers like `.trim`) | `sections/ContactSection.vue` |
| `{cond && <X/>}` / ternary | `v-if` / `v-else-if` / `v-else` | `sections/ExperienceSection.vue` |
| `.map()` with `key` | `v-for` with `:key` | everywhere |
| `onClick={…}` | `@click="…"`, with modifiers like `@submit.prevent` | `sections/ContactSection.vue` |
| `className={cond ? 'a' : ''}` | `:class` (string, array or object) | `layout/AppHeader.vue` |
| Context | `provide` / `inject`, or `useState()` in Nuxt | – (try it!) |
| Next.js `app/` routing | `pages/` + `<NuxtPage/>` | `pages/` |
| Next.js route handlers | `server/api/*.{get,post}.ts` (Nitro) | `server/api/` |
| `fetch` in a server component / React Query | `useFetch` / `useAsyncData` (render-time), `$fetch` (events) | `pages/index.vue`, `ContactSection.vue` |
| `<Link>` | `<NuxtLink>` | `layout/AppHeader.vue` |
| `next/head`, `metadata` | `useHead` / `useSeoMeta` | `pages/index.vue` |
| Explicit imports | Auto-imports (Vue APIs, composables, components, `shared/`) | – |

## Ideas for next steps (learning exercises)

- Add a dark-mode toggle with `useColorMode` (`@nuxtjs/color-mode`) or VueUse's `useDark`.
- Move content to Markdown with `@nuxt/content` and query it instead of `server/data`.
- Add a Pinia store, or share state across components with Nuxt's `useState`.
- Use `provide`/`inject` for a theme or i18n context; try `@nuxtjs/i18n` for a German version.
- Send contact form mails (e.g. Resend) using a private `runtimeConfig` key.
- Add a Playwright e2e test via `@nuxt/test-utils/e2e`.
- Deploy: `pnpm build` for Node/Vercel/Netlify, or `pnpm generate` for a static host.
