import MovieCard from "../../elements/MovieCard";

const MovieGrid = ({
  movies,
  mainTitle,
  showDetails = "true",
  minWidth,
  sizeHover,
  textGenreSize
}) => {
  return (
    <div className="p-6 mt-15 text-white">
      <h1 className="text-2xl font-bold mb-4">{mainTitle}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
            sizeHover={sizeHover}
            textGenreSize={textGenreSize}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
