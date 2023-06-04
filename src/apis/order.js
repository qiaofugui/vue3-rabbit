import http from '@/utils/http.js'

// 获取订单列表
/*
  params: {
    orderState:0,
    page:1,
    pageSize:2
  }
*/
export const getUserOrderAPI = (params) => {
  return http({
    url: '/member/order',
    method: 'GET',
    params
  })
}