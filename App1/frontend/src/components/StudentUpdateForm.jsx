import React, { useState } from "react";
import "../styles/personalDetailsStudent.css";

const StudentUpdateForm = ({ data, onSuccess }) => {
  const [form, setForm] = useState({
    name: data.name || "",
    gender: data.gender || "",
    dob: data.dob || "",
    religion: data.religion || "",
    category: data.category || "",
    caste: data.caste || "",
    aadhaar: data.aadhaar || "",
    githubId: data.githubId || "",
    phone: data.phone || "",
    secondaryEmail: data.secondaryEmail || "",
    address: data.address || "",
    pincode: data.pincode || "",
    city: data.city || "",
    district: data.district || "",
    state: data.state || "",
    fatherName: data.fatherName || "",
    motherName: data.motherName || "",
    parentsMobile: data.parentsMobile || "",
    sslcMarks: data.sslcMarks || "",
    registrationNumber: data.registrationNumber || "",
    admissionYear: data.admissionYear || "",
    department: data.department || "",
    semester: data.semester || "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Full Name is required";
    if (!form.gender) return "Gender is required";
    if (!form.dob) return "Date of Birth is required";
    if (!form.religion.trim()) return "Religion is required";
    if (!form.category.trim()) return "Category is required";
    if (!form.aadhaar || !/^\d{12}$/.test(form.aadhaar))
      return "Aadhaar must be 12 digits";
    if (!form.phone || !/^\d{10}$/.test(form.phone))
      return "Mobile number must be 10 digits";
    if (!form.fatherName.trim()) return "Father's Name is required";
    if (!form.motherName.trim()) return "Mother's Name is required";
    if (!form.parentsMobile || !/^\d{10}$/.test(form.parentsMobile))
      return "Parents' mobile number must be 10 digits";
    if (!form.sslcMarks || isNaN(form.sslcMarks))
      return "SSLC Marks are required";
    if (!form.admissionYear) return "Admission Year is required";
    if (!form.department) return "Department is required";
    if (!form.semester) return "Semester is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `/auth/personal-details/student?email=${encodeURIComponent(
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
      setError("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="personal-details-card update-form-modern">
      <h2 className="text-center mb24">Update Student Details</h2>
      <form onSubmit={handleSubmit} className="w100">
        {/* Part 1: Personal Information */}
        <div className="personal-details-section modern-section">
          <h3>Personal Information</h3>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <div className="mb16 gender-row flex-align-center gap-12">
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
            value={form.caste}
            onChange={handleChange}
            placeholder="Caste"
          />
          <input
            type="text"
            name="aadhaar"
            value={form.aadhaar}
            onChange={handleChange}
            placeholder="Aadhaar Card Number"
            required
          />
          <input
            type="text"
            name="githubId"
            value={form.githubId}
            onChange={handleChange}
            placeholder="GitHub ID"
          />
        </div>
        {/* Part 2: Contact Details */}
        <div className="personal-details-section modern-section">
          <h3>Contact Details</h3>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
          <input
            type="email"
            name="secondaryEmail"
            value={form.secondaryEmail}
            onChange={handleChange}
            placeholder="Secondary Email (if any)"
          />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
          />
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            type="text"
            name="district"
            value={form.district}
            onChange={handleChange}
            placeholder="District"
          />
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
          />
        </div>
        {/* Part 3: Parents / Guardian Details */}
        <div className="personal-details-section modern-section">
          <h3>Parents / Guardian Details</h3>
          <input
            type="text"
            name="fatherName"
            value={form.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
          />
          <input
            type="text"
            name="motherName"
            value={form.motherName}
            onChange={handleChange}
            placeholder="Mother's Name"
          />
          <input
            type="text"
            name="parentsMobile"
            value={form.parentsMobile}
            onChange={handleChange}
            placeholder="Parents' Mobile Number (if any)"
          />
        </div>
        {/* Part 4: Academic Records */}
        <div className="personal-details-section modern-section">
          <h3>Academic Records</h3>
          <input
            type="number"
            name="sslcMarks"
            value={form.sslcMarks}
            onChange={handleChange}
            placeholder="SSLC Marks Obtained"
          />
        </div>
        {/* Part 5: College Related */}
        <div className="personal-details-section modern-section">
          <h3>College Related</h3>
          <input
            type="text"
            name="registrationNumber"
            value={form.registrationNumber}
            onChange={handleChange}
            placeholder="Registration Number (once assigned)"
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
        {successMsg && <div className="success mt8">{successMsg}</div>}
        <button type="submit" className="w100 mt16" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default StudentUpdateForm;
