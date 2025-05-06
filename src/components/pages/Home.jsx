import Navbar from "../fragments/Navbar";
import HeroSection from "../fragments/HeroSection";
import MovieSlider from "../fragments/MovieSlider";
import Footer from "../fragments/Footer";

import Herobg from "/assets/gambar_kesamping/gambar_duty-school.svg";
import { movies } from "../../data/movies";
const Home = () => {
  const continueWatch = movies.filter((movie) =>
    movie.category?.includes("continue")
  );
  const topRating = movies.filter((movie) => movie.category?.includes("top"));
  const trending = movies.filter((movie) =>
    movie.category?.includes("trending")
  );
  const latest = movies.filter((movie) => movie.category?.includes("latest"));

  return (
    <>
      <Navbar />
      <HeroSection imageUrl={Herobg} />
      <MovieSlider
        movies={continueWatch}
        mainTitle="Melanjutkan Tonton Film"
        preferHorizontal={true}
        minWidth="min-w-[18.5rem] md:min-w-[22rem] lg:min-w-[25rem]"
        sizeHover="w-full h-1/2"
        textGenreSize="text-[0.8rem] md:text-sm"
      />
      <MovieSlider
        movies={topRating}
        mainTitle="Top Rating Film"
        preferHorizontal={false}
        // showDetails={false}
        minWidth="min-w-[8.5rem] md:min-w-[18rem] lg:min-w-[21rem]"
        sizeHover="w-full h-1/3 md:h-1/4"
        textGenreSize="text-[0.5rem] md:text-sm"
      />
      <MovieSlider
        movies={trending}
        mainTitle="Trending Film"
        preferHorizontal={false}
        // showDetails={false}
        minWidth="min-w-[8.5rem] md:min-w-[18rem] lg:min-w-[21rem]"
        sizeHover="w-full h-1/3 md:h-1/4"
        textGenreSize="text-[0.5rem] md:text-sm"
      />
      <MovieSlider
        movies={latest}
        mainTitle="Latest Releases"
        preferHorizontal={false}
        // showDetails={false}
        minWidth="min-w-[8.5rem] md:min-w-[18rem] lg:min-w-[21rem]"
        sizeHover="w-full h-1/3 md:h-1/4"
        textGenreSize="text-[0.5rem] md:text-sm"
      />
      <Footer />
    </>
  );
};

export default Home;
