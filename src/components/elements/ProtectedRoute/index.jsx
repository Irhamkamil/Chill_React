import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Fungsi verifikasi token JWT buatan sendiri
  const isTokenValid = () => {
    if (!token) return false;
    try {
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      const now = Math.floor(Date.now() / 1000);
      return decodedPayload.exp > now;
    } catch (error) {
      return false;
    }
  };

  if (!token || !currentUser || !isTokenValid()) {
    alert("Anda harus login terlebih dahulu!");
    return <Navigate to="/loginAPI" replace />;
  }

  return children;
};

export default ProtectedRoute;
