import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
})
instance.interceptors.request.use( (config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers = { "Authorization" : `Bearer ${token}`}
  }
  return config
});
export default instance
