import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../fragments/Navbar";
import HeroSection from "../fragments/HeroSection";
import MovieSlider from "../fragments/MovieSlider";
import Footer from "../fragments/Footer";

import Herobg from "/assets/gambar_kesamping/gambar_duty-school.svg";
import { movies } from "../../data/movies";
const Home = () => {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    const secretKey = "rahasia_kunci_simulasi_belajar_jwt"; // Harus sama dengan yang digunakan di Login

    if (!token) {
      alert("Anda belum login. Silakan login terlebih dahulu.");
      navigate("/login");
      return;
    }

    try {
      // Verifikasi token dan dapatkan data pengguna
      const decoded = verifyJwtToken(token, secretKey);
      // setUsername(decoded.username);
      console.log("Selamat datang:", decoded.username);
    } catch (err) {
      console.error("Token tidak valid atau sudah kadaluarsa:", err.message);
      alert("Sesi Anda telah berakhir. Silakan login kembali.");
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

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
