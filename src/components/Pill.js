import React from "react";
import styled from "styled-components";

const StyledPill = styled.button `
  background: transparent;
  color: #fff;
  padding: 0.5rem;
  border-radius: 50px;
  border: 2px solid #fff;
  margin: 0 0.2rem;
  @media (max-width: 499px){
      padding: 0 .2rem;
      font-size: 10px;
      border: 2px solid #fff;
  }
`;

const Pill = (props) => {
  return <StyledPill>{props.pillTxt}</StyledPill>;
};

export default Pill;
