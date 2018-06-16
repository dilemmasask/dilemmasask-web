import Vue from 'vue';

const SERVER_URL = process.env.API_URL || 'http://localhost:8081';

const responseBody = response => response.data;

const ApiService = {
  delete: url => Vue.axios.del(`${SERVER_URL}${url}`).then(responseBody),
  get: url => Vue.axios.get(`${SERVER_URL}${url}`).then(responseBody),
  put: (url, body) =>
    Vue.axios.put(`${SERVER_URL}${url}`, body).then(responseBody),
  post: (url, body) =>
    Vue.axios.post(`${SERVER_URL}${url}`, body).then(responseBody)
};

export default ApiService;
