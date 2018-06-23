import PostService from '../../service/api/post.service';
import {
  POSTS_FETCH, POST_FETCH, POST_CREATE, POST_DELETE, POST_VOTE, COMMENT_CREATE, COMMENT_DELETE, COMMENTS_FETCH
} from '../actions.type';
import CommentService from '../../service/api/comment.service';

const state = {
  posts: [],
  isLoading: true,
  loadingPosts: {},
  loadingComments: {}
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
  }
};

const mutations = {
  setPosts (state, posts) {
    state.posts = posts;
  },
  setPost (state, post) {
    if (!post) return;
    const index = state.posts.findIndex(p => p.id === post.id);
    if (index >= 0) state.posts[index] = post;
    else state.posts.push(post);
  },
  setComments (state, postId, comments) {
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
    state.postLoading.postId = true;
  },
  stopPostLoading (state, postId) {
    delete state.postLoading.postId;
  },
  startCommentsLoading (state, postId) {
    state.commentsLoading.postId = true;
  },
  stopCommentsLoading (state, postId) {
    delete state.commentsLoading.postId;
  }
};

const actions = {
  [POSTS_FETCH] ({ commit }, {
    page = 0,
    perPage = 10,
    sort = null,
    from = null,
    to = null,
    tag = null
  }) {
    commit('startLoading');
    return PostService.getPosts(arguments[1])
      .then(response => {
        commit('setPosts', response.posts);
        commit('endLoading');
      });
  },
  [POST_FETCH] ({ commit }, postId) {
    commit('startPostLoading', postId);
    return PostService.getPost(postId).then(post => {
      commit('setPost', post);
      commit('stopPostLoading', postId);
    });
  },
  [POST_CREATE] ({ commit, dispatch }, newPostRequest) {
    return PostService.createPost(newPostRequest)
      .then(post => dispatch(POSTS_FETCH));
  },
  [POST_DELETE] ({ commit, dispatch }, postId) {
    return PostService.deletePost(postId)
      .then(post => dispatch(POSTS_FETCH));
  },
  [POST_VOTE] ({ commit, dispatch }, {postId, answerId}) {
    return PostService.vote(postId, answerId).then(post => dispatch(POST_FETCH));
  },
  [COMMENT_CREATE] ({ commit }, {postId, newCommentRequest}) {
    commit('startCommentsLoading', postId);
    return CommentService.createComment(newCommentRequest).then(response => {
      commit('setComments', postId, response.comments);
      commit('stopCommentsLoading', postId);
    });
  },
  [COMMENT_DELETE] ({ commit }, postId, commentId) {
    commit('startCommentsLoading', postId);
    return CommentService.deleteComment(commentId).then(response => {
      commit('setComments', postId, response.comments);
      commit('stopCommentsLoading', postId);
    });
  },
  [COMMENTS_FETCH] ({ commit }, postId) {
    commit('startCommentsLoading', postId);
    return CommentService.getComments(postId).then(response => {
      commit('setComments', postId, response.comments);
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
