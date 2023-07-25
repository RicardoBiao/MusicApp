/*
 * @Author: liweibiao
 * @Date: 2023-07-25 16:09:42
 * @LastEditTime: 2023-07-25 16:25:15
 * @LastEditors: liweibiao
 * @Description: 
 */

import { RouteRecordRaw } from "vue-router";



const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'root',
		redirect: '/home',
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/login/login.vue')
	},
]

export default routes
