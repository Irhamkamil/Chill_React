import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../fragments/Navbar";
import HeroSection from "../fragments/HeroSection";
import MovieSlider from "../fragments/MovieSlider";
import Footer from "../fragments/Footer";

import Herobg from "/assets/gambar_kesamping/gambar_duty-school.svg";
import { getAllMovies } from "../../services/API/movieAPI";
// import { movies } from "../../data/movies";
const Home = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk memverifikasi simulasi token JWT
  const verifyJwtToken = (token, secretKey) => {
    try {
      // Memisahkan token menjadi 3 bagian: header, payload, signature
      const [headerBase64, payloadBase64, signatureBase64] = token.split(".");

      // Mendekode payload untuk mendapatkan data pengguna dan expiration
      const payload = JSON.parse(atob(payloadBase64));

      // Memeriksa apakah token sudah kadaluarsa
      if (payload.exp < Math.floor(Date.now() / 1000)) {
        throw new Error("Token telah kadaluarsa");
      }

      // Memverifikasi signature dengan membuat ulang signature dan membandingkannya
      const expectedSignature = btoa(
        headerBase64 + "." + payloadBase64 + secretKey
      );

      if (signatureBase64 !== expectedSignature) {
        throw new Error("Signature tidak valid");
      }

      // Jika semua verifikasi berhasil, kembalikan payload
      return payload;
    } catch (error) {
      // Jika ada error dalam proses dekode atau verifikasi
      throw new Error("Token tidak valid: " + error.message);
    }
  };

  const checkLoginStatus = useCallback(() => {
    try {
      const token = localStorage.getItem("token");
      const currentUser = localStorage.getItem("currentUser");

      // Jika token atau currentUser tidak ada
      if (!token || !currentUser) {
        console.log("Token tidak ada atau data user tidak ada");
        throw new Error("Token tidak valid atau sudah kadaluarsa");
      }

      // Verifikasi token dengan secret key yang sama
      const secretKey = "secretkey";
      const decoded = verifyJwtToken(token, secretKey);
      console.log("Payload token:", decoded.username);

      // Jika verifikasi berhasil, kembalikan true
      return true;
    } catch (error) {
      console.error("Error verifikasi:", error.message);
      // Hapus token tidak valid dan redirect ke login
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");
      return false;
    }
  }, []);

  // Ambil data dari API
  const fetchMovies = useCallback(async () => {
    try {
      const data = await getAllMovies();
      setMovies(data);
    } catch (err) {
      console.error("Gagal mengambil data movie:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Periksa status login ketika komponen dimuat
    const isLoggedIn = checkLoginStatus();

    if (!isLoggedIn) {
      alert("Anda belum login, silahkan login terlebih dahulu");
      navigate("/loginAPI");
      return;
    }

    // Ambil data film jika sudah login
    fetchMovies();
  }, [navigate, checkLoginStatus, fetchMovies]);

  const continueWatch = movies.filter((movie) =>
    movie.category?.includes("continue")
  );
  const topRating = movies.filter((movie) => movie.category?.includes("top"));
  const trending = movies.filter((movie) =>
    movie.category?.includes("trending")
  );
  const latest = movies.filter((movie) => movie.category?.includes("latest"));

  if (loading) {
    return <p className="text-center mt-32">Loading data film...</p>;
  }

  return (
    <>
      <Navbar />
      {/* {username && (
        <div className="bg-blue-500 text-white py-2 px-4 mt-32 text-center">
          Selamat datang, {username}!
        </div>
      )} */}
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
