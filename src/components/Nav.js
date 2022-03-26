import React from "react";
import NavLinks from "./NavLinks";
import styled from "styled-components";

const StyledNavNav = styled.nav`
  ul {
    display: flex;
    justify-content: flex-start;
    padding-left: 1rem;
    margin: 0;
  }

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
      border-bottom: 2px solid #1c7db7;
    }
  }

  li {
    margin: 0 0.5rem;
    list-style: none;
  }
`;

const Nav = () => {
  return (
    <StyledNavNav>
      <NavLinks />
    </StyledNavNav>
  );
};

export default Nav;
