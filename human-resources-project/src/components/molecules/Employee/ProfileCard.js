import React from "react";

function ProfileCard() {
  return (
    <div className="user-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PIqzX1p7ueIQSi5p29gEtEf165sYb_DhWw&s" alt="Avatar" className="avatar" />
      <div className="user-info">
        <h3>John Doe</h3>
      </div>
    </div>
  );
};

export default ProfileCard;