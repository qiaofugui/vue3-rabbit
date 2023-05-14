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



// 测试接口函数
// import { getCategory } from '@/apis/testAPI.js'
// getCategory().then(res => console.log(res))