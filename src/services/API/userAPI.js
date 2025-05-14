import axios from "axios";

const BASE_URL = "https://68147574225ff1af1628e622.mockapi.io/users";

// Ambil semua user
export const getAllUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Tambahkan user baru
export const registerUser = async (newUser) => {
  const response = await axios.post(BASE_URL, newUser);
  return response.data;
};
