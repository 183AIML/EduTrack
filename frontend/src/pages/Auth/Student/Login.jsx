// src/pages/Student/StudentLogin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailPasswordFields from "../../../components/Auth/EmailPasswordFields";

import "../../../styles/form.css";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: API call
    alert(`Login with ${email}`);
  };

  return (
    <div className="form-container">
      <button onClick={() => navigate("/")} className="back-btn">
        ← Back to Home
      </button>

      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>
        <EmailPasswordFields
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentLogin;
