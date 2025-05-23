// src/store/favoriteStore.js
import { create } from "zustand";
import {
  getFavorites,
  addFavoriteAPI,
  removeFavoriteAPI
} from "../API/favoriteAPI";
// import { persist } from "zustand/middleware";

// const useFavoriteStore = create(
//   persist(
//     (set, get) => ({
//       favorites: [],
//       addFavorite: (movie) => {
//         const exists = get().favorites.some((m) => m.title === movie.title);
//         if (!exists) {
//           set((state) => ({
//             favorites: [...state.favorites, movie]
//           }));
//         }
//       },
//       removeFavorite: (title) => {
//         set((state) => ({
//           favorites: state.favorites.filter((movie) => movie.title !== title)
//         }));
//       },
//       isFavorite: (title) => {
//         return get().favorites.some((movie) => movie.title === title);
//       }
//     }),
//     {
//       name: "favorite-movies-storage"
//     }
//   )
// );

// export default useFavoriteStore;
// FUNGSI DIATAS DIGUNAKAN JIKA INGIN MENYIMPAN KE LOCALSTORAGE

const useFavoriteStore = create((set, get) => ({
  favorites: [],
  isLoading: false,

  fetchFavorites: async () => {
    set({ isLoading: true });
    try {
      const data = await getFavorites();
      set({ favorites: data });
    } catch (error) {
      console.error("Gagal mengambil data favorites:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  addFavorite: async (movie) => {
    try {
      const exists = get().favorites.some((m) => m.title === movie.title);
      if (!exists) {
        const newFavorite = await addFavoriteAPI(movie);
        set((state) => ({
          favorites: [...state.favorites, newFavorite]
        }));
      }
    } catch (error) {
      console.error("Gagal menambahkan favorite:", error);
    }
  },

  removeFavorite: async (id) => {
    try {
      await removeFavoriteAPI(id);
      set((state) => ({
        favorites: state.favorites.filter((movie) => movie.id !== id)
      }));
    } catch (error) {
      console.error("Gagal menghapus favorite:", error);
    }
  },

  isFavorite: (title) => {
    return get().favorites.some((movie) => movie.title === title);
  }
}));

export default useFavoriteStore;
