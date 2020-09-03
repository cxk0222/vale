<template>
  <div class="vale-tabs">
    <div class="vale-tabs-nav" ref="container">
      <div
        v-for="(title, index) in titles"
        :ref="el => { if (title === selected) selectedItem = el }"
        class="vale-tabs-nav-item"
        :class="{'selected': title === selected}"
        :key="index"
        @click="select(title)"
      >
        {{ title }}
      </div>
      <div
        class="vale-tabs-nav-indicator"
        ref="indicator"
      ></div>
    </div>
    <div class="vale-tabs-content">
      <component
        class="vale-tabs-content-item"
        v-for="(c, index) in defaults"
        :class="{'selected': c.props.title === selected}"
        :key="index"
        :is="c"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { ref, onMounted, watchEffect } from 'vue'
export default {
  props: {
    selected: {
      type: String,
    }
  },
  setup(props, context) {
    const selectedItem = ref < HTMLDivElement > (null)
    const indicator = ref < HTMLDivElement > (null)
    const container = ref < HTMLDivElement > (null)
    onMounted(() => {
      watchEffect(() => {
        const { width, left: left2 } = selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const { left: left1 } = container.value.getBoundingClientRect()
        const left = left2 - left1
        indicator.value.style.left = left + 'px'
      })
    })

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
    const select = (title: string) => {
      console.log('title', title)
      context.emit('update:selected', title)
    }

    return {
      defaults,
      titles,
      select,
      selectedItem,
      indicator,
      container,
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.vale-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>