import ApiService from './api.service';

const POST_URL = '/posts';

const PostService = {
  getPosts ({
    page = 0,
    perPage = 10,
    sort = null,
    from = null,
    to = null,
    tag = null
  }) {
    const query = Object.keys(arguments[0])
      .filter((k, v) => !!v)
      .map((k, v) => `${k}=${v}`)
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
  vote (postId, answerId) {
    return ApiService.post(`${POST_URL}/${postId}/vote/${answerId}`, '');
  }
};

export default PostService;
