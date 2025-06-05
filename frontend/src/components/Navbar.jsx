import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">EduTrack</div>
      <ul className="navbar-links">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/register-student">Register Student</a>
        </li>
        <li>
          <a href="/view-students">View Students</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
