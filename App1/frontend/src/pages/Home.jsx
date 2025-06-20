import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="card text-center">
      <h1 className="mb8">EduTrack Portal</h1>
      <p className="mb32 text-secondary">
        Welcome! Please login or register to continue.
      </p>
      <div className="home-btn-group">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Home;
