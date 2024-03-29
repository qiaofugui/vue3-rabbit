// 用户数据相关

import { ref } from 'vue'
import { defineStore } from 'pinia'

import { loginAPI } from '@/apis/user.js'

import { useCartStore } from './cartStore.js'

import { mergeCartAPI } from '@/apis/cart.js'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()

  // 1. 定义管理数据 state
  const userInfo = ref({})

  // 2. 定义回去接口函数的 action
  const getUserInfo = async ({ account, password }) => {
    // 调用接口
    const { result: res } = await loginAPI({ account, password })
    userInfo.value = res

    // 合并购物车
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    // 获取购物车列表
    cartStore.updateNewCartList()
  }

  const clearUserInfo = () => {
    userInfo.value = {}
    // 清除购物车数据
    cartStore.clearCart()
  }

  // 3. 以对象的形式返回
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  // 定义数据状态管理的持久化配置
  persist: true,
})
