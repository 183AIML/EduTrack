import React from "react";
import StudentForm from "../components/StudentForm";
import "../styles/RegisterStudent.css";

const RegisterStudent = () => {
  return (
    <div className="register-student-container">
      <h1>Register New Student</h1>
      <StudentForm />
    </div>
  );
};

export default RegisterStudent;
