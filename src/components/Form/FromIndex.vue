<script setup lang="ts">
import type { DefaultPropsData } from './type';
import { defineComponent } from 'vue';
import FormInput from './FormInput.vue';
import FormSelect from './FormSelect.vue';
import FormTextarea from './FormTextarea.vue';

const props = withDefaults(defineProps<DefaultPropsData>(), {
  config: () => [],
})

const formType: Record<string, ReturnType<typeof defineComponent>> = {
  input: FormInput,
  select: FormSelect,
  textarea: FormTextarea
}
console.log(props)
</script>

<template>
  <div class="border border-solid border-purple-600 p-8">
    <from>
      <p class="text-xl mb-5">表單: </p>
      <div class="flex flex-wrap">
        <div v-for="(item, i) in config" :key="i" class="mb-5"
          :class="[{ 'w-full': item.col === '12', 'w-1/2': item.col === '6' }]">
          <component :is="formType[item.formType]" v-bind="item" class="border gap-4 w-full" />
        </div>
      </div>
    </from>
  </div>
</template>