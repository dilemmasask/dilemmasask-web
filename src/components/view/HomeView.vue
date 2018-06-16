<template>
<b-row class="justify-content-center">
  <b-col lg="4" md="8">
    <poll-form v-if="$store.getters.isAuthenticated"></poll-form>
    <post-list-view></post-list-view>
  </b-col>
</b-row>
</template>

<script>
import { mapGetters } from 'vuex';
import PostListView from './PostListView';
import PollForm from '../form/PollForm';
import Poll from '../../model/poll';

export default {
  name: 'HomeView',
  components: {
    PollForm,
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
  methods: {
  }
};
</script>
