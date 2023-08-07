import axios from 'axios';

const urlBase = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: urlBase,
});

export default instance;
