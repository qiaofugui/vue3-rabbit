// 配置基础实例（统一接口配置）
/*
  1. 接口基地址
  2. 接口超时时间
  3. 请求拦截器
  4. 响应拦截器
*/

import axios from 'axios'

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
  err => Promise.reject(err)
)

export default http