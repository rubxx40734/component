<script setup lang="ts">
import { type DefaultInput } from './type'
import { watch, ref } from 'vue'

const props = withDefaults(defineProps<DefaultInput>(), {
  label: '',
  type: '',
  col: '6',
  uniKey: '',
  rules: [],
  required: true,
  options: () => []
})

const modalValue = ref<{
  label: string
  value: string | number
}>({ label: props.label, value: '' })

const errorMessage = ref('')
const optionsShow = ref(false)

const emit = defineEmits(['update-value'])

watch(modalValue, (v) => {
  validateInput(v.value)
  emit('update-value', {
    key: props.uniKey,
    value: v
  })

})

const validateInput = (value: string | number) => {
  errorMessage.value = ''

  if (props.required && !value) {
    errorMessage.value = `${props.label} 為必填`
    return
  }


  if (props.rules?.length) {
    for (let rule of props.rules) {
      if (!new RegExp(rule).test(value as string)) {
        errorMessage.value = `${props.label} 格式不正确`
        break
      }
    }
  }
}
const chooseLocal = (v: { label: string; value: string | number }) => {
  modalValue.value = v
  optionsShow.value = false
}
</script>

<template>
  <div class="relative">
    <div class="w-full p-2 flex justify-between" @click="optionsShow = !optionsShow">
      <p>{{ modalValue.label }}</p>
      <p> V </p>
    </div>

    <div class="absolute w-full z-10 bg-slate-50 mt-2" v-if="optionsShow">
      <div v-for="item in options" :key="item.value" class="p-2 hover:bg-blue-200" @click="chooseLocal(item)">
        <p>{{ item.label }}</p>
      </div>
    </div>
  </div>
</template>