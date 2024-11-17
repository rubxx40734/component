import axios from 'axios'
import { showToast, showLoadingToast, closeToast, setToastDefaultOptions } from 'vant'
import 'vant/es/toast/style'
import httpLink from './apis/index'
console.log('httpLink', httpLink)
setToastDefaultOptions({ duration: 6000 })


let loadingCount: number = 0;

const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 20000,
})

// req攔截
service.interceptors.request.use((config: any) => {
  console.log('config', config)
  loadingCount++;
  const auth = localStorage.getItem('AUTH_TOKEN')
  // 拿後台選物api來用 所以固定給他token
  if (auth) {
    config.headers.Authorization = `Bearer ${auth}`;
    return config
  }
  return config
})

// res
service.interceptors.response.use((response) => {
  loadingCount--;
  if (loadingCount === 0) {
    closeToast()
  }
  return response;
},
  error => {
    closeToast();
    if (error && error.response) {
      console.log(error.response.data.error)
      switch (error.response.status) {
        case 400:
          error.message = error.response.data.error
          break
        case 401:
          error.message = error.response.data.messageCode
          break
        case 403:
          error.message = '拒絕訪問'
          break
        case 404:
          error.message = '路徑錯誤'
          break
        case 502:
          error.message = '伺服器錯誤'
          break
        default:
          error.message = `連接錯誤${error.response.status}`
      }
    }
    else {
      error.message = '伺服器請求超時'
    }
    showToast(error.message)
    throw error;
  }
)

export default async function (name: string, params = {}, reqConfig: { isFile?: boolean } = {}) {
  const { isFile } = reqConfig ?? false

  if (!name) {
    showToast('遺失路徑')
    return
  }
  const [controller, action = 'index'] = name.split('.')
  console.log(controller, action)

  const moduleSpecifier = httpLink[controller]
  const apiSpecifier = moduleSpecifier[action]

  if (!apiSpecifier) {
    showToast('路徑錯誤 請確認傳遞參數')
    return
  }
  // 設定表頭
  const config = {
    headers: {},
    params: {}, // 用于 GET 请求的查询参数
  }

  // 自動判斷是 JSON 還是 FormData
  const isFormData = params instanceof FormData || isFile;
  if (isFormData) {
    console.log('是文件')
    config.headers = {
      'Content-Type': 'multipart/form-data'
    }
  } else {
    config.headers = {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

  const apiUrl = `${import.meta.env.VITE_API_URL}${moduleSpecifier.baseUrl}${apiSpecifier?.url}`

  try {
    if (apiSpecifier.method.toLowerCase() === 'get') {
      // GET 请求使用 params 作为查询参数
      config.params = params;
      console.log('戴上的params', config)
      const res = await service.get(apiUrl, config);
      return res.data;

    } else {
      // 非 GET 请求，params 作为请求体传递
      const res = await service[apiSpecifier.method.toLowerCase()](apiUrl, params, config);
      return res.data;
    }
  } catch (error) {
    console.error('error', error);
    throw error;
  }
}