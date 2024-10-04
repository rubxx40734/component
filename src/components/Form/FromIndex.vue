<script setup lang="ts">
import type { DefaultPropsData } from './type';
import { defineComponent, ref } from 'vue';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import FormTextarea from './FormTextarea.vue';

const formData = ref<{
  [key: string]: string
}>({})
const emit = defineEmits(['update-value'])
withDefaults(defineProps<DefaultPropsData>(), {
  config: () => [],
})

const formType: Record<string, ReturnType<typeof defineComponent>> = {
  input: FormInput,
  select: FormSelect,
  textarea: FormTextarea
}


const getFormData = ({ key, value }: { key: string, value: string }) => {
  formData.value[key] = value
  emit('update-value', formData.value)
}
</script>

<template>
  <div class="border border-solid border-purple-600 p-8">
    <from>
      <p class="text-xl mb-5">表單: </p>
      <div class="flex flex-wrap justify-between">
        <div v-for="(item, i) in config" :key="i" class="mb-5"
          :class="[{ 'w-full': item.col === '12', 'w-[49%]': item.col === '6' }]">
          <component :is="formType[item.formType]" v-bind="item" class="border gap-4 w-full"
            @update-value="getFormData" />
        </div>
      </div>
    </from>
  </div>
</template>