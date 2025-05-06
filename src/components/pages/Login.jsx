import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputForm from "../elements/InputForm";
import AuthForm from "../fragments/AuthForm";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk membuat simulasi token JWT
  const createJwtToken = (payload, secretKey) => {
    // Header standar untuk JWT
    const header = { alg: "HS256", typ: "JWT" };

    // Mengubah header dan payload menjadi base64
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));

    // Simulasi signature
    // Menggabungkan header, payload, dan kunci rahasia kemudian encode dengan base64
    const signature = btoa(encodedHeader + "." + encodedPayload + secretKey);

    // Format JWT: header.payload.signature
    return `${encodedHeader}.${encodedPayload}.${signature}`;
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
      // Buat payload JWT dengan data pengguna dan waktu kedaluwarsa
      const payload = {
        username: storedUser.username,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12, // 12 jam dari sekarang
        iat: Math.floor(Date.now() / 1000) // issued at time
      };

      // Kunci rahasia (hanya untuk simulasi/pembelajaran)
      const secretKey = "rahasia_kunci_simulasi_belajar_jwt";

      // Buat token JWT
      const token = createJwtToken(payload, secretKey);

      // Simpan token ke localStorage
      localStorage.setItem("token", token);

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
        <InputForm
          label="Username"
          type="text"
          name="username"
          placeholder="Masukkan username"
          value={loginData.username}
          onChange={handleChange}
        />
        <div className="mt-4 w-full">
          <InputForm
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
