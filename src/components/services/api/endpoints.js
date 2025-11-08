// src/services/api/endpoints.js
import apiInstance from './index';

// GET: Tự động thêm header nếu có token
export const fetchPosts = async () => {
  const response = await apiInstance.get('/posts');
  return response;
};

// POST: Tương tự
export const createUser = async (userData) => {
  const response = await apiInstance.post('/users', userData);
  return response;
};