import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom";


const StyledNav = styled.ul`
        display: flex;
        justify-content: flex-start;
        padding-left: 1rem;
        margin: 0;
        
        a {
            text-decoration: none;
        }

        li {
            color: white;
            margin: 0 0.5rem;
            font-size: 1.3rem;
            list-style: none;
            padding: .75rem 0 .75rem 0;
        }

        .current {
            li {
                border-bottom: 2px solid #2EA0D6;
            }
        }
`;

const links = [
    {name: "Giveaways", path:"/"},
    {name: "Games", path:"/games"},
    {name: "Loot", path:"/loot"}
];

const Nav =()=>{
    return(
        <nav>
           <StyledNav>
                {links.map((link,index) => (
                    <NavLink key={index} to={link.path} className={({ isActive }) => (isActive ? 'current' : '')}>
                        <li>{link.name}</li>
                    </NavLink>
                ))}
            </StyledNav> 
        </nav>
        
    )
}

export default Nav;

