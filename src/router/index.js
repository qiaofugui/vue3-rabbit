// createRouter：创建 router 路由实例
// createWebHistory：创建 history 模式的路由
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

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
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/category',
          name: 'category',
          component: Category
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
