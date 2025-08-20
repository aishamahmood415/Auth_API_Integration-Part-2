import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User } from "lucide-react"; // 👈 user icon add

const Welcome = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("userData");

    if (!token) {
      navigate("/login");
      return;
    }

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username) {
        setUsername(parsedUser.username);

        // Email laane ke liye API call
        axios
          .get("https://os-project-server.vercel.app/auth/users")
          .then((res) => {
            const foundUser = res.data.find(
              (u) => u.username === parsedUser.username
            );
            if (foundUser) {
              setEmail(foundUser.email);
            }
          })
          .catch((err) => console.error("Error fetching users:", err));
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg text-center transition transform hover:scale-[1.01]">
        {/* Profile Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 shadow-sm">
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome 🎉</h1>

        {/* User Info */}
        {username ? (
          <>
            <p className="text-lg text-gray-700 mb-2">
              Hello, <span className="font-semibold">{username}</span> 👋
            </p>
            {email && (
              <p className="text-md text-gray-500">
                Your email: <span className="font-medium">{email}</span>
              </p>
            )}
          </>
        ) : (
          <p className="text-gray-600">Loading user info...</p>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Welcome;
