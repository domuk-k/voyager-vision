import axios from 'axios';

export const X_API_KEY = 'tlk_1M6J7TP23PRHGA29C15JF3CYA6DA';

const api = axios.create({
  baseURL: 'https://api.twelvelabs.io/v1.1/',
  headers: {
    'x-api-key': X_API_KEY,
  },
});

export default api;
