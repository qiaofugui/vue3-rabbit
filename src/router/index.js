// createRouter：创建 router 路由实例
// createWebHistory：创建 history 模式的路由
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import MemberInfo from '@/views/Member/components/UserInfo.vue'
import MemberOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path 和 component 对于关系的位置
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'category/:id',
          name: 'Category',
          component: Category
        },
        {
          path: 'category/sub/:id',
          name: 'Subcategory',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: Detail
        },
        {
          path: 'cartlist',
          name: 'CartList',
          component: CartList
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: Checkout
        },
        {
          path: 'pay',
          name: 'Pay',
          component: Pay
        },
        {
          path: 'paycallback',
          name: 'PayBack',
          component: PayBack
        },
        {
          path: 'member',
          name: 'Member',
          component: Member,
          redirect: '/member/user',
          children: [
            {
              path: 'user',
              name: 'MemberInfo',
              component: MemberInfo
            },
            {
              path: 'order',
              name: 'MemberOrder',
              component: MemberOrder
            }
          ]
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ],
  // 路由行为配置项 路由滚动行为定制
  scrollBehavior () {
    return {
      top: 0
    }
  }

})

export default router
