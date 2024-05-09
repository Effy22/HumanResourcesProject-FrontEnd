import React from "react";

function ProfileCard() {
  return (
    <div className="user-card">
      <img src="avatar.png" alt="Avatar" className="avatar" />
      <div className="user-info">
        <h3>John Doe</h3>
      </div>
    </div>
  );
};

export default ProfileCard;