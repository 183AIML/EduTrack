import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import StudentUpdateForm from "../components/StudentUpdateForm";
import PasswordChangeForm from "../components/PasswordChangeForm";
import ProfileDetails from "../components/ProfileDetails";
import DashboardGreeting from "../components/DashboardGreeting";
import "../styles/form.css";
import "../styles/dashboardStudent.css";

const DashboardStudent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    fetch("/dashboard/student", {
      headers: { Authorization: `Bearer ${token}` },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          setError("Session expired. Please login again.");
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(setData)
      .catch(() => {
        setError("Unauthorized or session expired");
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (!data)
    return (
      <div className="card">
        <h2 className="text-center mb24">Student Dashboard</h2>
        <Loader />
      </div>
    );

  return (
    <>
      <header className="header-edutrack">
        EduTrack
        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="logout-btn header-logout"
        >
          Logout
        </button>
      </header>
      <div className="dashboard-student-root">
        <Sidebar active={active} setActive={setActive} />
        {active === "dashboard" && (
          <main
            className="dashboard-student-main dashboard-greeting-main"
            aria-label="Student dashboard main content"
          >
            <DashboardGreeting name={data.name} email={data.email} />
          </main>
        )}
        {active === "profile" && (
          <ProfileDetails
            details={{
              "Personal Information": [
                ["Name", data.name],
                ["Gender", data.gender],
                ["Date of Birth", data.dob],
                ["Religion", data.religion],
                ["Category", data.category],
                ["Caste", data.caste],
                ["Aadhaar", data.aadhaar],
                ["GitHub ID", data.githubId],
              ],
              "Contact Details": [
                ["Phone", data.phone],
                ["Secondary Email", data.secondaryEmail],
                ["Address", data.address],
                ["Pincode", data.pincode],
                ["City", data.city],
                ["District", data.district],
                ["State", data.state],
              ],
              "Parent/Guardian Details": [
                ["Father's Name", data.fatherName],
                ["Mother's Name", data.motherName],
                ["Parents' Mobile", data.parentsMobile],
              ],
              "Academic Records": [["SSLC Marks", data.sslcMarks]],
              "College Related": [
                ["Registration Number", data.registrationNumber],
                ["Admission Year", data.admissionYear],
                ["Department", data.department],
                ["Semester", data.semester],
              ],
            }}
          />
        )}
        {active === "update" && (
          <main
            className="dashboard-student-main dashboard-update-main"
            aria-label="Student update details main content"
          >
            <StudentUpdateForm data={data} onSuccess={() => {}} />
          </main>
        )}
        {active === "password" && (
          <main
            className="dashboard-student-main dashboard-password-main"
            aria-label="Student password change main content"
          >
            <PasswordChangeForm email={data.email} />
          </main>
        )}
      </div>
    </>
  );
};

export default DashboardStudent;
