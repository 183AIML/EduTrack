import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { registerTeacher } from "../../services/api";
import InputField from "../common/InputField";

const initialFormData = {
  email: "",
  password: "",
  role: "teacher",
  fullName: "",
  dob: "",
  gender: "",
  phoneNumber: "",
  department: "",
  qualification: "",
  experience: "",
  aadhaar: "",
};

const steps = ["Personal Details", "Professional Details"];

export default function MultiStepTeacherRegistration({ userInfo }) {
  if (!userInfo || !userInfo.email || !userInfo.password || !userInfo.role) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        Invalid registration flow. Please <a href="/register">start again</a>.
      </div>
    );
  }
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    ...initialFormData,
    email: userInfo.email,
    password: userInfo.password,
    role: userInfo.role,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submit
    setError("");
    setLoading(true);
    try {
      // Register user first
      const { email, password, role } = formData;
      const userRes = await import("../../services/api").then((api) =>
        api.registerUser({ email, password, role })
      );
      // Register teacher with userId
      await registerTeacher({ ...formData, userId: userRes.userId });
      sessionStorage.removeItem("register_email");
      sessionStorage.removeItem("register_password");
      sessionStorage.removeItem("register_role");
      sessionStorage.removeItem("register_userId");
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <h1>Teacher Registration</h1>
      {success && (
        <Alert severity="success">
          Profile created! Redirecting to login...
        </Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        {/* Render section based on activeStep */}
        <div>
          Step {activeStep + 1}: {steps[activeStep]}
        </div>
        {/* Section form fields go here */}
        {activeStep === 0 && (
          <div>
            <InputField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <InputField
              label="Date of Birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <InputField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
            <InputField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <InputField
              label="Aadhaar"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
            />
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <InputField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
            <InputField
              label="Qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            />
            <InputField
              label="Experience (years)"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div style={{ marginTop: 16 }}>
          <button
            type="button"
            onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
            disabled={activeStep === 0}
          >
            Back
          </button>
          {activeStep < steps.length - 1 && (
            <button
              type="button"
              onClick={() =>
                setActiveStep((s) => Math.min(steps.length - 1, s + 1))
              }
              disabled={activeStep === steps.length - 1}
              style={{ marginLeft: 8 }}
            >
              Next
            </button>
          )}
          {activeStep === steps.length - 1 && (
            <button type="submit" disabled={loading} style={{ marginLeft: 8 }}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
