import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/form.css";

const PersonalDetailsTeacher = () => {
  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    address: "",
    subjectSpecialization: "",
    experienceYears: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const email = localStorage.getItem("registerEmail");
      const password = localStorage.getItem("registerPassword");
      const role = localStorage.getItem("registerRole");
      const payload = {
        email,
        password,
        role: role ? role.toUpperCase() : "TEACHER",
        ...form,
      };
      const res = await fetch("/auth/register/teacher-full", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      // Registration complete, clear temp storage
      localStorage.removeItem("registerEmail");
      localStorage.removeItem("registerPassword");
      localStorage.removeItem("registerRole");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <button onClick={() => navigate("/register")} className="back-btn mb16">
        ← Back
      </button>
      <h2 className="text-center mb24">Teacher Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={form.dob}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subjectSpecialization"
          placeholder="Subject Specialization"
          value={form.subjectSpecialization}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="experienceYears"
          placeholder="Experience (years)"
          value={form.experienceYears}
          onChange={handleChange}
          min={0}
          required
        />
        {error && <p className="error">{error}</p>}
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" className="w100 mt16">
            Save
          </button>
        )}
      </form>
    </div>
  );
};

export default PersonalDetailsTeacher;
