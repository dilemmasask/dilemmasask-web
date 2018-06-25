import ApiService from './api.service';

const COMMENT_URL = 'comments';

const CommentService = {
  deleteComment (commentId) {
    return ApiService.delete(`${COMMENT_URL}/${commentId}`);
  }
};

export default CommentService;
