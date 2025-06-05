import React, { useState } from "react";
import "../styles//StudentForm.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    studentPhone: "",
    parentPhone: "",
    aadhaar: "",
    gender: "",
    mothersName: "",
    fathersName: "",
    address: "",
    sslcMarks: "",
    status: "",
    caste: "",
    category: "",
    religion: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Later: Axios POST here to backend
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <h2>Student Registration</h2>
      <div className="form-grid">
        <input type="text" name="registrationNumber" placeholder="Registration No" value={formData.registrationNumber} onChange={handleChange} required />
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="studentPhone" placeholder="Student Phone" value={formData.studentPhone} onChange={handleChange} required />
        <input type="tel" name="parentPhone" placeholder="Parent Phone" value={formData.parentPhone} onChange={handleChange} required />
        <input type="text" name="aadhaar" placeholder="Aadhaar Number" value={formData.aadhaar} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
        <input type="text" name="mothersName" placeholder="Mother's Name" value={formData.mothersName} onChange={handleChange} required />
        <input type="text" name="fathersName" placeholder="Father's Name" value={formData.fathersName} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="number" name="sslcMarks" placeholder="SSLC Marks" value={formData.sslcMarks} onChange={handleChange} required />
        <select name="status" value={formData.status} onChange={handleChange} required>
          <option value="">Status</option>
          <option value="STUDYING">Studying</option>
          <option value="DROPPED">Dropped</option>
          <option value="PASSED">Passed</option>
        </select>
        <input type="text" name="caste" placeholder="Caste" value={formData.caste} onChange={handleChange} required />
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Category</option>
          <option value="GEN">GEN</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>
        <select name="religion" value={formData.religion} onChange={handleChange} required>
          <option value="">Religion</option>
          <option value="HINDU">HINDU</option>
          <option value="MUSLIM">MUSLIM</option>
          <option value="CHRISTIAN">CHRISTIAN</option>
          <option value="SIKH">SIKH</option>
          <option value="BUDDHIST">BUDDHIST</option>
          <option value="JAIN">JAIN</option>
          <option value="OTHER">OTHER</option>
        </select>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
