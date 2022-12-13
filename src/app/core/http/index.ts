/*
 * @Author: liweibiao
 * @Date: 2022-11-15 11:56:50
 * @LastEditTime: 2022-12-13 15:20:06
 * @LastEditors: liweibiao
 * @Description: 
 */
import axios from 'axios'
import interceptors from './interceptors'

// 配置新建一个 axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL as any,
})

// 设置拦截
interceptors(http)

export default http