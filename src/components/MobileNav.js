import React from "react";
import NavLinks from "./NavLinks";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { useState } from "react";

const StyledNavNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 2.5rem;
    padding: 1rem;
    background: #1E2429;
    box-shadow: 5px 6px 10px rgba(0,0,0,1);
    height: 100vh;
    border-top: 2px solid #1c7db7;
  }

  a {
    text-decoration: none;
  }

  p {
    color: white;
    font-size: 1.3rem;
    margin: 0;
  }

  .current {
    p {
      border-bottom: 2px solid #1c7db7;
    }
  }

  li {
    list-style: none;
    padding: .5rem 0;
  }

  .menuBtn, .closeBtn{
    cursor: pointer;
    position: absolute;
    top: .5rem;
    left: 0;
    z-index: 10;
    padding-left: 1rem;
  }
`;

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const menuIcon = (
    <div>
      <HiMenu
        color="white"
        size="40px"
        className="menuBtn"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
  const closeIcon = (
    <div>
      <IoCloseSharp
        color="white"
        size="40px"
        className="closeBtn"
        onClick={() => setOpen(!open)}
      />
    </div>
  );

  const closeMenu =() =>{
    setOpen(false)
  }

  return (
    <StyledNavNav>
      {open ? closeIcon : menuIcon}
      {open && <NavLinks isMobile={true} closeMenu={closeMenu}/>}
    </StyledNavNav>
  );
};

export default MobileNav;
