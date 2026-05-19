import axios from 'axios';

const api = axios.create({
  // Trocamos de 5000 para 8080 aqui!
  baseURL: 'http://localhost:8080' 
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;