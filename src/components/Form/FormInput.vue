<script setup lang="ts">
import { type DefaultInput } from './type'
import { watch, ref } from 'vue'
import request from '@/libs/request'

const props = withDefaults(defineProps<DefaultInput>(), {
  label: '',
  type: '',
  col: '12',
  uniKey: '',
  placeholder: '',
  rules: [],
  required: true
})

const modalValue = ref<string | FileList | null>('')
const errorMessage = ref('')
const uploadImage = ref('')

const emit = defineEmits(['update-value'])

watch(modalValue, (v) => {
  if (props.type === 'file' && v instanceof FileList) {
    emit('update-value', {
      key: props.uniKey,
      value: v
    })
  } else {
    validateInput(v as string)
    emit('update-value', {
      key: props.uniKey,
      value: v
    })
  }


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


const methodUpdate = async (v: any) => {
  const uploadFile = v.target.files[0];

  if (uploadFile) {
    const formData = new FormData(); // 創建formData對象
    formData.append('useFor', 'test');
    formData.append('file', uploadFile); // 將文件添加到formData

    const uploadData = await request('/sys/uploads/single', 'post', formData, {
      isFile: true
    })
    console.log('uploadData', uploadData)
    if (uploadData.status) {
      uploadImage.value = `${import.meta.env.VITE_API_URL}${uploadData.result.sourcePath}`
    }

  }
}
</script>

<template>
  <!-- <input :type="type" :placeholder="placeholder" v-model="modalValue" class="w-full p-2 border border-primary-300"> -->

  <!-- 如果是普通输入框 -->
  <input v-if="type !== 'file'" :type="type" :placeholder="placeholder" v-model="modalValue"
    class="w-full p-2 border border-primary-300">

  <!-- 如果是文件输入框 -->
  <input v-else type="file" @input="methodUpdate" class="w-full p-2 border border-primary-300">
  <img v-if="uploadImage && type === 'file'" :src="uploadImage">
  {{ uploadImage }}

  <p v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage }}</p>
</template>