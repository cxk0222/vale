<template>
<div>Button 示例</div>
<h1>示例</h1>
<div>
  <div>
    <Button>你好</Button>
  </div>
  <br>
  <div>
    <Button theme="button">你好</Button>
  </div>
  <br>
  <div>
    <Button theme="link">你好</Button>
  </div>
  <br>
  <div>
    <Button theme="text">你好</Button>
  </div>
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
