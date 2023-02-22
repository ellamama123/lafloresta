import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_BASE_URL,
  timeout: 2500,
});

export { api };
