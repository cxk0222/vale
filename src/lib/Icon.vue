
<template>
  <svg class="v-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
// import './svg'
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