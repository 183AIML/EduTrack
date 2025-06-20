// App.jsx - Main routing for EduTrack frontend
// All main pages are routed here. See README for structure.

import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PersonalDetailsStudent from "./pages/PersonalDetailsStudent";
import PersonalDetailsTeacher from "./pages/PersonalDetailsTeacher";
import DashboardStudent from "./pages/DashboardStudent";
import DashboardTeacher from "./pages/DashboardTeacher";
import Toast from "./components/Toast";

function App() {
  // Global toast state
  const [toast, setToast] = useState({ message: "", type: "info" });

  // Helper to show toast from anywhere
  window.showToast = (message, type = "info") => setToast({ message, type });

  return (
    <div className="app-container">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />
      <Routes>
        <Route path="/" element={<Home showToast={showToast} />} />
        <Route path="/register" element={<Register showToast={showToast} />} />
        <Route path="/login" element={<Login showToast={showToast} />} />
        <Route
          path="/register/student-details"
          element={<PersonalDetailsStudent showToast={showToast} />}
        />
        <Route
          path="/register/teacher-details"
          element={<PersonalDetailsTeacher showToast={showToast} />}
        />
        <Route
          path="/dashboard/student"
          element={<DashboardStudent showToast={showToast} />}
        />
        <Route
          path="/dashboard/teacher"
          element={<DashboardTeacher showToast={showToast} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
