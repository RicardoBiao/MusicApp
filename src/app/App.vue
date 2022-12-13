<!--
 * @Author: liweibiao
 * @Date: 2022-11-15 10:42:32
 * @LastEditTime: 2022-12-13 16:55:23
 * @LastEditors: liweibiao
 * @Description:
-->

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './shared/components/HelloWorld.vue'
import { Button } from 'vant'
import { getQrCode, createQrCode, checkQrCode, getLoginStatus } from './services/user.service'
import { useUserStore } from './stores/user'
import { storeToRefs } from 'pinia'
import { message } from 'ant-design-vue'
import { ref } from 'vue'

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
    getQrCode()
      .then(res => {
        console.log('getQrCode-res===>', res)
        const key = res.data.data.unikey
        userStore.setQrKey(key || null)
        createQrCode(key)
          .then(res => {
            console.log('createQrCode-res===>', res)
            userStore.setQrCode(res.data.data.qrimg || null)
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
      if (res.data.code === 803) {
        sessionStorage.setItem('cookie', res.data.cookie)
      }
      if (res.data.code === 800) {
        sessionStorage.setItem('cookie', '')
        // 二维码过期，刷新二维码
        message.info('二维码过期，刷新二维码')
        test()
      }
      console.log('checkQrCode-res===>', res)
    })
    .catch(err => {
      console.error('checkQrCode-err===>', err)
    })
}
</script>

<template>
  <img v-if="backgroundUrl" :src="backgroundUrl" alt="" class="bg-img">
  <div>
    <a @click="test()" target="_blank">
      <img src="../../public/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a target="_blank" @click="CheckQrCode()">
      <img v-if="!qrCode" src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
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
