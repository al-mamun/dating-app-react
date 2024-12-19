import React from "react";
import { NavLink } from "react-router";

type SidebarMenuItemProps = {
  name: string;
  icon: React.ReactNode; // For dynamic icons
  to: string; // Route path for navigation
};

const SidebarCustomMenuItem: React.FC<SidebarMenuItemProps> = ({
  name,
  icon,
  to,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 text-base font-sm rounded-md my-3 transition${
          isActive
            ? "text-gray-600 bg-gray-100"
            : " hover:bg-gray-100 text-white hover:text-black"
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
};

export default SidebarCustomMenuItem;
