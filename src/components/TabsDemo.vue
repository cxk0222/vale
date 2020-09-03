<template>
  <div>
    <div>
      Tabs 示例
    </div>
    <h2>示例1</h2>
    <Tabs v-model:selected="selected">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航222">内容2</Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref('导航222')

    return {
      selected
    }
  }
}
</script>

<style lang="scss" scoped>

</style>