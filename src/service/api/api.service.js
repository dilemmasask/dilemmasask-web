import Vue from 'vue';
import AuthService from '../auth.service';

const SERVER_URL = process.env.API_URL || 'http://localhost:8081';

const responseBody = response => response.data;

const ApiService = {
  delete: url => Vue.axios.del(`${SERVER_URL}/${url}`, getReqestConfig()).then(responseBody),
  get: url => Vue.axios.get(`${SERVER_URL}/${url}`, getReqestConfig()).then(responseBody),
  put: (url, body) =>
    Vue.axios.put(`${SERVER_URL}/${url}`, body, getReqestConfig()).then(responseBody),
  post: (url, body) =>
    Vue.axios.post(`${SERVER_URL}/${url}`, body, getReqestConfig()).then(responseBody)
};

function getReqestConfig () {
  if (!AuthService.isAuthenticated()) return {};
  return { headers: { 'Authorization': `${AuthService.getTokenType()} ${AuthService.getAccessToken()}` } };
}

export default ApiService;
