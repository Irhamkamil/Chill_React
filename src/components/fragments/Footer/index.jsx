import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-600 mt-6 text-white">
      {/* Footer untuk Mobile */}
      <div className="flex flex-col px-4 py-6 md:hidden">
        <div className="flex flex-col items-start">
          <img src="assets/logo.svg" alt="logo" className="w-24 mb-2" />
          <p className="text-sm text-gray-400">
            @2025 Chill All Rights Reserved
          </p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <h3 className="text-lg">Genre</h3>
          <span>
            <MdOutlineKeyboardArrowDown
              name="chevron-forward-outline"
              className="text-xl"
            ></MdOutlineKeyboardArrowDown>
          </span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h3 className="text-lg">Bantuan</h3>
          <span>
            <MdOutlineKeyboardArrowDown
              name="chevron-forward-outline"
              className="text-xl"
            ></MdOutlineKeyboardArrowDown>
          </span>
        </div>
      </div>

      {/* Footer untuk Medium ke Atas */}
      <div className="hidden md:flex gap-4 justify-between px-8 py-6">
        {/* Logo & Copyright */}
        <div className="flex-1 flex flex-col justify-center">
          <img src="assets/logo.svg" alt="logo" className="w-24 md:w-36 mb-2" />
          <p className="text-sm text-gray-400">
            @2025 Chill All Rights Reserved
          </p>
        </div>

        {/* Genre Section */}
        <div className="flex-2 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div>
            <h3 className="font-semibold mb-2">Genre</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Aksi</li>
              <li>Anak - anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 space-y-2 mt-4 md:mt-7.5">
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 space-y-2 mt-4 md:mt-7.5">
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400 space-y-2 mt-4 md:mt-7.5">
              <li>Sains & Alam</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>

        {/* Bantuan Section */}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">Bantuan</h3>
          <ul className="text-gray-400 space-y-2">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
