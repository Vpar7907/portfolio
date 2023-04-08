<template>
  <ul class="ui-list">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: 'ui-list'
  }
</script>

<style scoped>
  .ui-list > li {
    list-style: none;
  }
</style>