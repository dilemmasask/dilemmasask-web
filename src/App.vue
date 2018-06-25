<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import NavBar from './components/nav/NavBar.vue';

export const EventBus = new Vue();

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
</style>
