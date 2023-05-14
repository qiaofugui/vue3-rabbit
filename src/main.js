// import './assets/main.css'
// 初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 引入懒加载指令插件并注册
import { lazyPlugin } from '@/directives'
app.use(lazyPlugin)

// 测试接口函数
// import { getCategory } from '@/apis/testAPI.js'
// getCategory().then(res => console.log(res))