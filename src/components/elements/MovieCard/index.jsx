import { IoMdArrowDropright } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import NewEpisode from "../NewEpisode";
import TopRank from "../TopRank";
const MovieCard = ({ image, title, rating, isNew, topRank, minWidth }) => {
  return (
    <div
      className={`${minWidth} relative group rounded-lg transition-all duration-300 shadow-md hover:shadow-lg overflow-visible`}
    >
      <img src={image} alt={title} className="w-full h-full object-cover" />
      {isNew && <NewEpisode />}
      {topRank && <TopRank />}
      <div className="absolute bottom-2 left-2 bg-transparent bg-opacity-50 px-2 w-full text-white font-semibold">
        {title}
      </div>
      <div className="absolute bottom-2 right-2 text-white bg-transparent bg-opacity-50 px-2 py-1 rounded-md text-sm">
        {rating ? `⭐ ${rating}` : ""}
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-80 opacity-0 
        group-hover:opacity-100 transition-all duration-300 
        z-10 "
      >
        {/* <img
          src={image}
          alt={title}
          className="w-full h-1/2 object-cover rounded-t-lg"
        /> */}
        <div className=" flex flex-col justify-center gap-3 px-4 text-white">
          <div className="flex justify-between mt-4">
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-300 cursor-pointer"
              >
                <IoMdArrowDropright size={30} />
              </button>

              <button
                onClick={() => scroll("left")}
                className="bg-transparent text-white w-7 h-7 outline-1 outline-white hover:outline-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <FaCheck size={15} />
              </button>
            </div>
            <button
              onClick={() => scroll("left")}
              className="bg-transparent text-white w-7 h-7 outline-1 outline-white hover:outline-gray-300 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <MdOutlineKeyboardArrowDown size={22} />
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 md:gap-5 text-gray-300 text-[0.5rem] md:text-sm">
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
