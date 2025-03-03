const CardMovies = ({ imgMovies, altMovies, width, titleMovie, rating }) => {
  return (
    <div
      className={`${width} rounded-lg flex-shrink-0 overflow-hidden relative brightness-[85%]`}
    >
      <img
        src={`${imgMovies}`}
        alt={`${altMovies}`}
        className="w-full h-auto object-cover"
      />
      <div className="absolute flex items-center z-10 p-2 bottom-0 ">
        {titleMovie}
      </div>
      <div className="absolute flex items-center bottom-0 right-0 text-medium text-white">
        <span>⭐</span>
        <span>{rating}/5</span>
      </div>
    </div>
  );
};

export default CardMovies;
