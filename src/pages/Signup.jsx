import React from "react";
import sideImageSignup from "../assets/sideImageSignup.png";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

function Signup() {
  return (
    <div className="flex h-screen bg-gray-100">
    
      <div className="m-auto flex w-[90%] max-w-6xl h-[90%] shadow-lg rounded-xl overflow-hidden bg-white">

        <div className="w-1/2 flex items-center justify-center bg-white">
          <img
            src={sideImageSignup}
            alt="Side"
            className="h-[80%] object-contain"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center px-8">
          <div className="w-full max-w-md">
          <div className="mb-8">
                      <img src={logo} alt="Logo" className="h-21 w-40" />
                    </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign up</h2>
            <p className="text-gray-500 mb-6 text-sm">
              Let’s get you all set up so you can access your personal account.
            </p>

            <form className="space-y-4">
              
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              
              <div className="flex space-x-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" id="terms" className="accent-blue-600" />
                <label htmlFor="terms">
                  I agree to all the <span className="text-blue-600 underline">Terms</span> and <span className="text-blue-600 underline">Privacy Policies</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </div>
            <div className="my-6 text-center text-gray-400">Or sign up with</div>

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
        </div>

      </div>
    </div>
  );
}

export default Signup;
