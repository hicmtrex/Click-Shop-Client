import axios from 'axios';
import store from '../store';

export const API_URL =
  import.meta.env.VITE_API_ENV === 'production'
    ? import.meta.env.VITE_API_URL
    : 'http://localhost:8000';

export const setError = (error) => {
  const message =
    (error.response && error.response.data && error.response.data.message) ||
    error.message ||
    error.toString();

  return message;
};

const axiosClient = axios.create({
  baseURL: `${API_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.userInfo.token}`;
  return config;
});

export default axiosClient;
