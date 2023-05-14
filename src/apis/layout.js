import http from '@/utils/http.js'

// 获取菜单列表
export function getCategoryAPI () {
  return http({
    url: '/home/category/head',
  })
}