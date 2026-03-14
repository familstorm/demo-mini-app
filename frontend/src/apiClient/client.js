import axios from 'axios';
import { Utils } from '../utils/storage';

// Default config options
const defaultOptions = {
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = Utils.getLocalStorage('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  console.log('token', token);

  return config;
});

export default instance
