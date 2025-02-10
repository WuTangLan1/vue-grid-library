// src\components\Gridbase\GridBase.spec.ts

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GridBase from './GridBase.vue'

describe('GridBase.vue', () => {
  it('renders items properly', () => {
    const items = ['Item A', 'Item B', 'Item C']
    const wrapper = mount(GridBase, {
      props: { items }
    })

    // Expect the DOM to have exactly 3 .grid-item elements
    expect(wrapper.findAll('.grid-item').length).toBe(3)
  })

  it('applies prop columns correctly', async () => {
    const wrapper = mount(GridBase, {
      props: { items: ['1', '2', '3'], columns: 4 }
    })
    const style = (wrapper.element as HTMLElement).style
    expect(style.gridTemplateColumns).toContain('repeat(4,')
  })
})
