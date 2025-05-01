import InputForm from "../elements/InputForm";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="w-full h-full flex flex-col sm:flex-row md:gap-5">
        <div className="order-1 sm:order-2 w-full px-4 mb-5 mt-20">
          <div className="bg-gray-700 text-white rounded-2xl p-6 flex gap-4 shadow-lg">
            <div className="flex items-start gap-2">
              <img
                src="/assets/warning.svg"
                alt="subscribe"
                className="min-w-20 h-25"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">
                Saat Ini Anda Belum Berlangganan
              </h2>
              <p className="text-sm mt-1">
                Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                Kamu!
              </p>
              <div className="flex justify-end">
                <button className="bg-gray-800 text-white text-sm font-medium py-2 px-4 mt-2 rounded-full hover:bg-gray-900 transition">
                  Mulai Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>

        <form
          className="order-2 sm:order-1 w-full flex flex-col gap-4 px-4 py-2 mb-10 mt-17"
          // onSubmit={}
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
            // value={loginData.username}
            // onChange={handleChange}
          />
          <InputForm
            label="Email"
            type="email"
            name="email"
            placeholder="Masukkan Email"
            // value={loginData.username}
            // onChange={handleChange}
          />
          <InputForm
            label="Password"
            type="password"
            name="password"
            placeholder="Masukkan Password"
            // value={loginData.username}
            // onChange={handleChange}
          />
          {/* Submit Button */}
          <div className="mt-4 flex items-center justify-start">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-800 text-white py-2 px-7 rounded-full font-semibold hover:bg-blue-600 transition-all"
            >
              Edit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
