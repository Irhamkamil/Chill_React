import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home";
// import Login from "./components/pages/Login";
import LoginAPI from "./components/pages/LoginAPI";
// import Register from "./components/pages/Register";
import RegisterAPI from "./components/pages/RegisterAPI";
import ProtectedRoute from "./components/elements/ProtectedRoute";
import NotFound from "./components/elements/NotFound";
import MyList from "./components/pages/MyList";
// import Profile from "./components/pages/Profile";
import ProfileAPI from "./components/pages/ProfileAPI";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginAPI />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/loginAPI" element={<LoginAPI />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/registerAPI" element={<RegisterAPI />} />

        <Route
          path="/mylist"
          element={
            <ProtectedRoute>
              <MyList />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/profileAPI"
          element={
            <ProtectedRoute>
              <ProfileAPI />
            </ProtectedRoute>
          }
        />

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
