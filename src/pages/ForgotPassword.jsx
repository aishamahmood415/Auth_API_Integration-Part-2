import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sideImageForgot from "../assets/sideImageForgot.png"; 
import logo from '../assets/logo.jpg';

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We’ve sent a password reset link to your email.");
    navigate("/reset-password");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Card */}
      <div className="m-auto flex w-[90%] max-w-6xl h-[90%] shadow-lg rounded-xl overflow-hidden bg-white">

        {/* Left: Form */}
       <div className="w-full md:w-1/2 p-6 sm:p-10">

         <div className="mb-8">
                    <img src={logo} alt="Logo" className="h-21 w-40" />
                  </div>
          <Link to="/" className="text-blue-600 text-sm hover:underline mb-4">&lt; Back to login</Link>

          <h2 className="text-3xl font-bold text-black mb-2">Forgot your password?</h2>
          <p className="text-gray-800 mb-6">
            Don’t worry, happens to all of us. Enter your email below to recover your password.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          <div className="my-6 text-center text-gray-400">or login with</div>

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

        {/* Right: Side Image */}
       <div className="hidden md:flex w-full md:w-1/2 items-center justify-center bg-white">

          <img
            src={sideImageForgot}
            alt="Side"
            className="h-[80%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
