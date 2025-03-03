import Button from "../../elements/Button";

import soundLogo from "/assets/soundoff.svg";

const HeroSection = ({ imageUrl }) => {
  return (
    <div
      className="relative top-12 w-full h-[400px] lg:h-[600px] flex justify-between items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative z-10 w-full px-4 md:px-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Duty After School</h1>
        <p className="max-w-2xl mt-2 text-sm md:text-lg line-clamp-2 ">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam
          keputusasaan,Departemen Pertahanan mulai merekrut lebih banyak
          tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi
          pejuang garis depan dalam perang.
        </p>

        <div className="mt-4 flex items-center gap-4 !bg-transparent">
          <Button bg_color="bg-button-1">Mulai</Button>
          <Button>Selengkapnya</Button>
          <Button
            bg_color="bg-transparent"
            px="px-1"
            py="py-1"
            className="text-xs border-2 border-solid border-white"
          >
            18+
          </Button>
        </div>
      </div>
      <div className="relative mt-28 mr-6 md:mr-8 w-9 h-8 rounded-full bg-transparent border-2 border-solid border-white flex justify-center items-center">
        <img src={soundLogo} alt="Sound Icon" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default HeroSection;
