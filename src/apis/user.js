// 封装所有和用户相关的接口请求函数
import http from '@/utils/http.js'

export const loginAPI = ({ account, password }) => {
  return http({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}