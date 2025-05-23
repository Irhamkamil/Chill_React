import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../elements/InputForm";
import AuthForm from "../fragments/AuthForm";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Kata sandi dan konfirmasi kata sandi tidak cocok!");
      return;
    }

    // Simpan ke LocalStorage
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    // Ambil data pengguna lama dari localStorage (jika ada)
    const existingUsers = JSON.parse(localStorage.getItem("user")) || [];

    // Cek apakah username sudah digunakan
    const isUsernameTaken = existingUsers.some(
      (user) => user.username === userData.username
    );

    if (isUsernameTaken) {
      alert("Username sudah digunakan! Silahkan pilih username lain.");
      return;
    }

    // Tambahkan pengguna baru ke array
    const updatedUsers = [...existingUsers, userData];

    // Simpan kembali ke LocalStorage dengan key "users" - PERUBAHAN DI SINI!
    localStorage.setItem("user", JSON.stringify(updatedUsers));

    alert("Pendaftaran berhasil! Silahkan masuk.");
    navigate("/login"); // Redirect ke halaman login setelah register
  };

  return (
    <div
      className="flex justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/assets/register_bg.jpg)" }}
    >
      <AuthForm
        title="Daftar"
        subtitle="Buat akun baru sekarang!"
        submitText="Daftar"
        redirectText="Sudah punya akun?"
        redirectBtn="Login"
        redirectLink="/login"
        onSubmit={handleSubmit}
        sizeCard={"w-[529px] h-[790px]"}
      >
        <InputField
          label="Username"
          type="text"
          name="username"
          placeholder="Masukkan username"
          value={formData.username}
          onChange={handleChange}
        />
        <div className="mt-6 w-full">
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Masukkan Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 w-full">
          <InputField
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan kata sandi"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 w-full">
          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            name="confirmPassword"
            placeholder="Masukkan ulang kata sandi"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </AuthForm>
    </div>
  );
};

export default Register;
