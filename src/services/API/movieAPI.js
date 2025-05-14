import axios from "axios";

const BASE_URL = "https://68147574225ff1af1628e622.mockapi.io";

export const getAllMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
