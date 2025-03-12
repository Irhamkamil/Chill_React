import { useRef } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

import MovieCard from "../../elements/MovieCard";

export default function MovieSlider({
  movies,
  mainTitle,
  showDetails = "true",
  minWidth
}) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full h-full mx-auto px-4 md:px-8 py-8 mt-4 overflow-visible">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
        {mainTitle}
      </h2>

      <div className="w-full relative flex items-center overflow-visible">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 md:-left-5 z-20 bg-button-2 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700"
        >
          <IoArrowBackOutline size={20} />
        </button>

        {/* Movie Slider */}
        <div
          ref={sliderRef}
          className="w-full h-auto flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth relative"
        >
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              image={movie.image}
              {...(showDetails
                ? { title: movie.title, rating: movie.rating }
                : {})}
              isNew={movie.isNew}
              topRank={movie.topRank}
              minWidth={minWidth}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 md:-right-5 z-20 bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700"
        >
          <IoArrowForwardOutline size={20} />
        </button>
      </div>
    </div>
  );
}
