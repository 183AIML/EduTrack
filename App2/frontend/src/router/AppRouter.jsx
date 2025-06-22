import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import StudentRegisterPage from "../pages/StudentRegisterPage";
import TeacherRegisterPage from "../pages/TeacherRegisterPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
import UpdateDetailsPage from "../pages/UpdateDetailsPage";
import ChangePasswordPage from "../pages/ChangePasswordPage";
import ViewStudentsPage from "../pages/ViewStudentsPage";
import AdminPanelPage from "../pages/AdminPanelPage";
import RegisterPage from "../pages/RegisterPage";

export default function AppRouter() {
  const isLoggedIn = Boolean(localStorage.getItem("edutract_token"));
  const role = localStorage.getItem("edutract_role");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register/student" element={<StudentRegisterPage />} />
      <Route path="/register/teacher" element={<TeacherRegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile"
        element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
      />
      <Route
        path="/update"
        element={isLoggedIn ? <UpdateDetailsPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/change-password"
        element={isLoggedIn ? <ChangePasswordPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/view-students"
        element={
          isLoggedIn && role === "teacher" ? (
            <ViewStudentsPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin-panel"
        element={
          isLoggedIn && role === "admin" ? (
            <AdminPanelPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
