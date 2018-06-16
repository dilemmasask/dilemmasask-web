import PostService from '../../service/api/post.service';
import Post from '../../model/post';
import Poll from '../../model/poll';
import Answer from '../../model/answer';

const state = {
  posts: [],
  isLoading: true
};

const getters = {
  posts (state) {
    return state.posts;
  },
  isLoading (state) {
    return state.isLoading;
  }
};

const mutations = {
  fetchStart (state) {
    state.isLoading = true;
  },
  fetchEnd (state, posts) {
    state.posts = posts;
    state.isLoading = false;
  }
};

const actions = {
  fetchPosts ({
    commit
  }, [page, perPage] = [1, 10]) {
    commit('fetchStart');
    PostService.getByPage(page, perPage).then(posts => {
      posts = posts.map(p => new Post(
        p.id,
        p.author.fullName,
        new Date(p.dateTime),
        new Poll(
          p.poll.question,
          p.poll.answers.map(
            a => new Answer(a.id, a.text, a.votes)))));

      commit('fetchEnd', posts);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
