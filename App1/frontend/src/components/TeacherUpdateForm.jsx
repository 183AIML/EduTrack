import React, { useState } from "react";
import "../styles/form.css";

const TeacherUpdateForm = ({ data, onSuccess }) => {
  const [form, setForm] = useState({
    name: data.name,
    dob: data.dob,
    phone: data.phone,
    address: data.address,
    subjectSpecialization: data.subjectSpecialization,
    experienceYears: data.experienceYears,
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `/auth/personal-details/teacher?email=${encodeURIComponent(
          data.email
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error("Update failed");
      setSuccessMsg("Profile updated successfully");
      onSuccess && onSuccess();
    } catch {
      setSuccessMsg("");
      window.showToast && window.showToast("Update failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <h3 className="mb16 left-align">Update Details</h3>
      <div className="mb16">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>Subject Specialization</label>
        <input
          type="text"
          name="subjectSpecialization"
          value={form.subjectSpecialization}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb16">
        <label>Experience (years)</label>
        <input
          type="number"
          name="experienceYears"
          min="0"
          value={form.experienceYears}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="w100 mt16" disabled={loading}>
        {loading ? "Saving..." : "Save Changes"}
      </button>
      {successMsg && <div className="success mt8">{successMsg}</div>}
    </form>
  );
};

export default TeacherUpdateForm;
