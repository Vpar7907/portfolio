<template>
  <div class="app">
    <app-sidebar></app-sidebar>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import AppSidebar from '@/widgets/sidebar'
  export default {
    components: {
      AppSidebar
    }
  }
</script>

<style scoped>
  .app {
    color: var(--font-color);
    background: var(--background-color);
    min-height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
  }
  .content {
    padding-left: 20px;
  }
</style>