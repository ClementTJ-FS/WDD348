import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding-left: 1rem;
  margin: 0;

  a {
    text-decoration: none;
  }

  p {
    color: white;
    font-size: 1.3rem;
    padding: 0.75rem 0 0.75rem 0;
  }

  .current {
    p {
      border-bottom: 2px solid #1C7DB7;
    }
  }

  li {
    margin: 0 0.5rem;
    list-style: none;
    
  }
`;

const links = [
  { name: "Giveaways", path: "/" },
  { name: "Games", path: "/games" },
  { name: "Loot", path: "/loot" },
];

const Nav = () => {
  return (
    <nav>
      <StyledNav>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              <p>{link.name}</p>
            </NavLink>
          </li>
        ))}
      </StyledNav>
    </nav>
  );
};

export default Nav;
