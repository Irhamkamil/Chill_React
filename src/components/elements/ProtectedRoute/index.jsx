import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("Anda harus login terlebih dahulu!");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
