import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailPasswordFields from "../components/Auth/EmailPasswordFields";
import Loader from "../components/Loader";
import "../styles/form.css";

const Register = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    // Frontend email format check
    if (!/^\S+@\S+\.\S+$/.test(email))
      return setError("Please enter a valid email address");
    if (!role) return setError("Please select a role");
    // Strong password check
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      return setError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      );
    }
    if (password !== confirmPassword) return setError("Passwords do not match");
    setLoading(true);
    try {
      // Only store in localStorage, do not call backend yet
      localStorage.setItem("registerEmail", email);
      localStorage.setItem("registerPassword", password);
      localStorage.setItem("registerRole", role);
      if (role === "student") navigate("/register/student-details");
      else navigate("/register/teacher-details");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <button onClick={() => navigate("/")} className="back-btn mb16">
        ← Back to Home
      </button>
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="role-radio-group flex-align-center gap-20 mb12 center">
          <label className="flex-align-center gap-4 fw500 mb0">
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={() => setRole("student")}
              className="mr3"
            />{" "}
            Student
          </label>
          <label className="flex-align-center gap-4 fw500 mb0">
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={role === "teacher"}
              onChange={() => setRole("teacher")}
              className="mr3"
            />{" "}
            Teacher
          </label>
        </div>
        <EmailPasswordFields
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          showConfirmPassword={true}
        />
        {error && <p className="error">{error}</p>}
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" className="w100 mt16">
            Next
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;
