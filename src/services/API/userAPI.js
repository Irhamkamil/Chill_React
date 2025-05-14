import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Ambil semua user
export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

// fungsi Tambahkan user baru
export const registerUser = async (newUser) => {
  const response = await axios.post(`${BASE_URL}/users`, newUser);
  return response.data;
};

// 🔹 fungsi update user
export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/users/${id}`, updatedData);
  return response.data;
};

// 🔹 fungsi delete user
export const deleteUserById = async (id) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  return response.data;
};
