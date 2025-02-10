<!-- src\components\Gridbase\GridBase.vue -->
<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

interface GridBaseProps {
  items: any[]
  columns?: number
  gap?: string
  responsive?: boolean
}

const props = withDefaults(defineProps<GridBaseProps>(), {
  items: [] as any[],     
  columns: 3,
  gap: '1rem',
  responsive: true
})

const gridStyle = computed(() => {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))`,
    gap: props.gap
  }
})
</script>


<template>
  <div class="grid-container" :style="gridStyle">
    <slot :items="props.items">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="grid-item"
      >
        <slot name="item" :item="item">
          {{ item }}
        </slot>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.grid-container {
  width: 100%;
  transition: grid-template-columns 0.3s ease;
}

.grid-item {
  background-color: var(--grid-item-bg, #ffffff);
  border-radius: var(--grid-item-radius, 6px);
  padding: var(--grid-item-padding, 1rem);
  box-shadow: var(--grid-item-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }
}
</style>
