import React from "react";


/*function MenuList() {
  const menuList = [
    { id: 1, label: "View All Companies"},
    { id: 2, label: "View Companies Applying"},
    { id: 3, label: "Update Company Information"},
    { id: 4, label: "Create Membership Plan"},
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
};*/

function MenuItem({ label, onClick, id }) {
  return (
      <li onClick={() => onClick(id)}>
          {label}
      </li>
  );
}

function MenuList({ onMenuItemClick }) {
  const menuList = [
      { id: 0, label: "View All Companies"},
      { id: 1, label: "View Companies Applying"},
      { id: 2, label: "Update Company Information"},
      { id: 3, label: "Create Membership Plan"},
      { id: 4, label: " Logout" },
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