import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCog,faCalendarAlt, faPeopleGroup, faPersonCircleCheck, faPersonCirclePlus, faPlane, faUser, faUsers, faFileInvoiceDollar, faInfoCircle, faHandshake } from "@fortawesome/free-solid-svg-icons";


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
    { id: 0, label: " Change Password ", icon: faCog },
    { id: 1, label: " Update Employee ", icon: faUser },
    { id: 2, label: " Add Leave ", icon: faCalendarAlt },
    { id: 3, label: " My Leaves ", icon: faPlane },
    { id: 4, label: " Add Expense ", icon: faFileInvoiceDollar },
    { id: 5, label: " Expenses List", icon: faInfoCircle },
    { id: 6, label: " My Shifts ", icon: faHandshake },
    { id: 7, label: " Logout", icon: faArrowRightFromBracket },
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

