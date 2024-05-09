##
import React, { useState } from "react";
import EmployeeRegister from "./EmployeeRegister";
import EmployeeList from "./EmployeeList";
import ManagerList from "./ManagerList";

function MenuList() {
  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const menuList = [
    { id: 1, label: "Employee Register", component: <EmployeeRegister /> },
    { id: 2, label: "Employee List", component: <EmployeeList /> },
    { id: 3, label: "Manager List", component: <ManagerList /> },
    // Add more menu items here
  ];

  const handleMenuItemClick = (id) => {
    setSelectedMenuId(id);
  };

  return (
    <div className="menu-container">
      <ul className="menu-list">
        {menuList.map((menuItem) => (
          <li key={menuItem.id}>
            <button onClick={() => handleMenuItemClick(menuItem.id)}>
              {menuItem.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="middle-area">
        {selectedMenuId &&
          menuList
            .filter((menuItem) => menuItem.id === selectedMenuId)
            .map((menuItem) => menuItem.component)}
      </div>
    </div>
  );
}

export default MenuList;
 bunu yapabiliriz