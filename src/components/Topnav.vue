<template>
<div class="topnav" :class="{'background': backgroundVisible}">
  <router-link to="/" class="logo">
    <v-icon name="vale-logo"></v-icon>
  </router-link>
  <ul class="menu">
    <li>
      <router-link to="/doc">文档</router-link>
    </li>
  </ul>
  <v-icon
    v-if="toggleMenuButtonVisible"
    name="menu"
    class="toggleAside"
    @click="toggleAsideMenu"
  />
</div>
</template>

<script lang="ts">
import {
  inject,
  Ref
} from 'vue'
import Mitt from '../plugins/mitt.js'

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
    backgroundVisible: {
      type: Boolean,
      default: false,
    }
  },
  setup(_, context) {
    const menuVisible = inject < Ref < boolean >> ('menuVisible')

    const toggleAsideMenu = () => {
      Mitt.emit('update:menuVisible', !menuVisible.value)
    }

    return {
      toggleAsideMenu
    }
  }
}
</script>

<style lang="scss" scoped>
$color: lightblue;

.topnav {
  display: flex;
  padding: 8px 16px;
  position: fixed;
  color: $color;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 21;
  justify-content: center;
  align-items: center;
  background: transparent;

  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }

  >.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    >li {
      margin: 0 1em;
      list-style: none;
    }
  }

  >.toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    cursor: pointer;
  }
}

// 移动端样式
@media (max-width: 500px) {
  .topnav.background {
    background: #ffffff;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
  }
  .topnav {
    z-index: 19;
    >.menu {
      display: none;
    }

    >.logo {
      margin: 0 auto;
    }

    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>