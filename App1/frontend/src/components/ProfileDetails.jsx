import React from "react";
import "../styles/profileDetails.css";

const ProfileDetails = ({ details }) => (
  <div className="profile-details">
    {Object.entries(details).map(([section, fields]) => (
      <div key={section} className="profile-section-card">
        <div className="profile-section-title-and-list">
          <div className="profile-section-title">{section}</div>
          <div className="profile-section-list">
            {fields.map(([label, value]) => (
              <div className="profile-field-list" key={label}>
                <span className="profile-label-list">{label}:</span>{" "}
                <span className="profile-value-list">
                  {value || <span className="profile-value-muted">—</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProfileDetails;
