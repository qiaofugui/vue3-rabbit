// 封装分类数据业务代码
import { getCategoryAPI } from '@/apis/category.js'
import { onMounted, ref, /* watch */ } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory () {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const { result: res } = await getCategoryAPI(id)
    categoryData.value = res
  }
  onMounted(() => {
    getCategory()
  })
  // watch(
  //   () => route.params.id,
  //   () => {
  //     getCategory()
  //   })
  // 路由参数变化的时候，重新获取分类数据
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}