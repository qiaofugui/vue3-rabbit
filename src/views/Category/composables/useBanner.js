// 封装 banner 轮播图相关的业务代码
import { onMounted, ref } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner () {
  const bannerList = ref([])
  const getBanner = async () => {
    const { result: res } = await getBannerAPI(2)
    bannerList.value = res
  }
  onMounted(() => {
    getBanner()
  })

  return {
    bannerList
  }
}