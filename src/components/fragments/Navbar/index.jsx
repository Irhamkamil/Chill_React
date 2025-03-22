import { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUser, FaStar, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import largeLogo from "/assets/logo.svg";
import smallLogo from "/assets/movie-small-logo.svg";
import userLogo from "/assets/user.svg";

const Navbar = () => {
  const menuItems = [
    { name: "Series", path: "/series" },
    { name: "Film", path: "/film" },
    { name: "Daftar Saya", path: "/daftar-saya" }
  ];
  const [isMedium, setIsMedium] = useState(window.innerWidth >= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Handle resize event
  useEffect(() => {
    const handleResize = () => {
      setIsMedium(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 w-full h-15 fixed z-50 bg-bg-1 top-0">
      <div className="flex items-center gap-5 md:gap-12">
        <Link to="/home">
          <img
            src={isMedium ? largeLogo : smallLogo}
            alt="Logo"
            className="w-7 md:w-24"
          />
        </Link>
        <ul className="flex gap-5 md:gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-medium md:text-lg font-bold cursor-pointer"
            >
              <Link
                to={item.path}
                className="relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile Section */}
      <div className="relative flex items-center gap-4" ref={dropdownRef}>
        <img src={userLogo} alt="Profile" className="w-8 md:w-9 rounded-full" />
        <span
          className="relative text-xl md:text-2xl cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <MdOutlineKeyboardArrowDown />
        </span>

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 top-12 w-48 bg-gray-900 shadow-lg rounded-lg py-2 text-white transition-dropdown ${
            isDropdownOpen ? "visible-dropdown" : "hidden-dropdown"
          }`}
        >
          <div className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-700">
            <FaUser className="text-blue-500" />
            <span>Profil Saya</span>
          </div>
          <div className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-700">
            <FaStar className="text-yellow-500" />
            <span>Ubah Premium</span>
          </div>
          <div className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-700">
            <FaSignOutAlt className="text-red-500" />
            <button onClick={handleLogout}>Keluar</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
