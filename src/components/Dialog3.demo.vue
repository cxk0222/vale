<demo>
支持异步关闭
</demo>

<template>
  <div>
    <Button @click="toggle">open</Button>
    <Dialog
      v-model:visible="visible"
      :ok="asyncOk"
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
    const sleep = duration => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
      })
    }
    const asyncOk = async () => {
      await sleep(2000)
      return true
    }
    const cancel = () => {}

    return {
      visible,
      toggle,
      asyncOk,
      cancel,
    }
  }
}
</script>
