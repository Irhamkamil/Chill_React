import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getAllMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
