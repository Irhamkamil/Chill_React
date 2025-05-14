// import { useState, useEffect } from "react";
import useFavoriteStore from "../../services/store/favoriteStore";

import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import MovieGrid from "../fragments/MovieGrid";

// import { moviesTopRating } from "../../data/movies";

const MyList = () => {
  // BELUM MENGGUNAKAN STATE MANAGEMENT //
  // const [favoriteMovies, setFavoriteMovies] = useState([]);

  // // Fungsi untuk mengambil data dari localStorage
  // const updateFavorites = () => {
  //   const savedFavorites =
  //     JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  //   setFavoriteMovies(savedFavorites);
  // };

  // useEffect(() => {
  //   updateFavorites(); // Ambil data saat pertama kali komponen dimuat

  //   // Dengarkan event saat localStorage diperbarui
  //   window.addEventListener("storage", updateFavorites);
  //   window.addEventListener("favoriteUpdated", updateFavorites); // Custom event

  //   return () => {
  //     window.removeEventListener("storage", updateFavorites);
  //     window.removeEventListener("favoriteUpdated", updateFavorites);
  //   };
  // }, []);

  // MENGGUNAKAN STATE MANAGEMENT //
  const { favorites: favoriteMovies } = useFavoriteStore();

  return (
    <>
      <Navbar />
      <div className="my-20"></div>
      {favoriteMovies.length === 0 ? (
        <p className="text-center">Tidak ada film favorit.</p>
      ) : (
        <div className="mx-4 md:mx-7">
          <h2 className="text-2xl font-bold">Daftar Saya</h2>
          <MovieGrid
            movies={favoriteMovies}
            mainTitle="" // bisa kosong, biar nggak nambah judul
            minWidth="min-w-[8.5rem] md:min-w-[13rem] lg:min-w-[14rem]"
            sizeHover="w-full h-1/4 md:h-1/4"
            textGenreSize="text-[0.8rem] sm:text-[0.7rem] md:text-[0.65rem] lg:text-[0.8rem]"
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyList;
