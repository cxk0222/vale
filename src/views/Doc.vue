<template>
<div class="layout">
  <Topnav toggleMenuButtonVisible class="nav" />
  <div class="content">
    <aside :class="{'visible': menuVisible}" v-click-outside="closeMenu">
      <h2>文档</h2>
      <ol>
        <li>
          <router-link to="/doc/intro">介绍</router-link>
        </li>
        <li>
          <router-link to="/doc/install">安装</router-link>
        </li>
        <li>
          <router-link to="/doc/get-started">开始使用</router-link>
        </li>
      </ol>
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {
  inject,
  Ref
} from 'vue'
import Mitt from '../plugins/mitt.js'

export default {
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject < Ref < boolean >> ('menuVisible')

    const closeMenu = (e) => {
      const target = e.target
      const isToggleIcon = () => {
        const tagName = target.tagName
        if (tagName === 'svg') {
          const classList = target.classList
          return classList.contains('toggleAside')
        }
        if (tagName === 'use') {
          const xlink = target.getAttribute('xlink:href')
          return xlink === '#icon-menu'
        }
      }
      const width = document.documentElement.clientWidth
      const shouldClose = width <= 500 ? true : false
      if (shouldClose && !isToggleIcon()) {
        Mitt.emit('update:menuVisible', false)
      }
    }

    return {
      menuVisible,
      closeMenu
    }
  }
}
</script>

<style lang="scss" scoped>
$aside-index: 20;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  >.nav {
    flex-shrink: 0;
  }

  >.content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  >aside {
    flex-shrink: 0;
  }

  >main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  background: linear-gradient(180deg,#1867c0,#5cbbf6);
  color: white;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-150px);
  transition: all .25s ease;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;

  &.visible {
    transform: translateX(0);
  }

  >h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  >ol {
    >li {
      >a {
        position: relative;
        display: block;
        padding: 8px 16px;
        text-decoration: none;
        &::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          height: 0;
          width: 3px;
          border-radius: 0 3px 3px 0;
          background: white;
          transition: all .25s ease;
        }
      }
      .router-link-active {
        &::before {
          height: 75%;
        }
      }
    }
  }
}

main {
  overflow: auto;
}
</style>