// src\components\GridBase\GridBase.spec.ts

import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import GridBase from './GridBase.vue';

describe('GridBase.vue', () => {
  it('renders items properly', () => {
    const items = ['Item A', 'Item B', 'Item C'];
    const wrapper = mount(GridBase, {
      props: { items }
    });

    expect(wrapper.findAll('.grid-item').length).toBe(3);
  });

  it('applies column props correctly', async () => {
    const wrapper = mount(GridBase, {
      props: { items: ['1', '2', '3'], columns: 4 }
    });

    const style = getComputedStyle(wrapper.element);
    expect(style.gridTemplateColumns).toContain('repeat(4,');
  });

  it('handles empty state gracefully', () => {
    const wrapper = mount(GridBase, { props: { items: [] } });

    expect(wrapper.findAll('.grid-item').length).toBe(0);
  });

  it('renders slot content properly', () => {
    const wrapper = mount(GridBase, {
      props: { items: ['A', 'B', 'C'] },
      slots: {
        item: '<div class="custom-item">Custom</div>'
      }
    });

    expect(wrapper.findAll('.custom-item').length).toBe(3);
  });
});
