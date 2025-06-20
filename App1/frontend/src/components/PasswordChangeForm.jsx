import React, { useState } from "react";
import "../styles/passwordForm.css";

const PasswordChangeForm = ({ email }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || password.length < 8)
      return "Password must be at least 8 characters";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter";
    if (!/\d/.test(password)) return "Password must contain at least one digit";
    if (!/[@$!%*?&]/.test(password))
      return "Password must contain at least one special character (@$!%*?&)";
    if (!regex.test(password)) return "Password must meet all requirements";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);
    const passwordError = validatePassword(form.newPassword);
    if (passwordError) {
      setError(passwordError);
      setLoading(false);
      return;
    }
    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `/auth/change-password?email=${encodeURIComponent(email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: form.currentPassword,
            newPassword: form.newPassword,
          }),
        }
      );
      if (!res.ok) {
        let err;
        try {
          err = await res.json();
        } catch {
          err = { password: "Password change failed" };
        }
        setError(err.password || err.error || "Password change failed");
        setSuccessMsg("");
      } else {
        setSuccessMsg("Password changed successfully");
        setForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
      }
    } catch {
      setError("Password change failed");
      setSuccessMsg("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="password-form" onSubmit={handleSubmit}>
      <div className="mb16">
        <label>Current Password</label>
        <input
          type="password"
          name="currentPassword"
          value={form.currentPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          value={form.newPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div className="error mb8">{error}</div>}
      <button type="submit" className="w100 mt16" disabled={loading}>
        {loading ? "Changing..." : "Change Password"}
      </button>
      {successMsg && <div className="success mt8">{successMsg}</div>}
    </form>
  );
};

export default PasswordChangeForm;
