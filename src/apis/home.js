import http from '@/utils/http.js'

/**
 * @description: 获取轮播图列表
 * @param {*} distributionSite （投放位置，1为首页，2为分类商品页） 默认是1
 * @return {*} Promise
 */
export function getBannerAPI (distributionSite = 1) {
  return http({
    url: `/home/banner?distributionSite=${distributionSite}`,
  })
}

// 获取新鲜好物列表
export function getNewAPI (limit = 4) {
  return http({
    url: `/home/new?limit=${limit}`,
  })
}

// 获取人气推荐列表
export function getHotAPI () {
  return http({
    url: `/home/hot`,
  })
}

// 获取所有商品
export const getGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}