import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://flights.riddlecode.com'
  baseURL: 'http://localhost:3333'
})

export default api;