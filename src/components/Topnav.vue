<template>
<div class="topnav">
  <router-link to="/" class="logo">
    <v-icon name="king"></v-icon>
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
    @click="toggleMenu"
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
    }
  },
  setup(_, context) {
    const menuVisible = inject < Ref < boolean >> ('menuVisible')

    const toggleMenu = () => {
      Mitt.emit('update:menuVisible', !menuVisible.value)
      // menuVisible.value = !menuVisible.value
    }

    return {
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
$color: #007974;

.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  color: $color;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 21;
  justify-content: center;
  align-items: center;

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
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out($color: black, $amount: 0.9);
  }

  @media (max-width: 500px) {
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
