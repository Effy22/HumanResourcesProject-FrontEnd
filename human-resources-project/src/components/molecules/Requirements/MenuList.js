import React from "react";

function MenuItem({ label, onClick, id }) {
  return (
      <li onClick={() => onClick(id)}>
          {label}
      </li>
  );
}

function MenuList({ onMenuItemClick }) {
  const menuList = [
      { id: 0, label: "Add Expenses"},
      { id: 1, label: "Find All Expenses"},
      { id: 2, label: " Logout" },
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
                          onClick={onMenuItemClick}
                      />
                  ))}
              </ul>
          </div>

          <div className="logout-container row container end">
              Logout
          </div>
      </>
  );
}

export default MenuList;