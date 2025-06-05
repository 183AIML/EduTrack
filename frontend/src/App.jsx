import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RegisterStudent from "./pages/RegisterStudent";
// Dummy placeholders for Dashboard and ViewStudents
import Dashboard from "./pages/Dashboard";
import ViewStudents from "./pages/ViewStudents";
import NotFound from "./pages/NotFound";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/view-students" element={<ViewStudents />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
