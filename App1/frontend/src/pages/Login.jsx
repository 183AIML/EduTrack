import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailPasswordFields from "../components/Auth/EmailPasswordFields";
import Loader from "../components/Loader";
import "../styles/form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const err = await res.json();
        setLoginError(err.error || "Invalid credentials");
        setLoading(false);
        return;
      }
      const data = await res.json();
      localStorage.setItem("token", data.token);
      // Get user role for redirect
      const meRes = await fetch("/dashboard/me", {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      const me = await meRes.json();
      if (me.role === "STUDENT") navigate("/dashboard/student");
      else if (me.role === "TEACHER") navigate("/dashboard/teacher");
      else setLoginError("Unknown role");
    } catch {
      setLoginError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <button onClick={() => navigate("/")} className="back-btn mb16">
        ← Back to Home
      </button>
      <h2 className="text-center mb24">Login</h2>
      <form onSubmit={handleLogin}>
        <EmailPasswordFields
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        {loginError && <div className="error mb8">{loginError}</div>}
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" className="w100 mt16">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
