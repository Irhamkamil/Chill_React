// src/store/movieStore.js
import { create } from "zustand";
import { getAllMovies } from "../API/movieAPI";

const useMovieStore = create((set) => ({
  movies: [],
  isLoading: true,
  fetchMovies: async () => {
    set({ isLoading: true });
    try {
      const data = await getAllMovies();
      set({ movies: data });
    } catch (err) {
      console.error("Gagal mengambil data movie:", err);
    } finally {
      set({ isLoading: false });
    }
  }
}));

export default useMovieStore;
