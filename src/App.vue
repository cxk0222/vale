<template>
  <router-view />
</template>

<script lang="ts">
import {
  ref,
  provide,
  onMounted
} from 'vue'
import {
  router
} from './router'
import Mitt from './plugins/mitt.js'

export default {
  name: 'App',
  setup(_, context) {
    let width = document.documentElement.clientWidth
    let menuVisible = ref(width <= 500 ? false : true)

    window.onresize = function() {
      width = document.documentElement.clientWidth
      menuVisible.value = width <= 500 ? false : true
    }

    provide('menuVisible', menuVisible)

    Mitt.on('update:menuVisible', (v) => {
      menuVisible.value = v
    })

    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  }
}
</script>
