export default {
  baseUrl: '/sys/site-metas',

  // 預設值(新增)
  index: {
    url: '',
    method: 'post',
    token: true,
  },
  // 取得列表
  getList: {
    url: '/list',
    method: 'get',
    token: true
  },
  // 單一資訊
  getView: {
    url: '/view',
    method: 'get',
    token: true
  }
}