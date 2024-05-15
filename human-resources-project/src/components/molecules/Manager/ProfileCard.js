import React from "react";


function ProfileCard() {

  const email = localStorage.getItem('email');


  return (
    <div className="user-card">
      <img src="/avatar.png" alt="Avatar" className="avatar" />
      <div className="user-info">
        <h3>{email}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;