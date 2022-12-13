/*
 * @Author: liweibiao
 * @Date: 2022-11-15 10:42:32
 * @LastEditTime: 2022-11-15 14:30:50
 * @LastEditors: liweibiao
 * @Description: 代理配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import proxy from './proxy.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4200,
    open: true,
    proxy,
  },
})
