import React from "react";

const Dropdown = ({ label, options, onChange }) => {
  return (
    <div>
      <label style={styles.label}>
        {label}
        <select onChange={onChange}>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>{option.display}</option>
            ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;

const styles = {
    label: {
        fontWeight: "bold"
    }
}