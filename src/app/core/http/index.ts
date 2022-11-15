/*
 * @Author: liweibiao
 * @Date: 2022-11-15 11:56:50
 * @LastEditTime: 2022-11-15 11:59:06
 * @LastEditors: liweibiao
 * @Description: 
 */
import axios from 'axios'

// 配置新建一个 axios 实例
const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL as any,
  })

export default http