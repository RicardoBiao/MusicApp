/*
 * @Author: liweibiao
 * @Date: 2022-11-15 14:38:46
 * @LastEditTime: 2022-11-15 14:54:18
 * @LastEditors: liweibiao
 * @Description: 
 */

const music = 'http://47.98.245.29:3000'

const proxy = {
  '/music': {
    target: music,
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/music/, '')
  },
}

export default proxy
