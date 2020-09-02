<template>
  <div>
    <div>Dialog 示例</div>
    <h2>visible</h2>
    <div>
      <Button @click="toggle1">open</Button>
      <Dialog
        v-model:visible="visible1"
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

    <h2>支持异步关闭</h2>
    <div>
      <Button @click="toggle2">open</Button>
      <Dialog
        v-model:visible="visible2"
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
    const visible1 = ref(false)
    const visible2 = ref(false)
    const toggle1 = () => {
      visible1.value = !visible1.value
    }
    const toggle2 = () => {
      visible2.value = !visible2.value
    }
    const sleep = duration => {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
      })
    }
    const ok = async () => {
      return true
    }
    const asyncOk = async () => {
      await sleep(2000)
      return true
    }
    const cancel = () => {

    }
    return {
      visible1,
      visible2,
      toggle1,
      toggle2,
      ok,
      asyncOk,
      cancel,
    }
  }
}
</script>

<style>

</style>
