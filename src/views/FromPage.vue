<script setup lang="ts">
import FromIndex from '@/components/Form/FromIndex.vue';

const formConfig = [
  {
    formType: 'input',
    type: 'text',
    label: '姓名',
    col: '12',
    uniKey: 'name',
    placeholder: '請輸入姓名',
    rules: [],
    required: true
  },
  {
    formType: 'input',
    type: 'email',
    label: '信箱',
    col: '12',
    uniKey: 'email',
    placeholder: '請輸入信箱',
    rules: [],
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
    formType: 'select',
    options: [
      {
        lable: '台北',
        value: 'taipei'
      },
      {
        lable: '桃園',
        value: 'taoyuan'
      },
      {
        lable: '高雄',
        value: 'kaohsiung'
      },
    ],
    type: '',
    label: '選擇居住地',
    uniKey: 'local',
    rules: [],
    required: true
  },
  {
    formType: 'textarea',
    label: '意見表單',
    uniKey: 'meaasge',
    placeholder: '請輸入您的意見',
    rules: [],
    required: true
  },
]
</script>

<template>
  <h1 class="text-5xl mb-5">FormPage</h1>
  <FromIndex :config="formConfig" />
</template>