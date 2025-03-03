import Navbar from "../fragments/Navbar";
import HeroSection from "../fragments/HeroSection";
import MovieSlider from "../fragments/MovieSlider";
import Footer from "../fragments/Footer";

import Herobg from "/assets/gambar_kesamping/gambar_duty-school.svg";
import { movies } from "../../data/movies";
import { moviesTopRating } from "../../data/movies";
import { moviesTrending } from "../../data/movies";
import { LatestReleases } from "../../data/movies";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection imageUrl={Herobg} />
      <MovieSlider movies={movies} mainTitle="Melanjutkan Tonton Film" />
      <MovieSlider
        movies={moviesTopRating}
        mainTitle="Top Rating Film"
        showDetails={false}
        minWidth="min-w-[8.5rem] md:min-w-[18rem]"
      />
      <MovieSlider
        movies={moviesTrending}
        mainTitle="Trending Film"
        showDetails={false}
        minWidth="min-w-[8.5rem] md:min-w-[18rem]"
      />
      <MovieSlider
        movies={LatestReleases}
        mainTitle="Latest Releases"
        showDetails={false}
        minWidth="min-w-[8.5rem] md:min-w-[18rem]"
      />
      <Footer />
    </>
  );
};

export default Home;
