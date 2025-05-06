import { useState, useEffect } from "react";

import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import MovieGrid from "../fragments/MovieGrid";

// import { moviesTopRating } from "../../data/movies";

const MyList = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // Fungsi untuk mengambil data dari localStorage
  const updateFavorites = () => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(savedFavorites);
  };

  useEffect(() => {
    updateFavorites(); // Ambil data saat pertama kali komponen dimuat

    // Dengarkan event saat localStorage diperbarui
    window.addEventListener("storage", updateFavorites);
    window.addEventListener("favoriteUpdated", updateFavorites); // Custom event

    return () => {
      window.removeEventListener("storage", updateFavorites);
      window.removeEventListener("favoriteUpdated", updateFavorites);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="my-15"></div>
      {favoriteMovies.length === 0 ? (
        <p className="text-center">Tidak ada film favorit.</p>
      ) : (
        <MovieGrid
          movies={favoriteMovies}
          mainTitle="Daftar Saya"
          // showDetails={false}
          sizeHover="w-full h-1/4 md:h-1/4"
          textGenreSize="text-[0.8rem] sm:text-[0.7rem] md:text-[0.65rem] lg:text-[0.8rem]"
        />
      )}
      <Footer />
    </>
  );
};

export default MyList;
