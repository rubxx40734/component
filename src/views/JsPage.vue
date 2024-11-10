<template>
  <div class="mb-16">
    <p class="text-3xl font-bold">一些封裝練習 => Promise</p>
  </div>
  <div class="mb-16">
    <p class="text-3xl font-bold mb-4">Vue一些用法</p>
    <p>組件外Title: {{ title }}</p>
    <!-- 外面就不用寫emit了 -->
    <ChildrenCom v-model:component-title="title"></ChildrenCom>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildrenCom from '@/components/ChildrenCom.vue';

const title = ref('妳好 這是範例')

function promiseFn(num: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num) {
        resolve('成功')
      } else {
        reject('失敗')
      }
    }, 100)
  })
}
// 錯誤捕捉 待釐清
const catchError = (asyncFn) => {
  return (n: number) => {
    console.log('看看參數', n)
    return asyncFn(n).catch((err: unknown) => {
      console.log('錯誤捕捉', err)
    })
  }
}

const getData = async (n: number) => {
  const res = await promiseFn(n)
  console.log(res)
}

const catchFn = catchError(getData)
catchFn(1)
catchFn(0)
</script>