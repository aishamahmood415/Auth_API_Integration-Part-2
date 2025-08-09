import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Welcome = () => {
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decodedToken = jwtDecode(token);
      setDecoded(decodedToken);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {decoded ? (
          <>
            <h1>Welcome, {decoded.username || "User"}!</h1>
            <p>Email: {decoded.email || "Not provided"}</p>
            <div className="decoded-info">
              <p><strong>User ID:</strong> {decoded.userId}</p>
              <p><strong>Issued At:</strong> {decoded.iat}</p>
              <p><strong>Expires At:</strong> {decoded.exp}</p>
            </div>
          </>
        ) : (
          <p>No token found. Please login.</p>
        )}
      </div>

      {/* CSS */}
      <style>{`
        .welcome-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .welcome-card {
          background: white;
          max-width: 500px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
          padding: 20px;
          text-align: center;
        }
        .welcome-card h1 {
          margin-bottom: 10px;
          color: #333;
        }
        .welcome-card p {
          margin: 5px 0;
          color: #555;
          word-break: break-word;
        }
        .decoded-info {
          margin-top: 20px;
          padding-top: 10px;
          border-top: 1px solid #ddd;
        }
        @media (max-width: 600px) {
          .welcome-card {
            padding: 15px;
          }
          .welcome-card h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
