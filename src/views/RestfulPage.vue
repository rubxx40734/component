<template>
  <h2 class="mb-10 text-2xl">注意事項：此api是使用選物後台的 所以要先登入拿token並且要連公司的vpn 且port=5678</h2>
  <div class="mb-10">
    <p>login (graphql): {{ loginData }}</p>
    <FromIndex :config="loginConfig" @update-value="getLoginInfo"></FromIndex>
    <button class="border border-solid border-primary-500 px-3 py-2" @click="submitLogin">登入</button>

  </div>
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
import { useLoginAdmin } from '@/apis/login/index';


const { login } = useLoginAdmin()

const apiDataLists: any = ref({})
const formData = ref({})
const loginData = ref()

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
const loginConfig = [
  {
    formType: 'input',
    type: 'text',
    label: '帳號',
    col: '12',
    uniKey: 'account',
    placeholder: '請輸入帳號',
    rules: [],
    required: true
  },
  {
    formType: 'input',
    type: 'password',
    label: '密碼',
    col: '12',
    uniKey: 'pwd',
    placeholder: '請輸入密碼',
    rules: [],
    required: true,
  },
]

const getFormValue = (v: any) => {
  console.log('準備送api茲料', v)
  formData.value = v
}

const getLoginInfo = (v: any) => {
  loginData.value = v
}

const submitLogin = async () => {
  if (!loginData.value.account || !loginData.value.pwd) {
    alert('請輸入帳密')
    return
  }
  const loginResult = await login(loginData.value)
  console.log('loginResult', loginResult)
  if (loginResult) {
    localStorage.setItem('AUTH_TOKEN', loginResult.accessToken)
    alert('登入成功')
  }
}

</script>