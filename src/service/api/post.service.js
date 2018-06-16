import ApiService from './api.service';

const POST_URL = '/post';

const PostService = {
  create (post) {
    return ApiService.post(`${POST_URL}`, post);
  },
  delete (postId) {},
  get (postId) {
    return ApiService.get(`${POST_URL}/postId`);
  },
  getByPage (page, perPage) {
    return ApiService.get(`${POST_URL}?page=${page}&per_page=${perPage}`);
  },
  vote (postId, answerId) {
    return ApiService.post(`${POST_URL}/${postId}/answer/${answerId}`, '');
  }
};

export default PostService;
