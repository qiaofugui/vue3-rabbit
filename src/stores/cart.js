// 购物车模块
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  // 1. 定义 state
  const cartList = ref([])

  // 2. 定义 action - addCart
  const addCart = (goods) => {
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

  // 删除购物车
  const delCart = (skuId) => {
    // 思路1：找到要删除项的下标 - splice
    const index = cartList.value.findIndex(item => item.skuId === skuId)
    if (index !== -1) {
      cartList.value.splice(index, 1)
    }

    // 思路2：过滤方法 - filter
  }

  // 计算属性
  // 总商品数
  const allCount = computed(() => cartList.value.reduce((count, item) => count + item.count, 0))

  // 总价格
  const allPrice = computed(() => cartList.value.reduce((total, item) => total + (item.count * (item.price * 1000)) / 1000, 0))

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice
  }
}, {
  // 持久化
  persist: true
})
