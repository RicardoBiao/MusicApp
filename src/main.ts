/*
 * @Author: liweibiao
 * @Date: 2022-11-15 10:42:32
 * @LastEditTime: 2022-11-15 11:49:37
 * @LastEditors: liweibiao
 * @Description: 
 */

import { createApp } from 'vue'
import './style/style.scss'
import App from './app/App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')
