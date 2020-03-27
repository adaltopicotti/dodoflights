import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flights.riddlecode.com'
})

export default api;