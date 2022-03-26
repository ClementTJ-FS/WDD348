import React from "react";
import styled from "styled-components";

const StyledDD = styled.select`
border: none;
padding: .2rem .1rem;
width: 70%;
`

const Dropdown = ({ label, options, onChange }) => {
  return (
    <div style={styles.inputContainer}>
      <label style={styles.label}>
        {label}
        <StyledDD onChange={onChange}>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>{option.display}</option>
            ))}
        </StyledDD>
      </label>
    </div>
  );
};

export default Dropdown;

const styles = {
    label: {
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".2rem"
    },
    inputContainer:{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }
}