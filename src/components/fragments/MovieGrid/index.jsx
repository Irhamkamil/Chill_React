import MovieCard from "../../elements/MovieCard";

const MovieGrid = ({
  movies,
  mainTitle,
  showDetails = true,
  minWidth,
  sizeHover,
  textGenreSize
}) => {
  return (
    <div className="mt-10 text-white">
      {mainTitle && <h1 className="text-2xl font-bold mb-4">{mainTitle}</h1>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => {
          const image = movie.imageVer || movie.imageHor;
          const props = {
            image,
            imageVer: movie.imageVer,
            imageHor: movie.imageHor,
            isNew: movie.isNew,
            topRank: movie.topRank,
            minWidth,
            sizeHover,
            textGenreSize
          };

          if (showDetails) {
            props.title = movie.title;
            props.rating = movie.rating;
          }

          return <MovieCard key={movie.title} {...props} />;
        })}
      </div>
    </div>
  );
};

export default MovieGrid;
