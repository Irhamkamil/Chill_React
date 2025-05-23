import axios from "axios";

const API_URL = import.meta.env.VITE_API_SECOND_URL;

export const getFavorites = async () => {
  const userId = localStorage.getItem("currentUserId");

  if (!userId) {
    console.warn("User ID belum ada di localStorage");
    return [];
  }

  const response = await axios.get(`${API_URL}/favorites`);
  return response.data.filter((item) => item.userId === userId);
};

export const addFavoriteAPI = async (movie) => {
  const userId = localStorage.getItem("currentUserId");
  const response = await axios.post(`${API_URL}/favorites`, {
    ...movie,
    userId: userId
  });
  return response.data;
};

export const removeFavoriteAPI = async (id) => {
  await axios.delete(`${API_URL}/favorites/${id}`);
};
