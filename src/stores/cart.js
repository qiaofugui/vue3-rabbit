// 购物车模块
import { defineStore } from 'pinia';
import { ref } from 'vue';

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

  return {
    cartList,
    addCart
  }
}, {
  // 持久化
  persist: true
})
