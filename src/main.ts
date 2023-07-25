/*
 * @Author: liweibiao
 * @Date: 2022-11-15 10:42:32
 * @LastEditTime: 2023-07-25 16:15:45
 * @LastEditors: liweibiao
 * @Description: 
 */

import { createApp } from 'vue'
import './style/style.scss'
import App from './app/App.vue'
import { createPinia } from 'pinia'
import router from './app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

