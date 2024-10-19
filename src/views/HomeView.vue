<script setup lang="ts">
const data = [
  {
    class: '甲',
    studentsNum: '12',
    studentsData: [
      { id: 1, name: '陳小名', age: 24, interest: ['打球', '聽音樂'] },
      { id: 2, name: '王大偉', age: 24, interest: ['聽音樂', '唱歌', '看書'] },
      { id: 3, name: '許世斌', age: 23, interest: ['唱歌', '聽音樂'] },
      { id: 4, name: '吳添財', age: 24, interest: ['打球', '聽音樂'] },
      { id: 5, name: '曾無傭', age: 24, interest: ['打球'] },
      { id: 6, name: '陳漢霖', age: 24, interest: ['喝酒', '唱歌', '看書'] },
      { id: 7, name: '楊世博', age: 30, interest: ['聽音樂', '看書'] },
      { id: 8, name: '楊漢鎮', age: 30, interest: ['看書', '唱歌'] },
      { id: 9, name: '楊采媗', age: 30, interest: ['打球', '唱歌'] },
      { id: 10, name: '詹天明', age: 30, interest: ['唱歌', '看書'] },
      { id: 11, name: '楊是崁', age: 30, interest: ['看書'] },
      { id: 12, name: '楊安浪', age: 24, interest: ['聽音樂', '唱歌', '看書'] }
    ]
  },
  {
    class: '乙',
    studentsNum: '5',
    studentsData: [
      { id: 1, name: '蔡申明', age: 50, interest: ['打球', '唱歌', '看書'] },
      { id: 2, name: '蔡文旯', age: 51, interest: ['唱歌', '看書'] },
      { id: 3, name: '陳炘採', age: 58, interest: ['打球'] },
      { id: 4, name: '昂天次', age: 56, interest: ['聽音樂', '唱歌', '看書'] },
      { id: 5, name: '王銘感', age: 58, interest: ['聽音樂'] }
    ]
  },
  {
    class: '丙',
    studentsNum: '6',
    studentsData: [
      { id: 1, name: '林赤子', age: 18, interest: ['唱歌'] },
      { id: 2, name: '林小優', age: 24, interest: ['聽音樂', '唱歌', '看書'] },
      { id: 3, name: '陳問鼎', age: 23, interest: ['打球', '唱歌', '看書'] },
      { id: 4, name: '陳字字', age: 25, interest: ['打球', '唱歌', '聽音樂'] },
      { id: 5, name: '陳余文', age: 66, interest: ['聽音樂', '唱歌', '看書'] },
      { id: 6, name: '楊蔡文', age: 17, interest: ['打球', '聽音樂'] }
    ]
  }

]
// 請將甲班的同學名子整理出來放在一個陣列
// 例如: ['林小明', '詹雲逞']
// const test = data[0].studentsData.map((item) => {
//   return item.name
// })
// console.log(test)
const test = data[0].studentsData.reduce((acc, cur) => {
  acc.push(cur.name)
  return acc
}, [])
console.log(test)

</script>

<template>
  <main class="">
    <h1 class="text-5xl mb-5">Home Page</h1>
    <p class="text-5xl">點擊路由開始</p>
    <img class="mt-10 mx-auto" src="../assets/下載.jpeg" alt="">
  </main>
</template>
