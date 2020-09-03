<template>
  <div class="vale-tabs">
    <div class="vale-tabs-nav">
      <div
        class="vale-tabs-nav-item"
        :class="{'selected': title === selected}"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>
    <div class="vale-tabs-content">
      <component
        class="vale-tabs-content-item"
        v-for="(c, index) in defaults"
        :key="index"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  props: {
    selected: {
      type: String,
    }
  },
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
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.vale-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>