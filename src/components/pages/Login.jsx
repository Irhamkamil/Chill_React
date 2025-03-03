import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "../elements/InputForm";
import AuthForm from "../fragments/AuthForm";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data dari localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("Akun tidak ditemukan! Silakan daftar terlebih dahulu.");
      return;
    }

    // Cek apakah username dan password cocok
    if (
      loginData.username === storedUser.username &&
      loginData.password === storedUser.password
    ) {
      alert("Login berhasil!");
      navigate("/home"); // Redirect ke halaman home setelah login
    } else {
      alert("Username atau kata sandi salah!");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/assets/login_bg.jpg)" }}
    >
      <AuthForm
        title="Masuk"
        subtitle="Selamat datang kembali!"
        submitText="Masuk"
        redirectText="Belum punya akun?"
        redirectBtn="Daftar"
        redirectLink="/register"
        onSubmit={handleSubmit}
        sizeCard={"w-[529px] h-[600px]"}
      >
        <InputField
          label="Username"
          type="text"
          name="username"
          placeholder="Masukkan username"
          value={loginData.username}
          onChange={handleChange}
        />
        <div className="mt-4 w-full">
          <InputField
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Masukkan kata sandi"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
