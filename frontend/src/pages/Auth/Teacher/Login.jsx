import React, { useState } from "react";
import EmailPasswordFields from "../../../components/Auth/EmailPasswordFields";

import { useNavigate } from "react-router-dom";

import "../../../styles/form.css";

const TeacherLogin = () => {
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

      <h2>Teacher Login</h2>
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

export default TeacherLogin;
