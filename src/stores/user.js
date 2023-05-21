// 用户数据相关

import { ref } from 'vue'
import { defineStore } from 'pinia'

import { loginAPI } from '@/apis/user.js'

export const useUserStore = defineStore('user', () => {
  // 1. 定义管理数据 state
  const userInfo = ref({})

  // 2. 定义回去接口函数的 action
  const getUserInfo = async ({ account, password }) => {
    // 调用接口
    const { result: res } = await loginAPI({ account, password })
    userInfo.value = res
  }

  // 退出登录，清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
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
