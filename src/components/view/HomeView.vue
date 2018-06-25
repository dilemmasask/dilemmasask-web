<template>
<b-row class="justify-content-center">
  <b-col lg="5" md="10">
    <poll-form-view v-if="$store.getters.isAuthenticated"></poll-form-view>
    <post-list-view></post-list-view>
  </b-col>
</b-row>
</template>

<script>
import { mapGetters } from 'vuex';
import PostListView from './PostListView';
import PollFormView from './PollFormView';
import Poll from '../../model/poll';
import { POSTS_FETCH, SET_FILTERS } from '../../store/actions.type';

export default {
  name: 'HomeView',
  components: {
    PollFormView,
    PostListView
  },
  data () {
    return {
      newPoll: new Poll('', [])
    };
  },
  computed: {
    ...mapGetters({
      posts: 'posts'
    })
  },
  watch: {
    $route: {
      handler (oldRoute, newRoute) {
        console.log(this.$route.query);
        this.$store.commit(SET_FILTERS, this.$route.query);
        this.$store.dispatch(POSTS_FETCH);
      },
      deep: true
    }
  },
  created () {
    this.$store.commit(SET_FILTERS, this.$route.query);
    this.$store.dispatch(POSTS_FETCH);
  }
};
</script>

<style>
</style>
