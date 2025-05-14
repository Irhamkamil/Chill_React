// src/store/favoriteStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (movie) => {
        const exists = get().favorites.some((m) => m.title === movie.title);
        if (!exists) {
          set((state) => ({
            favorites: [...state.favorites, movie]
          }));
        }
      },
      removeFavorite: (title) => {
        set((state) => ({
          favorites: state.favorites.filter((movie) => movie.title !== title)
        }));
      },
      isFavorite: (title) => {
        return get().favorites.some((movie) => movie.title === title);
      }
    }),
    {
      name: "favorite-movies-storage"
    }
  )
);

export default useFavoriteStore;
