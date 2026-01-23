// components/auth/Logout.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth.api";

const Logout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-5 py-3 rounded-full text-lg text-gray-300 hover:bg-gray-900 hover:text-white transition"
    >
      Logout
    </button>
  );
};

export default Logout;
