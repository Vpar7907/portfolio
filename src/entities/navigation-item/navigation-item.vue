<template>
  <li class="item-card">
    <div class="item-card-icon"></div>
    <p v-if="isOpen" class="item-card-text">{{ item.name }}</p>
  </li>
</template>

<script>
  export default {
    props: {
      item: Object,
      isOpen: Boolean
    }
  }
</script>

<style scoped>
  .item-card-icon {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: var(--background-color);
  }
  .item-card {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 25px;
    border: 1px solid var(--third-color);
    border-radius: 30px;
  }
  .item-card-text {
    margin-left: 15px;
  }
</style>