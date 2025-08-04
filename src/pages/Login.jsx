import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg';
import sideImage from '../assets/side-image.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden">
       
        <div className="w-full md:w-1/2 p-10">
          <div className="mb-8">
            <img src={logo} alt="Logo" className="h-21 w-40" />
          </div>

          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">Login to access your account</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="john.doe@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link
                to="/forgot-password"
                className="text-right mt-1 text-sm text-blue-500 hover:underline block"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <label className="text-sm text-gray-700">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </div>

          <div className="flex justify-center space-x-4">
  <button onClick={() => alert("Facebook login not implemented yet")}>
    <img src="/icons/facebook.png" alt="Facebook" className="h-10 w-[88px] border-b-2 border-blue-500" />
  </button>
  <button onClick={() => alert("Google login not implemented yet")}>
    <img src="/icons/google.png" alt="Google" className="h-10 w-[88px] border-b-2 border-blue-500" />
  </button>
  <button onClick={() => alert("Apple login not implemented yet")}>
    <img src="/icons/apple.png" alt="Apple" className="h-10 w-[88px] border-b-2 border-blue-500" />
  </button>
</div>

        </div>

        <div className="w-1/2 relative flex items-center justify-center bg-white overflow-hidden">
          <img src={sideImage} alt="Side Illustration" className="w-[80%] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Login;
