// src/services/api/endpoints.js
import apiInstance from './index';

export const SignUpUser = async (userData) => {
  const response = await apiInstance.post('auth/register', userData);
  return response.data;
};

// POST: Tương tự
export const loginUser = async (userData) => {
  const response = await apiInstance.post('auth/login', userData);
  return response.data;
};

