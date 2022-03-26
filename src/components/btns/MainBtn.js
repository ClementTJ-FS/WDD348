import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  padding: 0.5rem;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #1c7db7;
  @media (max-width: 499px) {
    padding: .5rem;
    font-size: 12px;
  }
`;

const MainBtn = (props) => {
  return (
    <StyledBtn type="button" aria-label="button">
      {props.btnTxt}
    </StyledBtn>
  );
};

export default MainBtn;
