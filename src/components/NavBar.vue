<script setup lang="ts">
const router = [
  {
    label: '首頁',
    router: '/'
  },
  {
    label: 'form組件',
    router: '/FromPage'
  },
  {
    label: 'restful封裝',
    router: '/RestfulPage'
  },
  {
    label: 'gql封裝',
    router: '/'
  },
  {
    label: '後續補上....',
    router: '/'
  },
]
</script>

<template>
  <div class="flex items-center justify-between">
    <RouterLink class="text-primary-600 font-bold" v-for="(item, i) in router" :key="i" :to="`${item.router}`">
      {{ item.label }}
    </RouterLink>
  </div>
</template>