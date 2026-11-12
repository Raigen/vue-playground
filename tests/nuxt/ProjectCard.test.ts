import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ProjectCard from '~/components/sections/ProjectCard.vue'

const project: Project = {
  title: 'Design system',
  summary: 'Built a shared component library.',
  highlights: ['One', 'Two', 'Three'],
  tech: ['Vue', 'TypeScript'],
}

describe('ProjectCard', () => {
  it('shows only the first two highlights by default', async () => {
    const wrapper = await mountSuspended(ProjectCard, { props: { project } })

    expect(wrapper.get('h3').text()).toBe('Design system')
    expect(wrapper.findAll('ul.list-disc li')).toHaveLength(2)
  })

  it('shows all highlights when detailed', async () => {
    const wrapper = await mountSuspended(ProjectCard, { props: { project, detailed: true } })

    expect(wrapper.findAll('ul.list-disc li')).toHaveLength(3)
    expect(wrapper.text()).toContain('TypeScript')
  })
})
