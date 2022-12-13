/*
 * @Author: liweibiao
 * @Date: 2022-11-15 14:18:18
 * @LastEditTime: 2022-12-13 18:30:08
 * @LastEditors: liweibiao
 * @Description: 用户相关API
 */

import http from '../core/http'

/**
 * 获取登录状态
 * @returns 
 */
export function getLoginStatus() {
    return http.get('/music/login/status')
}

/**
 * 获取qrCode-key
 * @returns 
 */
export function getQrCode() {
    return http.get('/music/login/qr/key')
}

/**
 * 根据qrKey创建二维码
 * @param key qrKey
 * @returns 
 */
export function createQrCode(key: string) {
    return http.get('/music/login/qr/create', { params: { key, qrimg: true } })
}

/**
 * 二维码检测扫码状态接口
 * @param key 
 * @returns 
 */
export function checkQrCode(key: string) {
    return http.get('/music/login/qr/check', { params: { key } })
}

/**
 * 获取用户详情
 * @param userId 用户id
 * @returns 
 */
export function getUserDetail(userId: string) {
    return http.get('/music/user/detail', { params: { userId } })
}


