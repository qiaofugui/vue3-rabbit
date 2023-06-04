import http from '@/utils/http.js'

// 获取支付详情
export const getOrderAPI = (id) => {
  return http({
    url: `/member/order/${id}`,
  })
}
