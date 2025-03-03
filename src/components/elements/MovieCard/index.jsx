import NewEpisode from "../NewEpisode";
import TopRank from "../TopRank";
const MovieCard = ({
  image,
  title,
  rating,
  isNew,
  topRank,
  minWidth = "min-w-[18.5rem] md:min-w-[20.5rem]"
}) => {
  return (
    <div
      className={`${minWidth} rounded-lg overflow-hidden relative brightness-90`}
    >
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      {isNew && <NewEpisode />}
      {topRank && <TopRank />}
      <div className="absolute bottom-2 left-2 bg-transparent bg-opacity-50 px-2 w-full text-white font-semibold">
        {title}
      </div>
      <div className="absolute bottom-2 right-2 text-white bg-transparent bg-opacity-50 px-2 py-1 rounded-md text-sm">
        {rating ? `⭐ ${rating}` : ""}
      </div>
    </div>
  );
};

export default MovieCard;
