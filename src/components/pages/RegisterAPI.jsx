import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../elements/InputForm";
import AuthForm from "../fragments/AuthForm";
import { getAllUsers, registerUser } from "../../services/API/userAPI";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    try {
      const existingUsers = await getAllUsers();
      const isUsernameTaken = existingUsers.some(
        (user) => user.username === formData.username
      );
      if (isUsernameTaken) {
        alert("Username sudah digunakan!");
        return;
      }

      await registerUser({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      alert("Pendaftaran berhasil!");
      navigate("/loginAPI");
    } catch (error) {
      alert("Gagal mendaftar: " + error.message);
    }
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
        redirectLink="/loginAPI"
        onSubmit={handleSubmit}
        sizeCard={"w-[529px] h-[790px]"}
      >
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <div className="mt-6 w-full">
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 w-full">
          <InputField
            label="Kata Sandi"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 w-full">
          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      </AuthForm>
    </div>
  );
};

export default Register;
