<template>
  <div>
    导航栏 | &nbsp;
    <router-link to="/">Test</router-link> &nbsp;
    <router-link to="/xxx">Test2</router-link>
  </div>
  <hr>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>
