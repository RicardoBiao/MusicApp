/*
 * @Author: liweibiao
 * @Date: 2022-12-13 15:05:38
 * @LastEditTime: 2022-12-13 16:31:16
 * @LastEditors: liweibiao
 * @Description: 请求/响应拦截器
 */
import { AxiosInstance, AxiosResponse } from "axios"

export default function interceptors(http: AxiosInstance) {

    // 添加请求拦截器
    http.interceptors.request.use(
        config => {
            console.warn('config===>', config)
            if ((config.url && AddTimeUrls.includes(config.url)) || config.method === 'post') {
                config.params = {
                    _t: new Date().getTime(),
                    ...config.params
                }
            }
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    // 添加响应拦截器
    http.interceptors.response.use(handleSuccess, handleError)
}

export function handleSuccess(response: AxiosResponse<any, any>) {
    // const data = response.data
    return response
}

export function handleError(error: any) {
    return Promise.reject(error)
}

const AddTimeUrls = [
    '/music/login/qr/key',
    '/music/login/qr/create',
    '/music/login/qr/check',
]