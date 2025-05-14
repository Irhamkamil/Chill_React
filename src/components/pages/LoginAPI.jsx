import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../elements/InputForm";
import AuthForm from "../fragments/AuthForm";
import { getAllUsers } from "../../services/API/userAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createJwtToken = (payload, secretKey) => {
    const header = { alg: "HS256", typ: "JWT" };
    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));
    const signature = btoa(encodedHeader + "." + encodedPayload + secretKey);
    return `${encodedHeader}.${encodedPayload}.${signature}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const users = await getAllUsers();
      const matchedUser = users.find(
        (user) =>
          user.username === loginData.username &&
          user.password === loginData.password
      );

      if (!matchedUser) {
        alert("Username atau password salah!");
        return;
      }

      const payload = {
        username: matchedUser.username,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 12,
        iat: Math.floor(Date.now() / 1000)
      };

      const token = createJwtToken(payload, "secretkey");
      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));

      alert("Login berhasil!");
      navigate("/home");
    } catch (error) {
      alert("Gagal login: " + error.message);
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
        redirectLink="/registerAPI"
        onSubmit={handleSubmit}
        sizeCard={"w-[529px] h-[600px]"}
      >
        <InputForm
          label="Username"
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <div className="mt-4 w-full">
          <InputForm
            label="Kata Sandi"
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
