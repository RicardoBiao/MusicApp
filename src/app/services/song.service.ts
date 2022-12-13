/*
 * @Author: liweibiao
 * @Date: 2022-12-13 10:16:04
 * @LastEditTime: 2022-12-13 18:30:47
 * @LastEditors: liweibiao
 * @Description: song api
 */

import http from '../core/http'
import type PlaylistParams from '../stores/types/song'

/**
 * 根据关键字搜索歌曲
 * @param keywords 
 * @returns 
 */
export function searchSong(keywords: string) {
    return http.get('/music/search', { params: { keywords } })
}

/**
 * 获取音乐 url
 * @param id 音乐 id(可多个,用逗号隔开)
 * @param br 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * @returns 
 */
export function getSongUrl(id: string, br?: string) {
    return http.get('/music/song/url', { params: { id, br } })
}


/**
 * 歌单分类
 * @returns 
 */
export function getCatlist() {
    return http.get('/music/playlist/catlist')
}

/**
 * 热门歌单分类
 * @returns 
 */
export function getHotCatlist(params?: PlaylistParams) {
    return http.get('/music/playlist/hot', { params })
}

/**
 * 歌单 ( 网友精选碟 )
 * @returns 
 */
export function getTopPlayList(params?: PlaylistParams) {
    return http.get('/music/top/playlist', { params })
}


/**
 * 精品歌单标签列表
 * @returns 
 */
export function getHighqualityTags() {
    return http.get('/music/playlist/highquality/tags')
}
