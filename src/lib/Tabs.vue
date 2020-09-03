<template>
  <div>
    <div v-for="(title, index) in titles" :key="index">
      {{ title }}
    </div>
    <component v-for="(c, index) in defaults" :key="index" :is="c" />
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
    const titles = defaults.map(tag => {
      return tag.props.title
    })

    return {
      defaults,
      titles
    }
  }
}
</script>

<style lang="scss" scoped>

</style>