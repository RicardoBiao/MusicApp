/*
 * @Author: liweibiao
 * @Date: 2022-12-12 18:21:43
 * @LastEditTime: 2022-12-13 13:53:05
 * @LastEditors: liweibiao
 * @Description: user store
 */
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        qrKey: '' as string,
        qrCode: null as string | null,
    }),
    actions: {
        /**
         * 设置登录二维码key
         * @param key 
         */
        setQrKey(key: string) {
            this.qrKey = key
        },

        /**
         * 设置登录二维码
         * @param code
         */
        setQrCode(code: string) {
            this.qrCode = code
        }
    }
})