import ApiService from './api.service';

const CommentService = {
  getComments (postId) {
    return ApiService.get(`posts/${postId}/comments`);
  },
  createComment (newCommentRequest) {
    return ApiService.post('comments', newCommentRequest);
  },
  deleteComment (commentId) {
    return ApiService.delete(`comments/${commentId}`);
  }
};

export default CommentService;
