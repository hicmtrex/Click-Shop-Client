import axios from 'axios';
import store from '../store';

export const API_URL = 'https://click-shop.herokuapp.com';

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
