<!--
 * @Author: liweibiao
 * @Date: 2022-11-15 10:42:32
 * @LastEditTime: 2023-07-25 16:29:22
 * @LastEditors: liweibiao
 * @Description:
-->

<script setup lang="ts">
import HelloWorld from '../../shared/components/HelloWorld.vue'
import { Button } from 'vant'
import { getQrCode, createQrCode, checkQrCode, getLoginStatus } from '../../services/user.service'
// import { getSongUrl } from '../../services/song.service'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
import { message } from 'ant-design-vue'
import { ref } from 'vue'
import { useEventBus, useTimeoutPoll } from '@vueuse/core'
import { song } from '../../core/bus/song'
import { Xplayer } from '../../core/utils/player'
import { promiseTimeout } from '@vueuse/shared'

const player = new Xplayer()

const songBus = useEventBus(song)

const { isActive, pause, resume } = useTimeoutPoll(fetchData, 1000)

songBus.on((e) => {
  console.warn('songBus===>', e)
  player.url = e.url
  player._play()
})

const userStore = useUserStore()
const backgroundUrl = ref('')
const { qrCode } = storeToRefs(userStore)
const test = () => {
  if (sessionStorage.getItem('cookie')) {
    getLoginStatus()
      .then(res => {
        userStore.setQrCode(res.data.data.profile.avatarUrl)
        backgroundUrl.value = res.data.data.profile.backgroundUrl
        console.log('backgroundUrl===>', backgroundUrl)
      })
      .catch(err => {
        console.error('getLoginStatus-err===>', err)
      })
  } else {
    // getSongUrl('347230')
    //   .then(res => {
    //     console.log('xxx-res===>', res)
    //     const song = res.data.data[0]
    //     songBus.emit({ id: song.id, name: '123', url: song.url })
    //   })
    //   .catch(err => {
    //     console.error('xxx-err===>', err)
    //   })
    getQrCode()
      .then(res => {
        console.log('getQrCode-res===>', res)
        const key = res.data.data.unikey
        userStore.setQrKey(key || null)
        createQrCode(key)
          .then(res => {
            console.log('createQrCode-res===>', res)
            userStore.setQrCode(res.data.data.qrimg || null)
            // 二维码创建成功，开始轮询
            resume()
          })
          .catch(err => {
            console.error('createQrCode-err===>', err)
          })
      })
      .catch(err => {
        console.error('getQrCode-err===>', err)
      })
  }
}

const CheckQrCode = () => {
  checkQrCode(userStore.qrKey)
    .then(res => {
      console.log('checkQrCode-res===>', res)
      return res
    })
    .catch(err => {
      console.error('checkQrCode-err===>', err)
      return err
    })
}

async function fetchData () {
  await promiseTimeout(1000)
  const result = await checkQrCode(userStore.qrKey)
  if (result.data.code === 803) {
    message.success('登录成功!')
    sessionStorage.setItem('cookie', result.data.cookie)
    pause()
    test()
  } else if (result.data.code === 800) {
    sessionStorage.setItem('cookie', '')
    // 二维码过期，刷新二维码
    message.info('二维码过期，刷新二维码')
    test()
  } else {
    resume()
  }
  console.log('isActive===>', isActive.value)
}
</script>

<template>
  <img v-if="backgroundUrl" :src="backgroundUrl" alt="" class="bg-img">
  <div>
    <a @click="test()" target="_blank">
      <img src="../../../../public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a target="_blank" @click="CheckQrCode()">
      <img v-if="!qrCode" src="../../../assets/vue.svg" class="logo vue" alt="Vue logo" />
      <img v-if="qrCode" :src="qrCode || ''"  class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <Button>HelloWorld</Button>
</template>

<style scoped>
.bg-img {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1111;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
