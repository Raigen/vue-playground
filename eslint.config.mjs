// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/define-macros-order': ['error', { order: ['defineProps', 'defineEmits', 'defineModel', 'defineSlots'] }],
    'vue/no-unused-refs': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
  },
})
