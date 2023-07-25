import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";

/*
 * @Author: liweibiao
 * @Date: 2023-07-25 16:13:16
 * @LastEditTime: 2023-07-25 16:24:15
 * @LastEditors: liweibiao
 * @Description: 
 */
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router