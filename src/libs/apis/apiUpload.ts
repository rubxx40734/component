export default {
  baseUrl: '/sys/uploads',

  // 單檔
  single: {
    url: '/single',
    method: 'post',
    token: true
  },

  // 多檔
  multiple: {
    url: '/multiple',
    method: 'post',
    token: true
  }
}