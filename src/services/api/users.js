// src/services/api/endpoints.js
import apiInstance from './index';

export const SignUpUser = async (userData) => {
  const response = await apiInstance.post('auth/register', userData);
  return response;
};

// POST: Tương tự
export const login= async (userData) => {
  const response = await apiInstance.post('auth/login', userData);
  return response;
};

export const fetchUserProfile = async () => {
  const response = await apiInstance.get('auth/me');
  return response.data;
}

export const logoutUser = async () => {
  const response = await apiInstance.post('auth/logout');
  return response;
}
