import React from "react";
import { NavLink } from "react-router-dom";



const links = [
  { name: "Giveaways", path: "/" },
  { name: "Games", path: "/games" },
  { name: "Loot", path: "/loot" },
];

export default function NavLinks(props) {
  return (
    <ul>
        {links.map((link, index) => (
          <li key={index} onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <p>{link.name}</p>
            </NavLink>
          </li>
        ))}
    </ul>
  );
}
