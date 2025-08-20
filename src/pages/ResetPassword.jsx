import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 👇 ForgotPassword se email aayegi
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://os-project-server.vercel.app/auth/reset-password",
        {
          email,
          otp,
          newPassword,
        }
      );

      if (response.status === 200) {
        setMessage("✅ Password reset successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        console.error("API Response Error:", error.response.data);
        setMessage(`❌ ${error.response.data.message || "Failed to reset password"}`);
      } else {
        console.error("Error:", error.message);
        setMessage("❌ Network error, please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleResetPassword}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-md"
        >
          Reset Password
        </button>
        {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
