import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // your styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>EduTrack Portal</h1>
      <div className="role-options">
        <div className="dropdown">
          <button className="dropbtn">Student</button>
          <div className="dropdown-content">
            <button onClick={() => navigate("/student/login")}>Login</button>
            <button onClick={() => navigate("/student/register")}>
              Register
            </button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Teacher</button>
          <div className="dropdown-content">
            <button onClick={() => navigate("/teacher/login")}>Login</button>
            <button onClick={() => navigate("/teacher/register")}>
              Register
            </button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Admin</button>
          <div className="dropdown-content">
            <button onClick={() => navigate("/admin/login")}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
