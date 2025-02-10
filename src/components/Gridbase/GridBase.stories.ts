// src\components\Gridbase\GridBase.stories.ts

import type { Meta, StoryObj } from '@storybook/vue3'
import GridBase from './GridBase.vue'

const meta: Meta<typeof GridBase> = {
  title: 'Components/GridBase',
  component: GridBase,
  argTypes: {
    items: { control: 'object' },
    columns: { control: 'number' },
    gap: { control: 'text' },
    responsive: { control: 'boolean' },
  },
  args: {
    items: ['Storybook A', 'Storybook B', 'Storybook C'],
    columns: 3,
    gap: '1rem',
    responsive: true
  }
}

export default meta
type Story = StoryObj<typeof GridBase>

export const Default: Story = {}
