import React, { useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://os-project-server.vercel.app/auth/send-otp",
        { email }
      );
  
      if (response.status === 200) {
        setMessage("✅ OTP sent successfully! Check your email.");
        setTimeout(() => {
          navigate("/reset-password", { state: { email } }); // sirf email bhejo
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        console.error("API Response Error:", error.response.data);
        setMessage(`❌ ${error.response.data.message || "Failed to send OTP"}`);
      } else {
        console.error("Error:", error.message);
        setMessage("❌ Network error, please try again.");
      }
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSendOtp}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          Send OTP
        </button>
        {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
