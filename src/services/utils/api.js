import axios from 'axios';

const baseURL = import.meta.env.VITE_PUBLIC_BASEURL;

const api = axios.create({
  baseURL,
  timeout: 20000,
});

export default api;
