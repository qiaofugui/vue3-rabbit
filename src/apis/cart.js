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

/**
 * @description: 删除购物车
 * @param {*} ids 要删除的购物车项的 skuId 数组
 * @return {*}
 */
export const delCartAPI = (ids) => {
  return http({
    method: 'DELETE',
    url: `/member/cart`,
    data: {
      ids
    }
  })
}

// 合并购物车
export const mergeCartAPI = (data) => {
  return http({
    method: 'POST',
    url: `/member/cart/merge`,
    data
  })
 }