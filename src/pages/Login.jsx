import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import logo from '../assets/logo.jpg';
import sideImage from '../assets/side-image.png';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://os-project-server.vercel.app/auth/existinguser',
        { username, password }
      );

      const token = response.data.token;
      localStorage.setItem("authToken", token);

      // Decode token
      const userData = jwtDecode(token);
      localStorage.setItem("userData", JSON.stringify(userData));

      navigate("/welcome");
    } catch (error) {
      alert("Login failed. Check username/password.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <div className="mb-8">
            <img src={logo} alt="Logo" className="h-21 w-40" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">Login to access your account</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            {/* Username */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Link
                to="/forgot-password"
                className="text-right mt-1 text-sm text-blue-500 hover:underline block"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <label className="text-sm text-gray-700">Remember me</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Sign up link */}
          <div className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-white">
          <img src={sideImage} alt="Side Illustration" className="w-[80%] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Login;
