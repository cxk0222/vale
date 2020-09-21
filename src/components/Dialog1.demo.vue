<demo>
常规使用
</demo>

<template>
  <div>
    <Button @click="toggle">open</Button>
    <Dialog
      v-model:visible="visible"
      :ok="ok"
      :cancel="cancel"
    >
      <template v-slot:title>
        <strong>title</strong>
      </template>
      <template v-slot:content>
        <h3>content</h3>
        <h3>description</h3>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {
  ref
} from 'vue'
import {
  openDialog
} from '../lib/openDialog'
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
    const ok = async () => {
      return true
    }
    const cancel = () => {}

    return {
      visible,
      toggle,
      ok,
      cancel,
    }
  }
}
</script>
