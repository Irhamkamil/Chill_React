import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Ambil semua user
export const getAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

// Tambahkan user baru
export const registerUser = async (newUser) => {
  const response = await axios.post(`${BASE_URL}/users`, newUser);
  return response.data;
};
