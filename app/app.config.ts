// app.config is for public, build-time config that is reactive at runtime
// (unlike runtimeConfig, which is for env-driven values and secrets).
export default defineAppConfig({
  nav: [
    { id: 'about', label: 'About' },
    { id: 'plancraft', label: 'plancraft' },
    { id: 'epages', label: 'ePages' },
    { id: 'contact', label: 'Contact' },
  ],
})
