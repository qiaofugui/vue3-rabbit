import http from '@/utils/http.js'

export const getDetail = (id) => {
  return http({
    url: `/goods`,
    params: {
      id
    }
  })
}