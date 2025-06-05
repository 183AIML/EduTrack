// src/components/Auth/EmailPasswordFields.jsx
import React, { useState } from "react";

const EmailPasswordFields = ({ email, password, setEmail, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ paddingRight: "60px" }}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            background: "none",
            border: "none",
            fontSize: "0.8rem",
            color: "#007bff",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default EmailPasswordFields;
