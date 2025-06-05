// src/pages/Student/StudentRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailPasswordFields from "../../../components/Auth/EmailPasswordFields";

import "../../../styles/form.css";

const StudentRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
  };

  return (
    <div className="form-container">
      <button onClick={() => navigate("/")} className="back-btn">
        ← Back to Home
      </button>

      <h2>Student Registration</h2>
      <form onSubmit={handleRegister}>
        <EmailPasswordFields
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          showConfirmPassword={true}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentRegister;
