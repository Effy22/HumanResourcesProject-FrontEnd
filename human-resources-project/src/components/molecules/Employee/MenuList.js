import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBuilding, faPeopleGroup, faPersonCircleCheck, faPersonCirclePlus, faPlane, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";


function MenuItem({ label, icon, onClick, id }) {
  return (
    <li onClick={()=> onClick(id)}>
      <FontAwesomeIcon icon={icon} />
      <a>{label}</a>
    </li>
  );
}

function MenuList({ onMenuItemClick }) {
  const menuList = [
    { id: 0, label: " Change Password ", icon: faPersonCirclePlus },
    { id: 1, label: " Update Employee ", icon: faUser },
    { id: 2, label: " Add Leave ", icon: faPlane },
    { id: 3, label: " Find All My Leaves ", icon: faPlane },
    { id: 4, label: " Add Expense ", icon: faPeopleGroup },
    { id: 5, label: " Logout", icon: faArrowRightFromBracket },
  ];

  return (
    <>
      <div className="menu-container">
        <ul className="menu-list">
          {menuList.map((menuItem) => (
            <MenuItem
              key={menuItem.id}
              id={menuItem.id}
              label={menuItem.label}
              icon={menuItem.icon}
              onClick={onMenuItemClick}
            />
          ))}
        </ul>
      </div>

      <div className="logout-container row container end">
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <a href="/">Logout</a>
      </div>
    </>
  );
}

export default MenuList;

