import ApiService from './api.service';

const POST_URL = 'posts';

const PostService = {
  getPosts ({
    page = 0,
    perPage = 10,
    sort = null,
    from = null,
    to = null,
    tag = null
  }) {
    const params = arguments[0];
    const query = Object.keys(params)
      .filter(k => !!params[k])
      .map(k => `${k}=${params[k]}`)
      .join('&');

    return ApiService.get(`${POST_URL}?${query}`);
  },
  getPost (postId) {
    return ApiService.get(`${POST_URL}/${postId}`);
  },
  deletePost (postId) {
    return ApiService.delete(`${POST_URL}/${postId}`);
  },
  createPost (newPostReqest) {
    return ApiService.post(`${POST_URL}`, newPostReqest);
  },
  getComments (postId) {
    return ApiService.get(`${POST_URL}/${postId}/comments`);
  },
  createComment (postId, newCommentRequest) {
    return ApiService.post(`${POST_URL}/${postId}/comments`, newCommentRequest);
  }
};

export default PostService;
