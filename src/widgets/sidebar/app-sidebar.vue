<template>
  <nav class="navbar" @click="isOpen = true">
    <ui-list>
      <navigation-item 
      v-for="item in menuItems" 
      :item="item"
      :isOpen="isOpen"
      :key="item.key"/>
    </ui-list>
  </nav>
</template>

<script>
  import NavigationItem from "@/entities/navigation-item"
  import {menuItems} from "./static.js"
  export default {
    components: {NavigationItem},
    data() {
      return {
        menuItems,
        isOpen: false,
      }
    }
  }
</script>

<style scoped>
  .navbar {
    min-height: 100vh;
    background: var(--secondary-color);
    padding: 5px;
  }
</style>