<template>
<div class="topnavAndBanner">
  <Topnav />
  <div class="banner">
    <h1>Vale UI</h1>
    <h2>一个轻量的 UI 框架</h2>
    <div class="actions">
      <a href="https://github.com">GitHub</a>
      <router-link to="/doc">开始</router-link>
    </div>
  </div>
  <div class="features">
    <v-icon name="vue" />
    <v-icon name="ts" />
    <v-icon name="light" />
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
$color: #007974;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
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
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  >svg {
    width: 64px;
    height: 64px;
  }
}
</style>
