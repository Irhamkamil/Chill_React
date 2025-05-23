import { IoMdArrowDropright } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
// import { useState, useEffect } from "react";
// import { useCallback } from "react";
import useFavoriteMovies from "../../../services/store/favoriteStore";

import NewEpisode from "../NewEpisode";
import TopRank from "../TopRank";
const MovieCard = ({
  image,
  imageVer,
  imageHor,
  title,
  rating,
  isNew,
  topRank,
  minWidth,
  sizeHover,
  textGenreSize
}) => {
  // BELUM MENGGUNAKAN STATE MANAGEMENT //
  // const [isFavorite, setIsFavorite] = useState(false);

  // // Fungsi untuk mengecek apakah film ada di favorit
  // const checkFavoriteStatus = useCallback(() => {
  //   const savedFavorites =
  //     JSON.parse(localStorage.getItem("favoriteMovies")) || [];
  //   setIsFavorite(savedFavorites.some((movie) => movie.title === title));
  // }, [title]);

  // useEffect(() => {
  //   checkFavoriteStatus();

  //   const handleFavoriteUpdate = () => {
  //     checkFavoriteStatus();
  //   };

  //   window.addEventListener("favoriteUpdated", handleFavoriteUpdate);
  //   return () => {
  //     window.removeEventListener("favoriteUpdated", handleFavoriteUpdate);
  //   };
  // }, [checkFavoriteStatus]);

  // const toggleFavorite = () => {
  //   let savedFavorites =
  //     JSON.parse(localStorage.getItem("favoriteMovies")) || [];

  //   if (isFavorite) {
  //     // Hapus semua film dengan title yang sama
  //     savedFavorites = savedFavorites.filter((movie) => movie.title !== title);
  //     alert(`${title} dihapus dari daftar favorit!`);
  //   } else {
  //     // Tambahkan hanya jika belum ada di daftar

  //     savedFavorites.push({ title, image, rating, isNew, topRank });
  //     alert(`${title} ditambahkan ke daftar favorit!`);
  //   }

  //   localStorage.setItem("favoriteMovies", JSON.stringify(savedFavorites));
  //   setIsFavorite(!isFavorite);

  //   // Memicu event agar semua MovieCard diperbarui
  //   window.dispatchEvent(new Event("favoriteUpdated"));
  // };

  // MENGGUNAKAN STATE MANAGEMENT //
  const { favorites, addFavorite, removeFavorite } = useFavoriteMovies();

  const isFav = favorites.some((movie) => movie.title === title);

  const userId = localStorage.getItem("currentUserId");

  const toggleFavorite = async () => {
    const selectedImage = imageVer || imageHor;

    if (isFav) {
      const movieToRemove = favorites.find((movie) => movie.title === title);
      await removeFavorite(movieToRemove.id);
      alert(`${title} dihapus dari daftar favorit!`);
    } else {
      await addFavorite({
        title,
        image: selectedImage,
        imageVer,
        imageHor,
        rating,
        isNew,
        topRank,
        category: [],
        userId
      });
      alert(`${title} ditambahkan ke daftar favorit!`);
    }
  };

  return (
    <div
      className={`${minWidth} relative group rounded-lg transition-all duration-300 shadow-md hover:shadow-lg overflow-visible`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {isNew && <NewEpisode />}
      {topRank && <TopRank />}
      <div className="absolute bottom-2 left-2 right-2 bg-black/70 px-3 py-1 rounded-lg text-white font-semibold text-sm w-fit max-w-full truncate">
        {title}
      </div>
      <div className="absolute bottom-2 right-2 bg-black/70 px-3 py-1 rounded-lg text-white font-semibold text-sm w-fit max-w-full truncate">
        {rating ? `⭐ ${rating}` : ""}
      </div>

      {/* Hover */}
      <div
        className={`absolute bottom-0 left-0 ${sizeHover} bg-black bg-opacity-80 opacity-0 
        group-hover:opacity-100 transition-all duration-300 
        z-10 rounded-b-lg`}
      >
        {/* <img
          src={image}
          alt={title}
          className="w-full h-1/2 object-cover rounded-t-lg"
        /> */}
        <div className=" flex flex-col justify-center gap-3 px-4 text-white">
          <div className="flex justify-between mt-4">
            <div className="flex gap-2">
              <button className="bg-white text-black w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300 cursor-pointer">
                <IoMdArrowDropright size={30} />
              </button>

              <button
                onClick={toggleFavorite}
                className="bg-transparent text-white w-5 h-5 md:w-7 md:h-7 outline-1 outline-white hover:outline-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {isFav ? <RxCross2 size={14} /> : <FaCheck size={12} />}
              </button>
            </div>
            <button className="bg-transparent text-white w-5 h-5 md:w-7 md:h-7 outline-1 outline-white hover:outline-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              <MdOutlineKeyboardArrowDown size={20} />
            </button>
          </div>
          <div
            className={`flex justify-center items-center gap-1 md:gap-5 text-gray-300 ${textGenreSize}`}
          >
            <span>Misteri</span>
            <span className="w-1 h-1 md:w-2 md:h-2 bg-gray-400 rounded-full"></span>
            <span>Kriminal</span>
            <span className="w-1 h-1 md:w-2 md:h-2 bg-gray-400 rounded-full"></span>
            <span>Fantasi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
