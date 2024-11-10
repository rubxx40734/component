<template>
  <p>組件內ComponentTitle: {{ componentTitle }}</p>
  <q-btn class="primary" icon="add" @click="changeData">
    動態變更內層資料
  </q-btn>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { QBtn } from 'quasar';

const changeData = () => {
  console.log(props.componentTitle)
  emit('update:componentTitle', '來變更外層資料')
}

const emit = defineEmits(['update:componentTitle'])
// 菜雞寫法
// const props = defineProps({
//   componentTitlt: {
//     type: String,
//     default: ''
//   }
// })
// 進階寫法
interface PropsType {
  componentTitle: string
}
const props = withDefaults(defineProps<PropsType>(), {
  componentTitle: ''
})
</script>