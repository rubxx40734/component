<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  col: {
    type: String,
    default: ''
  },
  uniKey: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  rules: {
    type: [],
    default: () => []
  },
  required: {
    type: Boolean,
    default: true
  },
})
console.log('內層', props)
</script>

<template>
  <input :type="type" :placeholder="placeholder">
</template>