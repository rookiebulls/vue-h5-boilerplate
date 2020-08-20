import axios from 'axios'
import baseURL from './config'

const http = axios.create({
  baseURL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
})

// auth function
const getToken = () => {
  return 'whateveritishaha3950325#$#%'
}

const Toast = msg => {
  console.log(msg)
}

http.interceptors.request.use(
  config => {
    config.headers.token = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器

http.interceptors.response.use(
  function (response) {
    const resp = response.data

    const statusCode = response.statusCode
    if (statusCode >= 400 && statusCode < 600) {
      Toast('请求错误')
      return Promise.reject(resp)
    }
    return resp
  },
  function (error) {
    const { message } = error
    if (message === 'Network Error') {
      Toast('网络错误')
    } else if (message.includes('timeout')) {
      Toast('网络不佳')
    } else {
      Toast({ message, duration: 3000 })
    }
    return Promise.reject(error)
  }
)

export default http
