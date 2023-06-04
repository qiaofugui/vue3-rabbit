import http from '@/utils/http.js'

// 获取订单详情
export const getCheckoutInfoAPI = () => {
  return http({
    url: `/member/order/pre`,
  })
}

// 创建订单
export const createOrderAPI = (data) => {
  return http({
    method: 'POST',
    url: `/member/order`,
    data
  })
}