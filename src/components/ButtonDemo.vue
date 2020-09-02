<template>
<div>Button 示例</div>
<h1>示例</h1>
<div>
  <Button @click="onClick">你好</Button>
</div>
</template>

<script>
import Button from '../lib/Button.vue'
export default {
  components: {
    Button
  },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return {
      onClick
    }
  }
}
</script>

<style>

</style>
