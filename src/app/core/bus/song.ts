/*
 * @Author: liweibiao
 * @Date: 2022-12-14 15:22:35
 * @LastEditTime: 2022-12-14 15:49:11
 * @LastEditors: liweibiao
 * @Description: song event bus
 */

import type { EventBusKey } from '@vueuse/core'
import type { Song } from '../../stores/types/song'


export const song: EventBusKey<Song> = Symbol('songBus')