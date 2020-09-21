<template>
  <button
    class="vale-switch"
    :class="{ 'vale-checked': value, 'vale-disabled': disabled }"
    :disabled="disabled"
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import {
  ref,
  computed
} from 'vue'
export default {
  props: {
    value: Boolean,
    disabled: Boolean,
  },
  setup(props, context) {
    const {
      value,
      disabled,
    } = props

    const toggle = () => {
      context.emit('update:value', !props.value)
    }

    // 不是响应式的？

    // const classes = computed(() => {
    //   return {
    //     [`vale-checked`]: value,
    //     [`vale-disabled`]: disabled,
    //   }
    // })

    return {
      toggle,
      // classes
    }
  }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.vale-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.vale-checked {
    background: #1890ff;

    >span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &.vale-disabled {
    cursor: not-allowed;
  }

  &:active {
    >span {
      width: $h2 + 4px;
    }
  }

  &.vale-checked:active {
    >span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
}
</style>
