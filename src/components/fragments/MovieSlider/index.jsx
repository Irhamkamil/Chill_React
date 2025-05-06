import { useRef } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

import MovieCard from "../../elements/MovieCard";

export default function MovieSlider({
  movies,
  mainTitle,
  showDetails = true,
  minWidth,
  sizeHover,
  textGenreSize,
  preferHorizontal
}) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className={`absolute ${
        direction === "left" ? "left-1 md:-left-5" : "right-1 md:-right-5"
      } z-20 bg-button-2 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700`}
    >
      {direction === "left" ? (
        <IoArrowBackOutline size={20} />
      ) : (
        <IoArrowForwardOutline size={20} />
      )}
    </button>
  );

  return (
    <div className="w-full h-full mx-auto px-4 md:px-8 py-8 mt-4 overflow-visible">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-6">
        {mainTitle}
      </h2>

      <div className="relative flex items-center w-full overflow-visible">
        <ArrowButton direction="left" onClick={() => scroll("left")} />

        <div
          ref={sliderRef}
          className="w-full h-auto flex gap-4 overflow-x-auto hide-scrollbar scroll-smooth relative"
        >
          {movies.map((movie, index) => {
            const image =
              preferHorizontal && movie.imageHor
                ? movie.imageHor
                : movie.imageVer || movie.imageHor;

            return (
              <MovieCard
                key={index}
                image={image}
                title={showDetails ? movie.title : undefined}
                rating={showDetails ? movie.rating : undefined}
                isNew={movie.isNew}
                topRank={movie.topRank}
                minWidth={minWidth}
                sizeHover={sizeHover}
                textGenreSize={textGenreSize}
              />
            );
          })}
        </div>

        <ArrowButton direction="right" onClick={() => scroll("right")} />
      </div>
    </div>
  );
}
