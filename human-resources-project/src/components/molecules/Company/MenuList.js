import React from "react";

function MenuList() {
  const menuList = [
    { id: 1, label: "Menu Item 1", url: "#" },
    { id: 2, label: "Menu Item 2", url: "#" },
    { id: 3, label: "Menu Item 3", url: "#" },
    // Add more menu items here
  ];

  return (
    <div className="menu-container">
     
      <ul className="menu-list">
        {menuList.map((menuItem) => (
          <li key={menuItem.id}>
            <a href={menuItem.url}>{menuItem.label}</a>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;