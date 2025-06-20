import React from "react";
import "../styles/sidebar.css";

const Sidebar = ({ active, setActive }) => {
  const sidebarOptions = [
    { key: "dashboard", label: "Dashboard" },
    { key: "profile", label: "Profile" },
    { key: "update", label: "Update Details" },
    { key: "password", label: "Change Password" },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {sidebarOptions.map((opt) => (
            <li
              key={opt.key}
              className={active === opt.key ? "active" : ""}
              onClick={() => setActive(opt.key)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
