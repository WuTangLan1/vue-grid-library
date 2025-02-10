<!-- src\App.vue -->

<script setup lang="ts">
import { ref } from 'vue'
import GridBase from './components/Gridbase'

const items = ref([
  'Grid One',
  'Grid Two',
  'Grid Three',
  'Grid Four',
  'Grid Five',
  'Grid Six'
])
</script>

<template>
  <div class="app">
    <h1>Testing GridBase Component</h1>
    <GridBase :items="items" :columns="4" gap="2rem">
      <template #item="{ item }">
        <div class="my-grid-item">
          {{ item }}
        </div>
      </template>
    </GridBase>
  </div>
</template>

<style scoped lang="scss">
.app {
  margin: 2rem;
}

.my-grid-item {
  background-color: lightblue;
  border: 1px solid #0077be;
  text-align: center;
  padding: 10px;
  margin: 5px;
}
</style>
