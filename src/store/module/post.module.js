import PostService from '../../service/api/post.service';

const state = {
  post: {}
};

const getters = {
  post (state) {
    return state.post;
  }
};

const mutations = {
  setPost (state, post) {
    state.post = post;
  }
};

const actions = {
  fetchPost ({
    commit
  }, postId) {
    PostService.get(postId).then(post => commit('setPost', post));
  },
  deletePost ({
    commit
  }, postId) {
    return PostService.delete(postId);
  },
  createPost ({
    commit
  }, post) {
    return PostService.create(post);
  },
  votePost ({
    commit
  }, [postId, answerId]) {
    return PostService.vote(postId, answerId);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
