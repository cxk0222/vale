<demo>
支持 size
</demo>

<template>
  <div>
    <div>
      <Button size="big">大大大</Button>
      <Button>中中中</Button>
      <Button size="small">小小小</Button>
    </div>
    <div>
      <Button theme="link" size="big">大大大</Button>
      <Button theme="link">中中中</Button>
      <Button size="small" theme="link">小小小</Button>
    </div>
    <div>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">中中中</Button>
      <Button size="small" theme="text">小小小</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue"
export default {
  components: {
    Button
  }
}
</script>