import ApiService from './api.service';

// const ANSWER_URL = 'answers';

const AnswerService = {
  vote (postId, answerId) {
    return ApiService.put(`posts/${postId}/vote/${answerId}`, '');
  }
};

export default AnswerService;
