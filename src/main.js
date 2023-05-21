// import './assets/main.css'
// 初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives'
app.use(lazyPlugin)

// 引入全局组件
import { componentPlugin } from '@/components/index.js'
app.use(componentPlugin)

// 数据状态管理
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// 测试接口函数
// import { getCategory } from '@/apis/testAPI.js'
// getCategory().then(res => console.log(res))