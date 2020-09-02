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
<h2>level</h2>
<div>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
</div>
<h2>disabled</h2>
<div>
  <div>
    <Button disabled>禁用按钮1</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文字按钮</Button>
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
