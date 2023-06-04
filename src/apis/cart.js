// 购物车相关接口
import http from '@/utils/http.js'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return http({
    method: 'POST',
    url: `/member/cart`,
    data: {
      skuId,
      count
    }
  })
}

// 获取最新的购物车列表
export const findNewCartListAPI = () => {
  return http({
    url: `/member/cart`
  })
}