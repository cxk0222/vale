<template>
  <div>
    Tabs 示例
  </div>
  <h2>示例1</h2>
  <Tabs selected="导航1">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
export default {
  components: {
    Tabs,
    Tab,
  }
}
</script>

<style lang="scss" scoped>

</style>