<template>
<b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-brand :to="'/'">Dilemmasasak</b-navbar-brand>

  <b-navbar-nav>
      <b-nav-item :to="'new'">New</b-nav-item>
      <b-nav-item-dropdown text="Top" right>
        <b-dropdown-item :to="'top?t=6h'" :exact='true'>Past 6 Hours</b-dropdown-item>
        <b-dropdown-item :to="'top?t=day'" :exact='true'>Past Day</b-dropdown-item>
        <b-dropdown-item :to="'top?t=month'" :exact='true'>Past Month</b-dropdown-item>
        <b-dropdown-item :to="'top?t=all'" :exact='true'>Of All Time</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item v-if="!$store.getters.isAuthenticated" @click="onSignIn" >Sign In</b-nav-item>
      <b-nav-item v-if="$store.getters.isAuthenticated" @click="onSignOut" >Sign Out</b-nav-item>

  </b-navbar-nav>

</b-navbar>
</template>

<script>
import Vue from 'vue';
import { SIGN_IN, SIGN_OUT } from '../../store/actions.type.js';

export default {
  name: 'NavBar',
  methods: {
    onSignIn: function () {
      const store = this.$store.dispatch(SIGN_IN);
    },
    onSignOut: function () {
      this.$store.dispatch(SIGN_OUT);
    }
  }
};
</script>

<style>
</style>
