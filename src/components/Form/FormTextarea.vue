<script setup lang="ts">
import { type DefaultInput } from './type'
import { watch, ref } from 'vue'

const props = withDefaults(defineProps<DefaultInput>(), {
  label: '',
  type: '',
  col: '12',
  uniKey: '',
  placeholder: '',
  rules: [],
  required: true,
  modelValue: {}
})

const localValue = ref(props.modelValue[props.uniKey] || '')  // 與 props 同步

// const modalValue = ref('')
const errorMessage = ref('')

const emit = defineEmits(['update-value'])

watch(localValue, (v) => {
  validateInput(v)
  emit('update-value', {
    key: props.uniKey,
    value: v
  })

})

const validateInput = (value: string) => {
  errorMessage.value = ''

  if (props.required && !value) {
    errorMessage.value = `${props.label} 為必填`
    return
  }


  if (props.rules?.length) {
    for (let rule of props.rules) {
      if (!new RegExp(rule).test(value)) {
        errorMessage.value = `${props.label} 格式不正确`
        break
      }
    }
  }
}

</script>

<template>
  <textarea :placeholder="placeholder" v-model="localValue" class="w-full p-2 border border-primary-300"></textarea>

  <p v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage }}</p>
</template>