import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sideImage from "../assets/sideImageSignup.png";
import logo from '../assets/logo.jpg';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!password || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password set successfully!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white flex flex-col md:flex-row w-full max-w-5xl rounded-2xl shadow-lg overflow-hidden">
      
  <div className="w-full md:w-1/2 p-6 sm:p-10">

         <div className="mb-8">
                    <img src={logo} alt="Logo" className="h-21 w-40" />
                  </div>
          <h2 className="text-3xl font-bold mb-2">Set a password</h2>
          <p className="text-sm text-gray-600 mb-6">
            Your previous password has been reset. Please set a new password for your account.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Create Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Re-enter Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
            >
              Set Password
            </button>
          </form>
        </div>

        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-white">

          <img src={sideImage} alt="Side Illustration" className="w-[80%] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
