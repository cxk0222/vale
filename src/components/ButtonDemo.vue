<template>
<div>Button 示例</div>
<h2>theme</h2>
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
<h2>size</h2>
<div>
  <div>
    <Button size="big">大大大</Button>
    <Button>中中中</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">中中中</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">中中中</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
</div>
<div>

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
