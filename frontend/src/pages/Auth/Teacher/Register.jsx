import React, { useState } from "react";
import EmailPasswordFields from "../../../components/Auth/EmailPasswordFields";

import { useNavigate } from "react-router-dom";

import "../../../styles/form.css";

const TeacherRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Send to backend
    alert(`Registering ${email}`);
  };

  return (
    <div className="form-container">
      <button onClick={() => navigate("/")} className="back-btn">
        ← Back to Home
      </button>

      <h2>Teacher Registration</h2>
      <form onSubmit={handleRegister}>
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

export default TeacherRegister;
