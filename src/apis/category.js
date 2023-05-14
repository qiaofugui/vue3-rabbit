import http from '@/utils/http.js'

// 获取二级分类列表
export const getCategoryAPI = (id) => {
  return http({
    url: `/category`,
    params: {
      id
    }
  })
}