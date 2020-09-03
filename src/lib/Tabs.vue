<template>
  <div>
    Tabs 组件
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  setup(props, context) {
    const defaults = context.slots.default()
    // 打 log 是编程的精髓
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })

    return {
      defaults
    }
  }
}
</script>

<style lang="scss" scoped>

</style>