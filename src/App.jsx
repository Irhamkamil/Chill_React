import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ProtectedRoute from "./components/elements/ProtectedRoute";
import NotFound from "./components/elements/NotFound";
import MyList from "./components/pages/MyList";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/daftar-saya" element={<MyList />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
