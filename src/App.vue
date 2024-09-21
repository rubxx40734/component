<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
import BlankLayout from './layouts/BlankLayout.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';


const route = useRoute()
const layout = computed(() => {
  return route.meta.layout === 'default' ? DefaultLayout : BlankLayout
})


</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
