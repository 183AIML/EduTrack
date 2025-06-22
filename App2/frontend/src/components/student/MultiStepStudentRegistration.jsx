import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import SectionForm from "./SectionForm";
import { registerStudent } from "../../services/api";
import "../../styles/registration.css";

const initialFormData = {
  // Auth
  email: "",
  password: "",
  confirmPassword: "",
  role: "student", // Default role
  // Personal
  fullName: "",
  dob: "",
  gender: "",
  phoneNumber: "",
  secondaryEmail: "",
  aadhaar: "",
  // Address
  address: "",
  pincode: "",
  city: "",
  district: "",
  state: "",
  // Academic
  department: "Computer Science & Engineering",
  semester: "",
  year: "",
  religion: "",
  category: "",
  caste: "",
  sslcMarks: "",
  regNumber: "",
  admissionYear: "",
  sspId: "",
  nspId: "",
  apaarId: "",
  admissionType: "",
  eduBoard: "",
  // Parent
  fatherName: "",
  motherName: "",
  parentMobile: "",
};

const stepFields = [
  ["fullName", "dob", "gender", "phoneNumber", "aadhaar"],
  ["address", "pincode", "city", "district", "state"],
  [
    "department",
    "semester",
    "year",
    "religion",
    "category",
    "caste",
    "sslcMarks",
    "admissionYear",
    "admissionType",
    "eduBoard",
  ],
  ["fatherName", "motherName", "parentMobile"],
];

const steps = [
  "Personal Details",
  "Address Details",
  "Academic Details",
  "Parent Details",
];

const MultiStepStudentRegistration = ({ userInfo }) => {
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
  const [fieldErrors, setFieldErrors] = useState({});
  const [animating, setAnimating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateStep = () => {
    const requiredFields = stepFields[activeStep];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].toString().trim() === "") {
        newErrors[field] = "Required";
      }
    });
    setFieldErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    setError("");
    if (!validateStep()) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveStep((prev) => prev + 1);
      setAnimating(false);
    }, 200);
  };
  const handleBack = () => {
    setError("");
    setAnimating(true);
    setTimeout(() => {
      setActiveStep((prev) => prev - 1);
      setAnimating(false);
    }, 200);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submit
    if (!validateStep()) return;
    setError("");
    setLoading(true);
    try {
      // Register user first
      const { email, password, role } = formData;
      const userRes = await import("../../services/api").then((api) =>
        api.registerUser({ email, password, role })
      );
      // Register student with userId
      await registerStudent({ ...formData, userId: userRes.userId });
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
      <h1>Student Registration</h1>
      {success && (
        <Alert severity="success">
          Profile created! Redirecting to login...
        </Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <SectionForm
          activeStep={activeStep}
          formData={formData}
          handleChange={handleChange}
          fieldErrors={fieldErrors}
          handleNext={handleNext}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          loading={loading}
          animating={animating}
        />
      </form>
      <div className="step-indicator">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`step ${index === activeStep ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiStepStudentRegistration;
