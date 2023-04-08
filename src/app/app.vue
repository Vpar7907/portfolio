<script>
  import { RouterLink, RouterView } from 'vue-router';
  import AppLayout from './app-layout.vue';
  export default{
    components: {
      AppLayout
    }
}
</script>

<template>
  <app-layout>
    <RouterView />  
  </app-layout>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Lato';
}
</style>
