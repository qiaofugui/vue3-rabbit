// 配置基础实例（统一接口配置）
/*
  1. 接口基地址
  2. 接口超时时间
  3. 请求拦截器
  4. 响应拦截器
*/
/*
  如果项目不同的业务模块需要不同的接口地址，可以创建多个实例
  const http1 = axios.create({ baseURL: 'url1' })
  const http2 = axios.create({ baseURL: 'url2' })
*/

import axios from 'axios'

import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

// 创建实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
)

// 响应拦截器
http.interceptors.response.use(
  res => res.data,
  err => {
    ElMessage({
      type: 'warning',
      message: err.response.data.message
    })
    return Promise.reject(err)
  }
)

export default http