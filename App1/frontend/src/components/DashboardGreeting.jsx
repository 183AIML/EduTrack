import React from "react";
import "../styles/dashboardGreeting.css";

const DashboardGreeting = ({ name, email }) => (
  <div className="dashboard-greeting">
    <h2>Hello, {name || email || "User"}!</h2>
    <p>Welcome to your dashboard. Have a great day!</p>
  </div>
);

export default DashboardGreeting;
