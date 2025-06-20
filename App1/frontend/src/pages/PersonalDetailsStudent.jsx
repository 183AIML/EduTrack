import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/personalDetailsStudent.css";

const PersonalDetailsStudent = () => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    religion: "",
    category: "",
    caste: "",
    aadhaar: "",
    githubId: "",
    phone: "",
    secondaryEmail: "",
    address: "",
    pincode: "",
    city: "",
    district: "",
    state: "",
    fatherName: "",
    motherName: "",
    parentsMobile: "",
    sslcMarks: "",
    registrationNumber: "",
    admissionYear: "",
    department: "",
    semester: "",
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
        role: role ? role.toUpperCase() : "STUDENT",
        ...form,
      };
      const res = await fetch("/auth/register/student-full", {
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
    <div className="personal-details-card">
      <button onClick={() => navigate("/register")} className="back-btn mb16">
        ← Back
      </button>
      <h2 className="text-center mb24">Student Details</h2>
      <form onSubmit={handleSubmit} className="w100">
        {/* Part 1: Personal Information */}
        <div className="personal-details-section">
          <h3>Personal Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <div className="mb16 gender-row flex-align-center gap-10">
            <label className="mr7 mb0">Gender:</label>
            <div className="gender-options flex-align-center gap-12">
              <label className="flex-align-center gap-3 mb0">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === "Male"}
                  onChange={handleChange}
                  required
                  className="mr3"
                />
                Male
              </label>
              <label className="flex-align-center gap-3 mb0">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === "Female"}
                  onChange={handleChange}
                  required
                  className="mr3"
                />
                Female
              </label>
            </div>
          </div>
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleChange}
            required
          />
          <div className="mb16">
            <label>Religion:</label>
            <select
              name="religion"
              value={form.religion}
              onChange={handleChange}
              required
            >
              <option value="">Select Religion</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Jain">Jain</option>
              <option value="Sikh">Sikh</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb16">
            <label>Category:</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
          </div>
          <input
            type="text"
            name="caste"
            placeholder="Caste"
            value={form.caste}
            onChange={handleChange}
          />
          <input
            type="text"
            name="aadhaar"
            placeholder="Aadhaar Card Number"
            value={form.aadhaar}
            onChange={handleChange}
          />
          <input
            type="text"
            name="githubId"
            placeholder="GitHub ID"
            value={form.githubId}
            onChange={handleChange}
          />
        </div>
        {/* Part 2: Contact Details */}
        <div className="personal-details-section">
          <h3>Contact Details</h3>
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="secondaryEmail"
            placeholder="Secondary Email (if any)"
            value={form.secondaryEmail}
            onChange={handleChange}
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
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={form.district}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
          />
        </div>
        {/* Part 3: Parents / Guardian Details */}
        <div className="personal-details-section">
          <h3>Parents / Guardian Details</h3>
          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={form.fatherName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother's Name"
            value={form.motherName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="parentsMobile"
            placeholder="Parents' Mobile Number (if any)"
            value={form.parentsMobile}
            onChange={handleChange}
          />
        </div>
        {/* Part 4: Academic Records */}
        <div className="personal-details-section">
          <h3>Academic Records</h3>
          <input
            type="number"
            name="sslcMarks"
            placeholder="SSLC Marks Obtained"
            value={form.sslcMarks}
            onChange={handleChange}
          />
        </div>
        {/* Part 5: College Related */}
        <div className="personal-details-section">
          <h3>College Related</h3>
          <input
            type="text"
            name="registrationNumber"
            placeholder="Registration Number (once assigned)"
            value={form.registrationNumber}
            onChange={handleChange}
          />
          <div className="mb16">
            <label>
              Admission Year
              <span className="required-asterisk">*</span>:
            </label>
            <select
              name="admissionYear"
              value={form.admissionYear}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div className="mb16">
            <label>
              Department
              <span className="required-asterisk">*</span>:
            </label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="Computer Science and Engineering">
                Computer Science and Engineering
              </option>
            </select>
          </div>
          <div className="mb16">
            <label>
              Current Semester
              <span className="required-asterisk">*</span>:
            </label>
            <select
              name="semester"
              value={form.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" className="w100 mt16">
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default PersonalDetailsStudent;
