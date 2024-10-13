<template>
  <button class="border border-solid border-primary-500 px-3 py-2" @click="getData">點擊我call api</button>
  <div class="mt-5">
    <div v-for="item in apiDataLists" :key="item.uid" class="border border-solid border-primary-500 mb-4">
      <h5>標題:{{ item.title }}</h5>
      <p>狀態:{{ item.status }}</p>
      <p>敘述:{{ item.description }}</p>
    </div>

    <div v-for="item in apiDataLists" :key="item.uid">
      <FromIndex :config="formConfig" :model-value="item" @update-value="getFormValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import request from '@/libs/request'
import FromIndex from '@/components/Form/FromIndex.vue';


const apiDataLists: any = ref({})
const formData = ref({})

const getData = async () => {
  const metasList = await request('/sys/site-metas/list', 'get', {
    currentPage: 1,
    pageSize: 10
  })
  console.log('metasList', metasList.result.data)
  apiDataLists.value = metasList.result.data


  if (apiDataLists.value.length) {
    formData.value = apiDataLists.value
  }
  console.log(formData.value)
}

const formConfig = [
  {
    formType: 'input',
    type: 'text',
    label: '標題',
    col: '12',
    uniKey: 'title',
    placeholder: '請輸入標題',
    rules: [],
    required: true
  },
  {
    formType: 'input',
    type: 'text',
    label: '狀態',
    col: '12',
    uniKey: 'status',
    placeholder: '請輸入狀態',
    rules: [],
    required: true
  },
  {
    formType: 'input',
    type: 'text',
    label: '敘述',
    col: '12',
    uniKey: 'description',
    placeholder: '請輸入敘述',
    rules: [],
    required: true
  },
  {
    formType: 'textarea',
    label: '意見表單',
    col: '12',
    uniKey: 'ogImage',
    placeholder: '請輸入敘述',
    rules: [],
    required: true
  }
]

const getFormValue = (v: any) => {
  console.log('準備送api茲料', v)
  formData.value = v
}
</script>