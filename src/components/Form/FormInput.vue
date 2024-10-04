<script setup lang="ts">
import { type DefaultInput } from './type'
import { watch, ref } from 'vue'
import axios from 'axios'
console.log(axios)
console.log('env', import.meta.env.VITE_API_URL)
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
const methodUpdate = async (v) => {
  console.log(v)
  const uploadFile = v.target.files[0];

  if (uploadFile) {
    const formData = new FormData(); // 创建FormData对象
    formData.append('useFor', 'test');
    formData.append('file', uploadFile); // 将文件添加到formData

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/sys/uploads/single`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 设置为文件上传格式
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJoblU3cmxjZXhyZVhZdFNaMWQtbDEiLCJpYXQiOjE3Mjc5NTA2NzQsImV4cCI6MTcyODU1NTQ3NH0.d9wQBeeLHi7d0aGY_sfzpP9WK_T2HlLOpwRG4f2mu7U'
        },
        withCredentials: true,
      });
      console.log('上传成功:', response.data);
    } catch (error) {
      console.error('文件上传失败:', error);
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

  <p v-if="errorMessage" class="text-red-500 text-xs mt-1">{{ errorMessage }}</p>
</template>