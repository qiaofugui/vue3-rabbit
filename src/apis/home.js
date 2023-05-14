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
