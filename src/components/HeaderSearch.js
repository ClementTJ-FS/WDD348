import React from "react";
import {FaSearch} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.div`
        display: flex;
        justify-content: flex-end;
        padding-right: 1rem;

    .current{
        button{
            border-bottom: 2px solid #1C7DB7;
        }
    } 
    button{
        color: #fff;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: .75rem .1rem;
    }
`

const Search =({setSInput})=>{
    
    return(     
        <StyledLink>
            <NavLink to= "/results" className={({ isActive }) => (isActive ? 'current' : '')}>
                <button aria-label="Search Button"><FaSearch size="25px"/></button>
            </NavLink>
        </StyledLink>
    )
};
export default Search;
