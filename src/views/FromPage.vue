<script setup lang="ts">
import FromIndex from '@/components/Form/FromIndex.vue';
import { ref } from 'vue'
const formData = ref({})

const formConfig = [
  {
    formType: 'input',
    type: 'text',
    label: '姓名',
    col: '12',
    uniKey: 'name',
    placeholder: '請輸入姓名',
    rules: ['^[a-zA-Z\\s]+$'],
    required: true
  },
  {
    formType: 'input',
    type: 'email',
    label: '信箱',
    col: '12',
    uniKey: 'email',
    placeholder: '請輸入信箱',
    rules: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/],
    required: true
  },
  {
    formType: 'input',
    type: 'password',
    label: '密碼',
    col: '6',
    uniKey: 'pwd',
    placeholder: '請輸入密碼',
    rules: [],
    required: true
  },
  {
    formType: 'input',
    type: 'password',
    label: '確認密碼',
    col: '6',
    uniKey: 'checkPwd',
    placeholder: '再輸入一次密碼',
    rules: [],
    required: true
  },
  {
    formType: 'input',
    type: 'file',
    label: '上傳大頭照',
    col: '6',
    uniKey: 'image',
    placeholder: '',
    rules: [],
    required: true
  },
  {
    formType: 'select',
    options: [
      {
        label: '台北',
        value: 'taipei'
      },
      {
        label: '桃園',
        value: 'taoyuan'
      },
      {
        label: '高雄',
        value: 'kaohsiung'
      },
    ],
    type: '',
    col: '6',
    label: '選擇居住地',
    uniKey: 'local',
    rules: [],
    required: true
  },
  {
    formType: 'textarea',
    label: '意見表單',
    uniKey: 'message',
    col: '12',
    placeholder: '請輸入您的意見',
    rules: [],
    required: true
  },
]

const getFormValue = (v: any) => {
  console.log('準備送api茲料', v)
  formData.value = v
}
</script>

<template>
  <h1 class="text-5xl mb-5">FormPage</h1>
  <FromIndex :config="formConfig" @update-value="getFormValue" />
</template>