// src/components/EmailPasswordFields.jsx
import React, { useState } from "react";
import "../../styles/EmailPasswordFields.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons

const EmailPasswordFields = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showConfirmPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(value) ? "" : "Enter a valid email address");
  };

  const validatePassword = (value) => {
    setPasswordError(
      value.length >= 6 ? "" : "Password must be at least 6 characters"
    );
  };

  const validateConfirmPassword = () => {
    setConfirmError(
      password === confirmPassword ? "" : "Passwords do not match"
    );
  };

  const getPasswordStrength = () => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return "Strong";
    } else if (password.length >= 6) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  return (
    <>
      {/* Email Input */}
      <div className="input-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail(email)}
          required
          placeholder=" "
        />
        <label>Email ID</label>
        {emailError && <p className="error">{emailError}</p>}
      </div>

      {/* Password Input */}
      <div className="input-group">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)}
          required
          placeholder=" "
        />
        <label>Password</label>
        <span className="toggle-password" onClick={togglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {passwordError && <p className="error">{passwordError}</p>}
        {password && (
          <p className={`strength ${getPasswordStrength().toLowerCase()}`}>
            Password Strength: {getPasswordStrength()}
          </p>
        )}
      </div>

      {/* Confirm Password Input (only if showConfirmPassword is true) */}
      {showConfirmPassword && (
        <div className="input-group">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
            required
            placeholder=" "
          />
          <label>Confirm Password</label>

          {confirmError && <p className="error">{confirmError}</p>}
        </div>
      )}
    </>
  );
};

export default EmailPasswordFields;
