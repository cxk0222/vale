<template>
  <div>Dialog 示例</div>
  <h2>visible</h2>
  <div>
    <Button @click="toggle">open</Button>
    <Dialog v-model:visible="visible" />
  </div>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    return {
      visible,
      toggle
    }
  }
}
</script>

<style>

</style>
