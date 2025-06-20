import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import TeacherUpdateForm from "../components/TeacherUpdateForm";
import PasswordChangeForm from "../components/PasswordChangeForm";
import ProfileDetails from "../components/ProfileDetails";
import DashboardGreeting from "../components/DashboardGreeting";
import "../styles/form.css";
import "../styles/dashboardStudent.css";

const DashboardTeacher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    fetch("/dashboard/teacher", {
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
        <h2 className="text-center mb24">Teacher Dashboard</h2>
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
        <main
          className="dashboard-student-main"
          aria-label="Teacher dashboard main content"
        >
          {error && <div className="error-message">{error}</div>}
          {active === "dashboard" && (
            <DashboardGreeting name={data.name} email={data.email} />
          )}
          {active === "profile" && (
            <ProfileDetails
              details={{
                "Personal Information": [
                  ["Name", data.name],
                  ["Gender", data.gender],
                  ["Date of Birth", data.dob],
                  ["Subject Specialization", data.subjectSpecialization],
                  ["Experience Years", data.experienceYears],
                ],
                "Contact Details": [
                  ["Phone", data.phone],
                  ["Address", data.address],
                ],
              }}
            />
          )}
          {active === "update" && (
            <TeacherUpdateForm data={data} onSuccess={() => {}} />
          )}
          {active === "password" && <PasswordChangeForm email={data.email} />}
        </main>
      </div>
    </>
  );
};

export default DashboardTeacher;
