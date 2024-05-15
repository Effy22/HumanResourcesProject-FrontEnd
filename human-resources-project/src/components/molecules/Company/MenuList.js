import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBuilding, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

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
      { id: 0, label: "  View All Companies", icon: faPeopleGroup },
      { id: 1, label: "  View Companies Applying", icon: faPeopleGroup },
      { id: 2, label: "  Update Company", icon: faBuilding },
      { id: 3, label: "  Create Membership Plan", icon: faBuilding},
      { id: 4, label: "  Logout", icon: faArrowRightFromBracket },
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