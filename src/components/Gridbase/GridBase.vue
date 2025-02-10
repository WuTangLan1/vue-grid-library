<!-- src\components\GridBase\GridBase.vue -->
<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

interface GridBaseProps {
  items: any[]
  columns?: number
  gap?: string
  responsive?: boolean
}

const props = withDefaults(defineProps<GridBaseProps>(), {
  items: () => [],   
  columns: 3,
  gap: '1rem',
  responsive: true
})

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: props.responsive 
    ? `repeat(auto-fit, minmax(100px, 1fr))` 
    : `repeat(${props.columns}, minmax(0, 1fr))`,
  gap: props.gap
}));

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
  transition: all 0.3s ease-in-out;
}

.grid-item {
  background-color: var(--grid-item-bg, #f8f9fa);
  border-radius: var(--grid-item-radius, 8px);
  padding: var(--grid-item-padding, 1rem);
  box-shadow: var(--grid-item-shadow, 0 3px 6px rgba(0, 0, 0, 0.15));
  text-align: center;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #007bff;
    color: white;
  }
}

</style>
