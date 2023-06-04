// 购物车模块
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { computed } from 'vue';

// 拿到 user 模块的数据
import { useUserStore } from './userStore'

// 需要的接口
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart.js'

export const useCartStore = defineStore('cart', () => {
  // 拿到 user 模块的数据
  const userStore = useUserStore()
  // 获取 token 判断是否登录
  const isLogin = computed(() => userStore.userInfo.token)

  // 1. 定义 state
  const cartList = ref([])

  // 获取最新购物车列表
  const updateNewCartList = async () => {
    // 获取最新的购物车列表
    const res = await findNewCartListAPI()

    // 用接口购物车列表覆盖本地购物车列表
    cartList.value = res.result
  }

  // 2. 定义 action - addCart
  const addCart = async (goods) => {
    if (isLogin.value) {
      //  登录之后的加入购物车
      // 调用加入购物车接口
      const { skuId, count } = goods
      // 加入到购物车
      await insertCartAPI({ skuId, count })
      // 获取最新的购物车列表
      updateNewCartList()
    } else {
      // 本地购物车

      // 添加购物车操作
      // 添加过 count + 1
      // 没添加过 push
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      if (item) {
        item.count += 1
      } else {
        cartList.value.push(goods)
      }
    }
  }

  // 删除购物车
  const delCart = async (skuId) => {
    if (isLogin.value) {
      // 接口删除购物车
      await delCartAPI([skuId])
      // 获取最新的购物车列表
      updateNewCartList()
    } else {
      // 思路1：找到要删除项的下标 - splice
      const index = cartList.value.findIndex(item => item.skuId === skuId)
      if (index !== -1) {
        cartList.value.splice(index, 1)
      }

      // 思路2：过滤方法 - filter
    }
  }

  // 计算属性
  // 总商品数
  const allCount = computed(() => cartList.value.reduce((count, item) => count + item.count, 0))

  // 总价格
  const allPrice = computed(() => cartList.value.reduce((total, item) => total + (item.count * (item.price * 1000)) / 1000, 0))

  // 单选功能
  const singleCheck = (selected, skuId) => {
    // 通过 skuId 找到对应的商品
    const item = cartList.value.find(item => item.skuId === skuId)
    if (item) {
      item.selected = selected
    }
  }
  // 全选功能
  const allCheck = (selected) => {
    cartList.value.forEach(item => item.selected = selected)
  }
  // 是否全选
  const isAll = computed(() => cartList.value.length > 0 && cartList.value.every(item => item.selected))

  // 已选择数量
  const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((count, item) => count + item.count, 0))
  // 已选择商品合计
  const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((total, item) => total + (item.count * (item.price * 1000)) / 1000, 0))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice
  }
}, {
  // 持久化
  persist: true
})
