<template>
<b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-brand :to="'/'">Dilemmasasak</b-navbar-brand>

  <b-navbar-nav>
      <b-nav-item @click="newest">New</b-nav-item>
      <b-nav-item-dropdown text="Top" right>
        <b-dropdown-item  @click="topPastHours(6)">Past 6 Hours</b-dropdown-item>
        <b-dropdown-item @click="topPastDays(1)">Past Day</b-dropdown-item>
        <b-dropdown-item @click="topPastDays(30)">Past Month</b-dropdown-item>
        <b-dropdown-item @click="topAll">Of All Time</b-dropdown-item>
      </b-nav-item-dropdown>
</b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Enter tag" v-model="tagInput"/>
        <b-button size="sm" class="my-2 my-sm-0" @click="tagFilter">Search</b-button>
      </b-nav-form>
      <b-nav-item right v-if="!$store.getters.isAuthenticated" @click="onSignIn">Sign In</b-nav-item>
      <b-nav-item v-else @click="onSignOut" >Sign Out</b-nav-item>
    </b-navbar-nav>

</b-navbar>
</template>

<script>
import { SIGN_IN, SIGN_OUT, POSTS_FETCH } from '../../store/actions.type.js';
import { getQuery, extractTags } from '../../util/utils.js';

export default {
  name: 'NavBar',
  data () {
    return {
      tagInput: ''
    };
  },
  computed: {
    filters () {
      return this.$store.getters.filters;
    }
  },
  methods: {
    onSignIn: function () {
      this.$store.dispatch(SIGN_IN).then(_ => this.$store.dispatch(POSTS_FETCH));
    },
    onSignOut: function () {
      this.$store.dispatch(SIGN_OUT).then(_ => this.$store.dispatch(POSTS_FETCH));
    },
    topPastHours (hours) {
      let d = new Date();
      d.setHours(d.getHours() - hours);
      const newFilters = { sort: 'top', from: d.toISOString() };
      this.pushRoute(newFilters);
    },
    topPastDays (days) {
      let d = new Date();
      d.setDate(d.getDate() - days);
      const newFilters = { sort: 'top', from: d.toISOString() };
      this.pushRoute(newFilters);
    },
    topAll () {
      this.pushRoute({ sort: 'top' });
    },
    newest () {
      this.pushRoute({ sort: 'new' });
    },
    tagFilter () {
      if (!this.tagInput) return;
      let tagSearch = extractTags(this.tagInput)[0];
      if (!tagSearch) tagSearch = this.tagInput.split(/\W/)[0];
      this.pushRoute({ tag: tagSearch });
    },
    pushRoute (filters) {
      if (!filters.tag) filters.tag = this.filters.tag;
      this.$router.push(`/home?${getQuery(filters)}`);
    }

  }
};
</script>

<style>
</style>
