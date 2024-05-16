
import ProfileCard from "./ProfileCard";
import logo from '../../../images/logo.png';
import React from "react";


function Header () {
  return (
    <header className="header">
      <div className="logo-container" onClick={() => alert("Menu opened!")}>
        <img src={logo} alt="Logo" />
      </div>
       <div>
         <ProfileCard />
      </div>
    </header>
  );
};

export default Header;