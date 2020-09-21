<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Vale UI</h1>
        <h2>一个轻量的 UI 框架</h2>
        <div class="actions">
          <a href="https://github.com" class="github-button">GitHub</a>
          <router-link to="/doc" class="start-button">开始</router-link>
        </div>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <v-icon name="vue" />
          <h3>基于 Vue3</h3>
          <p>使用了最新的 Vue3 Composition API</p>
        </li>
        <li>
          <v-icon name="ts" />
          <h3>基于 Typescript</h3>
          <p>源代码采用 Typescript 书写</p>
        </li>
        <li>
          <v-icon name="light" />
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #ffffff;

.topnavAndBanner {
  background: linear-gradient(180deg,#1867c0,#5cbbf6);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  >.actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      // background: $green;
      // color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      // &:hover {
      //   text-decoration: none;
      // }

      &.github-button {
        color: #348ad6;
        background: #f5f5f5;
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);
        &:hover {
          background: #edf3fa;
        }
      }

      &.start-button {
        background: transparent;
        border: 1px solid #ffffff;
        &:hover {
          background: fade-out($color: white, $amount: 0.95);
        }
      }
    }
  }
}

.features {
  margin: 64px auto;
  padding: 0 24px;

  @media (min-width: 800px) {
    width: 800px;
    padding: 0;
    > ul {
      >li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    padding: 0;
    > ul {
      >li {
        width: 33.3333%;
      }
    }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}
</style>
