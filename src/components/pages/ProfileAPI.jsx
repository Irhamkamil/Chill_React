import { useState, useEffect } from "react";
import axios from "axios";
import InputForm from "../elements/InputForm";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    id: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(userData.email)) {
      setEmailError("Email tidak valid");
      return;
    }
    setEmailError("");
    setShowModal(true);
  };

  const handleConfirmSave = async () => {
    try {
      const { id, ...dataToUpdate } = userData;
      const response = await axios.put(
        `https://68147574225ff1af1628e622.mockapi.io/users/${id}`,
        dataToUpdate
      );

      // Update data yang baru di localStorage
      localStorage.setItem("currentUser", JSON.stringify(response.data));
      alert("Data berhasil diperbarui!");
    } catch (error) {
      console.error("Gagal update data:", error);
      alert("Terjadi kesalahan saat mengupdate data.");
    } finally {
      setShowModal(false);
    }
  };

  const handleDeleteAccount = () => {
    setShowDeleteModal(true);
  };

  const confirmDeleteAccount = async () => {
    try {
      await axios.delete(
        `https://68147574225ff1af1628e622.mockapi.io/users/${userData.id}`
      );
      localStorage.removeItem("currentUser");
      alert("Akun berhasil dihapus.");
      window.location.href = "/registerAPi";
    } catch (error) {
      console.error("Gagal menghapus akun:", error);
      alert("Terjadi kesalahan saat menghapus akun.");
    } finally {
      setShowDeleteModal(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full h-full flex flex-col sm:flex-row md:gap-5">
        <div className="order-1 sm:order-2 w-full px-4 mb-5 mt-20">
          <div className="w-full bg-gray-700 text-white rounded-2xl p-6 flex gap-4 shadow-lg">
            <div className="flex items-start">
              <img
                src="/assets/warning.svg"
                alt="subscribe"
                className="w-20 h-25 object-contain"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h2 className="text-lg font-semibold">
                Saat Ini Anda Belum Berlangganan
              </h2>
              <p className="text-sm mt-1">
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
              <div className="flex justify-end">
                <button className="bg-gray-800 text-white text-sm font-semibold py-3 px-5 mt-2 rounded-full hover:bg-gray-900 transition">
                  Mulai Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>

        <form
          className="order-2 sm:order-1 w-full flex flex-col gap-4 px-4 py-2 mb-10 mt-17"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-bold">Profil Saya</h1>

          <div className="w-full flex gap-10 justify-start">
            <div>
              <img
                src="/assets/user.svg"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-5">
              <button className="w-full bg-transparent outline-2 outline-outline-1 text-outline-1 py-1 px-3 rounded-full font-semibold hover:outline-0 hover:bg-blue-600 hover:text-white transition-all">
                Ubah foto
              </button>
              <div className="w-full flex gap-4">
                <img src="/assets/upload.svg" alt="upload" />
                <p className="text-sm text-gray-400">Maksimal 2MB</p>
              </div>
            </div>
          </div>

          <InputForm
            label="Username"
            type="text"
            name="username"
            placeholder="Masukkan username"
            value={userData.username}
            onChange={handleChange}
          />
          <InputForm
            label="Email"
            type="email"
            name="email"
            placeholder="Masukkan Email"
            value={userData.email}
            onChange={handleChange}
            errorMessage={emailError}
          />
          <InputForm
            label="Password"
            type="password"
            name="password"
            placeholder="Masukkan Password"
            value={userData.password}
            onChange={handleChange}
          />

          <div className="mt-4 gap-5 flex items-center justify-start">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-800 text-white py-2 px-7 text-sm md:text-base rounded-full font-semibold hover:bg-blue-600 transition-all"
            >
              Edit
            </button>

            <button
              onClick={handleDeleteAccount}
              type="button"
              className="w-full md:w-auto mt-1 bg-red-600 text-white py-2 px-7 text-sm md:text-base rounded-full font-semibold hover:bg-red-800 transition-all"
            >
              Hapus Akun
            </button>
          </div>
        </form>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-300 ease-out">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <h2 className="text-lg text-black font-semibold mb-4">
                Apakah data sudah sesuai?
              </h2>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleConfirmSave}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
                >
                  Iya
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity duration-300 ease-out">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <h2 className="text-lg text-black font-semibold mb-4">
                Apakah kamu yakin ingin menghapus akun ini?
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Tindakan ini tidak dapat dibatalkan dan akan menghapus semua
                data akun kamu.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={confirmDeleteAccount}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-800 transition"
                >
                  Hapus
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Profile;
