import { describe, expect, it } from 'vitest'
import { mountSuspended, registerEndpoint } from '@nuxt/test-utils/runtime'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'

// Mock the Nitro endpoint the component calls via useFetch.
registerEndpoint('/api/experiences/acme', () => ({
  slug: 'acme',
  company: 'Acme',
  companyUrl: 'https://acme.test',
  role: 'Engineer',
  start: '2020-01',
  end: null,
  location: 'Remote',
  summary: 'Making anvils.',
  projects: [],
} satisfies Experience))

describe('ExperienceSection', () => {
  it('renders the fetched experience', async () => {
    const wrapper = await mountSuspended(ExperienceSection, { props: { slug: 'acme' } })

    expect(wrapper.attributes('id')).toBe('acme')
    expect(wrapper.text()).toContain('Engineer at Acme')
    expect(wrapper.text()).toContain('Jan 2020 – Present')
    expect(wrapper.find('a[href="/work/acme"]').exists()).toBe(true)
  })
})
