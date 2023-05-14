import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  // 首页导航分类
  const categoryList = ref([])
  // action 获取导航数据
  const getCategory = async () => {
    const { result: res } = await getCategoryAPI()
    categoryList.value = res
  }

  return {
    categoryList,
    getCategory
  }
})
