<template>
  <div v-if="visible">
    <Teleport to="body">
      <div class="vale-dialog-overlay" @click="onClickOverlay"></div>
      <div class="vale-dialog-wrapper">
        <div class="vale-dialog">
          <header>
            <slot name="title" />
            <span class="vale-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button level="main" @click="ok" :loading="loading">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
import { ref } from 'vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    }
  },
  components: {
    Button
  },
  setup(props, context) {
    const loading = ref(false)
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const ok = async () => {
      loading.value = true
      if (props.ok && await props.ok() !== false) {
        loading.value = false
        close()
      }
    }
    const cancel = () => {
      props.cancel && props.cancel()
      close()
    }
    return {
      close,
      onClickOverlay,
      loading,
      ok,
      cancel,
    }
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.vale-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 20em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 99;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>