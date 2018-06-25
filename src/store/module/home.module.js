import Vue from 'vue';
import PostService from '../../service/api/post.service';
import {
  POSTS_FETCH,
  POST_FETCH,
  POST_CREATE,
  POST_DELETE,
  ANSWER_VOTE,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENTS_FETCH,
  SET_FILTER_PAGE,
  SET_FILTER_PER_PAGE,
  SET_FILTER_SORT,
  SET_FILTER_FROM,
  SET_FILTER_TO,
  SET_FILTER_TAG,
  SET_FILTERS
} from '../actions.type';
import CommentService from '../../service/api/comment.service';
import AnswerService from '../../service/api/answer.service';

const state = {
  posts: [],
  isLoading: true,
  loadingPosts: {},
  loadingComments: {},
  filters: {
    page: 0,
    perPage: 10,
    sort: null,
    from: null,
    to: null,
    tag: null
  }
};

const getters = {
  posts (state) {
    return state.posts;
  },
  isLoading (state) {
    return state.isLoading;
  },
  post (state, postId) {
    return state.posts.find(post => post.id === postId);
  },
  isPostLoading (state, postId) {
    return !!state.loadingPosts.postId;
  },
  isCommentsLoading (state, postId) {
    return state.loadingComments.postId;
  },
  filters (state) {
    return state.filters;
  }
};

const mutations = {
  setPosts (state, posts) {
    state.posts = posts;
  },
  setPost (state, post) {
    if (!post) return;
    const index = state.posts.findIndex(p => p.id === post.id);
    if (index >= 0) {
      Vue.set(state.posts, index, post);
    } else {
      state.posts.push(post);
    }
  },
  setComments (state, {
    postId,
    comments
  }) {
    const post = state.posts.find(post => post.id === postId);
    if (!post) return;
    post.comments = comments;
  },
  startLoading (state) {
    state.isLoading = true;
  },
  endLoading (state) {
    state.isLoading = false;
  },
  startPostLoading (state, postId) {
    state.loadingPosts.postId = true;
  },
  stopPostLoading (state, postId) {
    delete state.loadingPosts.postId;
  },
  startCommentsLoading (state, postId) {
    state.loadingComments.postId = true;
  },
  stopCommentsLoading (state, postId) {
    delete state.loadingComments.postId;
  },
  [SET_FILTER_PAGE] (state, page) {
    state.filters.page = page;
  },
  [SET_FILTER_PER_PAGE] (state, perPage) {
    state.filters.perPage = perPage;
  },
  [SET_FILTER_SORT] (state, sort) {
    state.filters.sort = sort;
  },
  [SET_FILTER_FROM] (state, from) {
    state.filters.from = from;
  },
  [SET_FILTER_TO] (state, to) {
    state.filters.to = to;
  },
  [SET_FILTER_TAG] (state, tag) {
    state.filters.tag = tag;
  },
  [SET_FILTERS] (state, filters) {
    console.log(filters);
    state.filters = filters;
  }
};

const actions = {
  [POSTS_FETCH] ({
    commit,
    getters
  }) {
    commit('startLoading');
    return PostService.getPosts(getters.filters)
      .then(response => {
        commit('setPosts', response.posts);
        commit('endLoading');
      })
      .catch(e => commit('setPosts', []));
  },
  [POST_FETCH] ({
    commit
  }, postId) {
    commit('startPostLoading', postId);
    return PostService.getPost(postId).then(post => {
      commit('setPost', post);
      commit('stopPostLoading', postId);
    });
  },
  [POST_CREATE] ({
    commit,
    dispatch
  }, postRequest) {
    return PostService.createPost(postRequest)
      .then(post => dispatch(POSTS_FETCH));
  },
  [POST_DELETE] ({
    commit,
    dispatch
  }, postId) {
    return PostService.deletePost(postId)
      .then(post => dispatch(POSTS_FETCH));
  },
  [ANSWER_VOTE] ({
    commit,
    dispatch
  }, {
    postId,
    answerId
  }) {
    return AnswerService.vote(postId, answerId).then(post => dispatch(POST_FETCH, postId));
  },
  [COMMENT_CREATE] ({
    commit
  }, {
    postId,
    commentRequest
  }) {
    commit('startCommentsLoading', postId);
    return PostService.createComment(postId, commentRequest).then(response => {
      commit('setComments', {
        postId: postId,
        comments: response.comments
      });
      commit('stopCommentsLoading', postId);
    });
  },
  [COMMENT_DELETE] ({
    commit
  }, {
    postId,
    commentId
  }) {
    commit('startCommentsLoading', postId);
    return CommentService.deleteComment(commentId).then(response => {
      commit('setComments', {
        postId: postId,
        comments: response.comments
      });
      commit('stopCommentsLoading', postId);
    });
  },
  [COMMENTS_FETCH] ({
    commit
  }, postId) {
    commit('startCommentsLoading', postId);
    return CommentService.getComments(postId).then(response => {
      commit('setComments', {
        postId: postId,
        comments: response.comments
      });
      commit('stopCommentsLoading', postId);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
