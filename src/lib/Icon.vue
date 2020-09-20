
<template>
  <svg class="v-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  name: 'VIcon',
  props: ['name']
}
</script>

<style lang="scss">
.v-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>