/*
 * @Author: liweibiao
 * @Date: 2022-12-15 18:12:34
 * @LastEditTime: 2022-12-15 18:46:38
 * @LastEditors: liweibiao
 * @Description: 封装播放器类
 */


import * as Tone from 'tone'
import { Player } from 'tone'


export class Xplayer {
    _playing: boolean
    _progress: number
    _enabled: boolean
    _repeatMode: 'off' | 'on' | 'one'
    _shuffle: boolean
    _reversed: boolean
    _volume: number
    _volumeBeforeMuted: number
    _personalFMLoading: boolean
    _personalFMNextLoading: boolean
    _list: any[]
    _current: number
    _shuffledList: any[]
    _shuffledCurrent: number
    _playlistSource: any
    _currentTrack: any
    _playNextList: any[]
    _player: Player
    _url: string


    constructor() {


        // 播放器状态
        this._url = '' // 当前歌曲url
        this._playing = false // 是否正在播放中
        this._progress = 0 // 当前播放歌曲的进度
        this._enabled = false // 是否启用Player
        this._repeatMode = 'off' // off | on | one
        this._shuffle = false // true | false
        this._reversed = false
        this._volume = 1 // 0 to 1
        this._volumeBeforeMuted = 1 // 用于保存静音前的音量
        this._personalFMLoading = false // 是否正在私人FM中加载新的track
        this._personalFMNextLoading = false // 是否正在缓存私人FM的下一首歌曲

        // 播放信息
        this._list = [] // 播放列表
        this._current = 0 // 当前播放歌曲在播放列表里的index
        this._shuffledList = [] // 被随机打乱的播放列表，随机播放模式下会使用此播放列表
        this._shuffledCurrent = 0 // 当前播放歌曲在随机列表里面的index
        this._playlistSource = { type: 'album', id: 123 } // 当前播放列表的信息
        this._currentTrack = { id: 86827685 } // 当前播放歌曲的详细信息
        this._playNextList = [] // 当这个list不为空时，会优先播放这个list的歌

        this._player = new Tone.Player(this._url).toDestination()
        this._player.autostart = true

    }

    set url(url: string) {
        this._url = url
    }

    get url() {
        return this._url
    }

    _play() {
        this._player.load(this._url).then(() => {
            this._player.start(0, 0, 0)
        })
    }

}