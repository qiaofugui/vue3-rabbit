import http from '@/utils/http.js'

// 获取订单详情
export const getCheckoutInfoAPI = () => {
  return http({
    url: `/member/order/pre`,
  })
}