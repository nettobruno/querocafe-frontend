import axios from 'axios';

const api = axios.create({
  baseURL: 'http://urlbackend.com.br',
});

export default api;
